import { SITE, PROCESS } from './site.mjs'

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
// Strip tags for plain-text uses (meta, schema).
export const plain = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
const abs = (slug) => `${SITE.url}/${slug ? slug + '/' : ''}`
const href = (slug) => `/${slug}/`

// ───────────────────────────────────────────────────────────── structured data
export function businessNode() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/favicon.svg`,
    image: SITE.ogImage,
    description: 'Shotwell is an independent production company in London making video, social content and photography for beauty, skincare and wellness brands, clinics, spas and practitioners.',
    slogan: SITE.tagline,
    address: { '@type': 'PostalAddress', streetAddress: SITE.address.street, addressLocality: SITE.address.city, postalCode: SITE.address.postcode, addressCountry: SITE.address.country },
    areaServed: [{ '@type': 'City', name: 'London' }, { '@type': 'Country', name: 'United Kingdom' }],
    founder: SITE.founders.map((name) => ({ '@type': 'Person', name })),
    sameAs: [SITE.instagram, SITE.linkedin],
    knowsAbout: ['Skincare video production', 'Beauty video production', 'Aesthetic clinic video', 'Spa and wellness video', 'Social media video', 'Product videography', 'Skincare photography'],
  }
}

export function websiteNode() {
  return { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name, inLanguage: 'en-GB', publisher: { '@id': `${SITE.url}/#business` } }
}

