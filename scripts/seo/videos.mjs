// Structured data and sitemap entries for the self-hosted site videos (helps them appear as video results).
import { SITE } from './site.mjs'

// Lengths in seconds of the encoded files in public/video (and the hero). Update if a video is replaced.
export const SECONDS = { hero: 43.64, ads: 28.92, interviews: 33.8, store: 9.32, treatments: 24.04, process: 43.8, paid: 19.52, experts: 14.08, events: 52.28 }

export const HERO = { name: 'hero', caption: 'Shotwell showreel', description: 'Showreel from Shotwell, a London video production studio for skincare, healthcare and wellness brands.' }

const files = (name) => name === 'hero'
  ? { content: `${SITE.url}/shotwell-hero.mp4`, thumb: `${SITE.url}/hero-poster.jpg` }
  : { content: `${SITE.url}/video/${name}.mp4`, thumb: `${SITE.url}/video/${name}.jpg` }

function describe(c) {
  return c.description || `${c.caption}. A Shotwell film for skincare, healthcare and wellness brands.`
}

// One VideoObject for the page graph. `base` makes the @id unique per page.
export function videoNode(c, base) {
  const f = files(c.name)
  return {
    '@type': 'VideoObject', '@id': `${base}#video-${c.name}`,
    name: c.caption, description: describe(c),
    thumbnailUrl: f.thumb, contentUrl: f.content,
    uploadDate: SITE.videoDate, duration: `PT${Math.round(SECONDS[c.name])}S`,
    inLanguage: 'en-GB', isFamilyFriendly: true,
    publisher: { '@id': `${SITE.url}/#business` },
  }
}

const x = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// <video:video> entries for the sitemap.
export function sitemapVideos(clips) {
  return clips.map((c) => {
    const f = files(c.name)
    return `<video:video><video:thumbnail_loc>${x(f.thumb)}</video:thumbnail_loc><video:title>${x(c.caption)}</video:title><video:description>${x(describe(c))}</video:description><video:content_loc>${x(f.content)}</video:content_loc><video:duration>${Math.round(SECONDS[c.name])}</video:duration><video:publication_date>${SITE.videoDate}</video:publication_date><video:family_friendly>yes</video:family_friendly></video:video>`
  }).join('')
}
