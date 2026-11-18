// Runs after `vite build`. Writes the static SEO pages into dist/, plus sitemap.xml, robots.txt, llms.txt and 404.html,
// and switches the whole site between "private preview" and "launched" in one place:
//   src/gate.js  →  GATE_HASH = ''  means launched (indexable). Anything else means private preview (noindex, robots Disallow).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE } from './seo/site.mjs'
import { renderPage, businessNode, websiteNode } from './seo/template.mjs'
import { PAGES } from './seo/pages.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
if (!existsSync(join(dist, 'index.html'))) throw new Error('Run `vite build` first (dist/index.html is missing).')

// ── launch switch
const gateSrc = readFileSync(join(root, 'src', 'gate.js'), 'utf8')
const gateHash = (gateSrc.match(/GATE_HASH\s*=\s*'([^']*)'/) || [])[1] ?? ''
const launched = gateHash === ''
console.log(launched ? '→ LAUNCHED build (indexable)' : '→ PRIVATE PREVIEW build (noindex, robots disallow)')

// ── assets the pages share with the app (hashed names come from the Vite build)
const html = readFileSync(join(dist, 'index.html'), 'utf8')
const css = '/' + (html.match(/href="\.\/(assets\/index-[^"]+\.css)"/) || [])[1]
const assets = readdirSync(join(dist, 'assets'))
const find = (re) => '/assets/' + assets.find((f) => re.test(f))
const ctx = {
  launched, gateHash, css, pages: PAGES,
  logoInk: find(/^shotwell-logo-standard-ink-.*\.svg$/),
  logoBone: find(/^shotwell-logo-standard-bone-.*\.svg$/),
  fonts: { heading: find(/^Syne-Variable-.*\.woff2$/) },
}
if (css.endsWith('undefined')) throw new Error('Could not find the built stylesheet in dist/index.html')

// ── landing pages
const today = new Date().toISOString().slice(0, 10)
for (const page of PAGES) {
  const dir = join(dist, page.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), renderPage(page, ctx))
}
console.log(`→ ${PAGES.length} landing pages written`)

// ── home page: launch switch for the robots meta (the rest of its head is maintained in index.html)
let home = html
home = home.replace('</head>', `    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [businessNode(), websiteNode()] })}</script>\n  </head>`)
if (launched) home = home.replace(/\s*<!--[^>]*remove this line at launch[^>]*-->\s*<meta name="robots"[^>]*>/i, '\n    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />')
// Launched builds: pre-render the React home page to real HTML (private preview stays client-rendered behind the password).
if (launched) {
  execSync('npx vite build -c vite.ssr.config.js', { cwd: root, stdio: 'ignore' })
  const { render } = await import(pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href)
  const body = render()
  home = home.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
  console.log(`→ home page pre-rendered (${Math.round(body.length / 1024)} KB of HTML)`)
}
writeFileSync(join(dist, 'index.html'), home)

// ── sitemap, robots, llms.txt, 404
const urls = [{ loc: `${SITE.url}/`, priority: '1.0' }, ...PAGES.map((p) => ({ loc: `${SITE.url}/${p.slug}/`, priority: p.slug === 'skincare-video-production-london' ? '0.9' : '0.8' }))]
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}\n</urlset>\n`)
writeFileSync(join(dist, 'robots.txt'), launched
  ? `# Shotwell — every page is open to search engines and AI search.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`
  : `# Private preview — not open to search engines yet.\nUser-agent: *\nDisallow: /\n`)
const llm = [
  `# ${SITE.name}`,
  '',
  `> ${SITE.name} (${SITE.legalName}) is an independent production company in Bloomsbury, London making video, social content and photography for beauty, skincare and wellness brands, clinics, spas and practitioners across London and the UK.`,
  '',
  '## Pages',
  ...PAGES.map((p) => `- [${plain(p.title)}](${SITE.url}/${p.slug}/): ${p.description}`),
  '',
  '## Contact',
  `- Website: ${SITE.url}/`,
  `- Instagram: ${SITE.instagram}`,
  `- LinkedIn: ${SITE.linkedin}`,
  '',
].join('\n')
function plain(s) { return String(s).replace(/<[^>]+>/g, '') }
writeFileSync(join(dist, 'llms.txt'), launched ? llm : '# Private preview\n')
writeFileSync(join(dist, '404.html'), `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found | Shotwell</title><link rel="stylesheet" href="${css}"><style>body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;background:var(--color-bg);color:var(--color-text);font-family:var(--font-body);text-align:center;padding:24px}h1{font-family:var(--font-heading);font-weight:500;font-size:clamp(2rem,5vw,3.4rem);letter-spacing:-.03em}a{font-weight:500;font-size:.78rem;letter-spacing:.17em;text-transform:uppercase;text-decoration:none;color:var(--color-bone);background:var(--color-taupe-ink);border-radius:100px;padding:16px 36px}</style></head><body><img src="${ctx.logoInk}" alt="Shotwell" width="220" style="height:auto"><h1>That page has moved or doesn’t exist.</h1><a href="/">Back to shotwell.co.uk</a></body></html>`)
console.log('→ sitemap.xml, robots.txt, llms.txt, 404.html written')