export function pageGraph(page) {
  const url = abs(page.slug)
  const crumbs = [{ name: 'Home', url: `${SITE.url}/` }, { name: page.crumb || page.h1Plain, url }]
  const graph = [
    businessNode(),
    websiteNode(),
    {
      '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'en-GB',
      isPartOf: { '@id': `${SITE.url}/#website` }, about: { '@id': `${SITE.url}/#business` }, breadcrumb: { '@id': `${url}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
    },
    {
      '@type': 'Service', '@id': `${url}#service`, name: page.serviceName, serviceType: page.serviceType, url,
      description: page.description, provider: { '@id': `${SITE.url}/#business` },
      areaServed: [{ '@type': 'City', name: 'London' }, { '@type': 'Country', name: 'United Kingdom' }],
      ...(page.offers ? { hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Shotwell monthly content packages', itemListElement: page.offers } } : {}),
    },
  ]
  if (page.faqs && page.faqs.length) {
    graph.push({
      '@type': 'FAQPage', '@id': `${url}#faq`,
      mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

// ───────────────────────────────────────────────────────────── page parts
// Mixed shapes (portrait + landscape) get a packed layout so no column is left with a gap beneath it.
function clipLayout(clips) {
  const v = clips.filter((c) => c.vertical).length
  const h = clips.length - v
  if (h === 0) return 'verticals'
  if (v === 1 && h === 2) return 'mix1v'
  if (v === 2 && h === 1) return 'mix2v'
  return ''
}

function clipHtml(c) {
  const ratio = c.vertical ? 'v' : 'h'
  return `<figure class="clip ${ratio}">
        <div class="clip-frame"><img src="/video/${c.name}.jpg" alt="${esc(c.alt)}" loading="lazy" decoding="async" width="${c.vertical ? 720 : 1280}" height="${c.vertical ? 1280 : 720}"><video data-src="/video/${c.name}.mp4" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1"></video></div>
        <figcaption><span class="tag">${esc(c.tag)}</span>${esc(c.caption)}</figcaption>
      </figure>`
}

function photoHtml(p) {
  return `<figure class="photo"><div class="photo-frame"><img src="/thumbs/${p.file}" alt="${esc(p.alt)}" loading="lazy" decoding="async"></div><figcaption><span class="tag">${esc(p.tag)}</span>${esc(p.caption)}</figcaption></figure>`
}

function sectionHtml(s) {
  const body = s.paragraphs.map((p) => `<p>${p}</p>`).join('\n        ')
  const list = s.list ? `<ul class="ticks">${s.list.map((i) => `<li>${i}</li>`).join('')}</ul>` : ''
  return `<section class="band prose">
      <div class="wrap two">
        <h2>${s.h2}</h2>
        <div class="copy">
        ${body}
        ${list}
        </div>
      </div>
    </section>`
}

function priceCards(cards) {
  return `<section class="band">
      <div class="wrap">
        <p class="label">Monthly packages</p>
        <h2 class="center-h">Three ways to work together</h2>
        <div class="packs">
          ${cards.map((c) => `<article class="pack${c.popular ? ' pop' : ''}">
            ${c.popular ? '<span class="badge">Most popular</span>' : ''}
            <p class="label">${esc(c.num)}</p>
            <h3>${esc(c.name)}</h3>
            ${c.price ? `<p class="from"><strong>${esc(c.price)}</strong><span> ${esc(c.per)}</span></p>` : ''}
            <p class="meta">${esc(c.meta)}</p>
            <ul class="ticks">${c.items.map((i) => `<li>${i}</li>`).join('')}</ul>
          </article>`).join('\n          ')}
        </div>
        ${cards.note ? `<p class="note">${cards.note}</p>` : ''}
      </div>
    </section>`
}

export function renderPage(page, ctx) {
  const url = abs(page.slug)
  const graph = pageGraph(page)
  const related = (page.related || []).map((slug) => ctx.pages.find((p) => p.slug === slug)).filter(Boolean)
  const robots = ctx.launched ? '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">' : '<meta name="robots" content="noindex, nofollow">'
  const gate = ctx.launched ? '' : `<script>!function(){try{if(sessionStorage.getItem("shotwell-gate")!=="${ctx.gateHash}")location.replace("/")}catch(e){location.replace("/")}}()</script>`
  const eyebrow = page.eyebrow ? `<p class="label">${esc(page.eyebrow)}</p>` : ''
  const clips = page.clips && page.clips.length ? `<section class="band tight">
      <div class="wrap">
        <p class="label">${esc(page.clipsLabel || 'Selected work')}</p>
        <div class="clips ${clipLayout(page.clips)}">
          ${page.clips.map(clipHtml).join('\n          ')}
        </div>
      </div>
    </section>` : ''
  const photos = page.photos && page.photos.length ? `<section class="band tight">
      <div class="wrap">
        <p class="label">${esc(page.photosLabel || 'Selected stills')}</p>
        <div class="photos">${page.photos.map(photoHtml).join('')}</div>
      </div>
    </section>` : ''
  const sections = (page.sections || []).map(sectionHtml).join('\n    ')
  const packs = page.packages ? priceCards(page.packages) : ''
  const get = page.getList ? `<section class="band alt">
      <div class="wrap two">
        <h2>${page.getTitle || 'What you get'}</h2>
        <div class="copy"><ul class="ticks big">${page.getList.map((i) => `<li>${i}</li>`).join('')}</ul></div>
      </div>
    </section>` : ''
  const process = `<section class="band">
      <div class="wrap">
        <p class="label">How we work</p>
        <h2 class="center-h">One clear process, from brief to delivery</h2>
        <ol class="steps">${PROCESS.map((s, i) => `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${s.title}</h3><p>${s.text}</p></li>`).join('')}</ol>
      </div>
    </section>`
  const faqs = page.faqs && page.faqs.length ? `<section class="band alt">
      <div class="wrap narrow">
        <p class="label">Questions</p>
        <h2>${esc(page.faqTitle || 'Frequently asked questions')}</h2>
        <div class="faq">${page.faqs.map((f) => `<details><summary>${f.q}</summary><div><p>${f.a}</p></div></details>`).join('')}</div>
      </div>
    </section>` : ''
  const rel = related.length ? `<section class="band">
      <div class="wrap">
        <p class="label">Related</p>
        <h2 class="center-h">More from Shotwell</h2>
        <div class="related">${related.map((r) => `<a class="rel" href="${href(r.slug)}"><span class="tag">${esc(r.relLabel)}</span><strong>${r.relTitle}</strong><span>${r.relText}</span></a>`).join('')}</div>
      </div>
    </section>` : ''

  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${gate}
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">
${robots}
<link rel="alternate" hreflang="en-GB" href="${url}">
<meta name="theme-color" content="#DCD3C2">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:locale" content="en_GB">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${SITE.ogImage}">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="${ctx.fonts.heading}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${ctx.css}">
<style>${PAGE_CSS}</style>
<script type="application/ld+json">${JSON.stringify(graph)}</script>
</head>
<body>
<header class="hdr">
  <a class="logo" href="/"><img src="${ctx.logoInk}" alt="Shotwell — visual content for beauty, skincare and wellness" width="190" height="52"></a>
  <nav aria-label="Main">
    <a href="/#work">Videos</a>
    <a href="/#social">Social</a>
    <a href="${href('skincare-video-production-cost')}">Packages</a>
    <a href="/#about">About</a>
    <a class="pill" href="/#contact">Get in touch</a>
  </nav>
</header>
<main>
  <section class="hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>${esc(page.crumb || page.h1Plain)}</span></nav>
      ${eyebrow}
      <h1>${page.h1}</h1>
      <p class="lead">${page.lead}</p>
      <div class="ctas"><a class="btn" href="/#contact">Get a quote</a><a class="btn ghost" href="#work">See the work</a></div>
    </div>
  </section>
  <div id="work"></div>
  ${clips}
  ${photos}
  ${sections}
  ${packs}
  ${get}
  ${process}
  ${faqs}
  ${rel}
  <section class="cta-band">
    <div class="wrap center">
      <h2>${page.ctaTitle || "Let's make something"}</h2>
      <p>${page.ctaText || 'Tell us a little about your brand and what you need. We will come back with ideas and a clear, itemised quote.'}</p>
      <div class="ctas c"><a class="btn light" data-mail href="/#contact">Email us</a><a class="btn ghost light" href="/#contact">Contact page</a></div>
    </div>
  </section>
</main>
<footer class="ftr">
  <div class="wrap">
    <img src="${ctx.logoBone}" alt="Shotwell" width="190" height="52">
    <div class="fcols">
      <div><p class="label">Video &amp; content</p>${ctx.pages.filter((p) => p.group === 'audience').map((p) => `<a href="${href(p.slug)}">${p.footerLabel}</a>`).join('')}</div>
      <div><p class="label">Services</p>${ctx.pages.filter((p) => p.group === 'service').map((p) => `<a href="${href(p.slug)}">${p.footerLabel}</a>`).join('')}<a href="${href('skincare-video-production-cost')}">Packages</a></div>
      <div><p class="label">Shotwell</p><a href="/#work">Videos</a><a href="/#social">Social content</a><a href="/#photography">Photography</a><a href="/#about">About</a><a href="/#contact">Contact</a><a href="${SITE.instagram}" rel="noopener noreferrer">Instagram</a><a href="${SITE.linkedin}" rel="noopener noreferrer">LinkedIn</a></div>
    </div>
    <p class="legal">© ${new Date().getFullYear()} ${SITE.legalName} trading as ${SITE.name}. ${SITE.address.street}, ${SITE.address.area}, ${SITE.address.city} ${SITE.address.postcode}. All rights reserved.</p>
  </div>
</footer>
<script>
(function(){
  var u=${JSON.stringify(SITE.emailUser)},h=${JSON.stringify(SITE.emailHost)},a=u+"@"+h;
  document.querySelectorAll("[data-mail]").forEach(function(l){l.href="mailto:"+a+"?subject="+encodeURIComponent("Enquiry from the Shotwell website")});
  var vs=[].slice.call(document.querySelectorAll("video[data-src]"));
  if(!("IntersectionObserver" in window)){return}
  var load=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var v=e.target;if(!v.src){v.src=v.dataset.src;v.addEventListener("loadeddata",function(){v.classList.add("on")},{once:true})}load.unobserve(v)}})},{rootMargin:"1500px 0px"});
  var play=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play&&v.play();if(p&&p.catch)p.catch(function(){})}else if(!v.paused){v.pause()}})},{rootMargin:"60px 0px"});
  vs.forEach(function(v){load.observe(v);play.observe(v)});
})();
</script>
</body>
</html>
`
}

// ───────────────────────────────────────────────────────────── styles (brand tokens come from the site stylesheet)
const PAGE_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--color-bg);color:var(--color-text);font-family:var(--font-body);font-size:17px;line-height:1.7;-webkit-font-smoothing:antialiased}
img,video{display:block;max-width:100%}
a{color:inherit}
h1,h2,h3{font-family:var(--font-heading);font-weight:500;letter-spacing:-.03em;line-height:1.1}
.wrap{max-width:1240px;margin:0 auto;padding:0 52px}
.wrap.narrow{max-width:900px}
.label{font-family:var(--font-accent);font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;color:var(--color-sage);margin-bottom:18px}
.tag{font-family:var(--font-accent);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--color-sage);margin-right:12px}
.hdr{position:absolute;top:0;left:0;right:0;z-index:5;display:flex;justify-content:space-between;align-items:center;padding:30px 52px}
.hdr .logo img{height:46px;width:auto}
.hdr nav{display:flex;align-items:center;gap:30px}
.hdr nav a{font-family:var(--font-accent);font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;color:var(--color-text)}
.hdr nav a:hover{color:var(--color-sage)}
.hdr nav .pill{border:1px solid var(--color-text);border-radius:100px;padding:10px 22px}
.hdr nav .pill:hover{background:var(--color-text);color:var(--color-bone)}
.hero{padding:190px 0 72px}
.crumbs{display:flex;gap:10px;font-family:var(--font-accent);font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--color-sage);margin-bottom:30px}
.crumbs a{text-decoration:none}.crumbs a:hover{color:var(--color-text)}
h1{font-size:clamp(2.3rem,5.4vw,4.8rem);max-width:17ch;margin-bottom:30px}
h1 em{font-style:normal;color:var(--color-sage)}
.lead{font-size:clamp(1.05rem,1.5vw,1.28rem);max-width:60ch;color:var(--color-text);opacity:.88;margin-bottom:38px}
.ctas{display:flex;flex-wrap:wrap;gap:14px}.ctas.c{justify-content:center}
.btn{display:inline-block;font-weight:500;font-size:.78rem;letter-spacing:.17em;text-transform:uppercase;text-decoration:none;color:var(--color-bone);background:var(--color-taupe-ink);border:1px solid var(--color-taupe-ink);border-radius:100px;padding:17px 38px;transition:background .3s,color .3s}
.btn:hover{background:transparent;color:var(--color-taupe-ink)}
.btn.ghost{background:transparent;color:var(--color-taupe-ink)}.btn.ghost:hover{background:var(--color-taupe-ink);color:var(--color-bone)}
.btn.light{background:var(--color-bone);color:var(--color-taupe-ink);border-color:var(--color-bone)}.btn.light:hover{background:transparent;color:var(--color-bone)}
.btn.ghost.light{background:transparent;color:var(--color-bone);border-color:rgba(241,236,227,.5)}.btn.ghost.light:hover{background:var(--color-bone);color:var(--color-taupe-ink)}
.band{padding:84px 0}.band.tight{padding:24px 0 56px}.band.alt{background:var(--color-surface)}
.band h2{font-size:clamp(1.7rem,3.2vw,2.8rem)}
.center-h{text-align:center;margin-bottom:48px}.label+.center-h{margin-top:0}
.band:has(.center-h) .wrap>.label{text-align:center}
.two{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(28px,6vw,96px);align-items:start}
.copy p{margin-bottom:1.15em;max-width:62ch}.copy p:last-child{margin-bottom:0}
.copy a,.faq a,.lead a{text-decoration:underline;text-decoration-color:var(--color-sage);text-underline-offset:3px}
.ticks{list-style:none;margin-top:6px}
.ticks li{position:relative;padding:9px 0 9px 28px;border-top:1px solid var(--color-border)}
.ticks li:last-child{border-bottom:1px solid var(--color-border)}
.ticks li::before{content:'';position:absolute;left:2px;top:1.15em;width:12px;height:1px;background:var(--color-sage)}
.ticks.big li{font-size:1.06rem}
.clips{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.clips.verticals{grid-template-columns:repeat(3,minmax(0,1fr))}
.clips.mix1v{grid-template-columns:minmax(0,1.58fr) minmax(0,1fr)}
.clips.mix1v .clip.v{grid-column:2;grid-row:1/span 2}
.clips.mix2v{grid-template-columns:minmax(0,2fr) minmax(0,1fr) minmax(0,1fr)}
.clips.mix1v .clip.v,.clips.mix2v .clip.h{display:flex;flex-direction:column}
.clips.mix1v .clip.v .clip-frame,.clips.mix2v .clip.h .clip-frame{flex:1;aspect-ratio:auto;min-height:0}
.clip-frame,.photo-frame{position:relative;overflow:hidden;background:var(--color-surface)}
.clip.h .clip-frame{aspect-ratio:16/9}.clip.v .clip-frame{aspect-ratio:9/16}
.clip img,.clip video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.clip video{opacity:0;transition:opacity .9s ease}.clip video.on{opacity:1}
.clip-frame,.photo-frame img{transition:transform .6s cubic-bezier(0,0,.2,1)}
.clip-frame:hover img,.clip-frame:hover video{transform:scale(1.02)}
.clip img,.clip video{transition:transform .6s cubic-bezier(0,0,.2,1),opacity .9s ease}
figcaption{margin-top:12px;font-size:.92rem;color:var(--color-text);opacity:.85}
.photos{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.photo-frame{aspect-ratio:4/5}.photo-frame img{width:100%;height:100%;object-fit:cover}
.photo-frame:hover img{transform:scale(1.02)}
.steps{list-style:none;display:grid;grid-template-columns:repeat(5,1fr);gap:28px}
.steps li{border-top:1px solid var(--color-border);padding-top:22px}
.steps .num{font-family:var(--font-accent);font-size:.8rem;color:var(--color-sage);letter-spacing:.08em}
.steps h3{font-size:1.3rem;margin:10px 0 10px}.steps p{font-size:.97rem;opacity:.85}
.packs{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.pack{position:relative;background:var(--color-surface);padding:38px 34px;display:flex;flex-direction:column}
.pack.pop{outline:1px solid var(--color-sage)}
.badge{position:absolute;top:18px;right:18px;font-family:var(--font-accent);font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;background:var(--color-taupe-ink);color:var(--color-bone);border-radius:100px;padding:5px 12px}
.pack h3{font-size:2rem;margin-bottom:10px}
.from{font-size:1rem;margin-bottom:6px}.from strong{font-family:var(--font-heading);font-weight:500;font-size:1.9rem;letter-spacing:-.02em}.from span{opacity:.7;font-size:.9rem}
.meta{font-family:var(--font-accent);font-size:.74rem;letter-spacing:.04em;text-transform:uppercase;color:var(--color-sage);margin-bottom:18px}
.note{margin-top:28px;font-size:.92rem;opacity:.8;max-width:78ch}
.faq details{border-top:1px solid var(--color-border);padding:20px 0}.faq details:last-child{border-bottom:1px solid var(--color-border)}
.faq summary{cursor:pointer;font-family:var(--font-heading);font-weight:500;font-size:1.2rem;letter-spacing:-.02em;list-style:none;display:flex;justify-content:space-between;gap:20px}
.faq summary::-webkit-details-marker{display:none}.faq summary::after{content:'+';font-family:var(--font-accent);color:var(--color-sage)}
.faq details[open] summary::after{content:'−'}
.faq details div{padding-top:14px;max-width:70ch}.faq p{margin-bottom:.8em}
.related{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.rel{display:flex;flex-direction:column;gap:10px;background:var(--color-surface);padding:30px 28px;text-decoration:none;transition:transform .6s cubic-bezier(0,0,.2,1)}
.rel strong{font-family:var(--font-heading);font-weight:500;font-size:1.35rem;letter-spacing:-.02em;line-height:1.15}.rel span:last-child{font-size:.95rem;opacity:.82}
.rel:hover{background:#fff8}
.cta-band{background:var(--color-taupe-ink);color:var(--color-bone);padding:96px 0}
.cta-band h2{font-size:clamp(2rem,4.4vw,3.6rem);margin-bottom:18px}.cta-band p{max-width:52ch;margin:0 auto 34px;opacity:.85}
.center{text-align:center}
.ftr{background:var(--color-taupe-ink);color:var(--color-bone);padding:0 0 44px;border-top:1px solid rgba(241,236,227,.14)}
.ftr .wrap{padding-top:56px}.ftr img{height:46px;width:auto;margin-bottom:40px}
.fcols{display:grid;grid-template-columns:repeat(3,1fr);gap:36px;margin-bottom:44px}
.fcols .label{color:var(--color-whisper-sage)}
.fcols a{display:block;text-decoration:none;font-size:.95rem;padding:5px 0;opacity:.85}.fcols a:hover{opacity:1;color:var(--color-whisper-sage)}
.legal{font-family:var(--font-accent);font-size:.72rem;letter-spacing:.04em;opacity:.65;border-top:1px solid rgba(241,236,227,.14);padding-top:22px}
@media (max-width:1000px){.steps{grid-template-columns:repeat(2,1fr)}.packs,.related,.photos{grid-template-columns:1fr}.clips,.clips.verticals{grid-template-columns:1fr 1fr}.clips.mix1v{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.clips.mix2v{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}.clips.mix2v .clip.h{grid-column:1/-1}.clips.mix2v .clip.h .clip-frame{flex:none;aspect-ratio:16/9}}
@media (max-width:760px){
 .wrap{padding:0 24px}.hdr{padding:22px 24px}.hdr nav a:not(.pill){display:none}.hdr nav .pill{padding:9px 18px}.hdr .logo img{height:38px}
 .hero{padding:140px 0 48px}.band{padding:60px 0}.two{grid-template-columns:1fr;gap:22px}
 .clips,.clips.verticals,.clips.mix1v,.clips.mix2v{grid-template-columns:1fr}.clips.mix1v .clip.v{grid-column:auto;grid-row:auto}.clips.mix1v .clip.v .clip-frame{flex:none;aspect-ratio:9/14}.clip.v .clip-frame{aspect-ratio:9/14}.steps,.fcols{grid-template-columns:1fr}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
`
