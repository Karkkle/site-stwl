// Guard for British English. The build reads the visible text of every generated page and file and stops if it finds a
// common American spelling or word. It only looks at text people (and search engines) read: scripts, styles and
// attribute values such as CSS class names or `color` properties are ignored.

const SIZE_WORDS = new Set(['size', 'sizes', 'sized', 'sizing', 'resize', 'resized', 'resizing', 'prize', 'prizes', 'seize', 'seized', 'capsize', 'oversize', 'oversized', 'downsize', 'upsize', 'bite-size', 'one-size', 'supersize'])

const WORDS = [
  /\b[a-z]{3,}iz(?:e|es|ed|ing|er|ers|ation|ations)\b/gi, // organize, optimize, specialize, visualization ...
  /\bcolor(?:s|ed|ing|ful)?\b/gi,
  /\b(?:behavior|favorite|favor|honor|neighbor|humor|flavor|labor|rumor|vapor)s?\b/gi,
  /\b(?:center|centers|centered|centering|theater|theaters|fiber|fibers|caliber|meter|meters|liter|liters)\b/gi,
  /\b(?:catalog|catalogs|dialog|dialogs|defense|offense|pretense|license|licenses|practicing|practiced)\b/gi,
  /\b(?:traveling|traveled|modeling|modeled|labeled|labeling|canceled|canceling|fulfill|enroll|enrollment|installment|skillful)\b/gi,
  /\b(?:gray|aluminum|jewelry|skeptic|skeptical|aging|sulfur|percent|analyze|analyzed|analyzing|program|programs)\b/gi,
  /\b(?:toward|judgment|acknowledgment|specialty|specialties|learned|afterward|gotten)\b/gi,
  /\b(?:movie|movies|vacation|apartment|elevator|zip code|cell phone|sidewalk|truck|trash|garbage|restroom|drugstore)\b/gi,
]

// Words the patterns above would wrongly catch.
const ALLOW = new Set(['learned', 'recognised'])

export function visibleText(html) {
  return String(html)
    .replace(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi, ' $1 ')
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
}

export function findAmerican(text) {
  const found = new Set()
  for (const re of WORDS) {
    for (const m of text.matchAll(re)) {
      const w = m[0].toLowerCase()
      if (SIZE_WORDS.has(w) || ALLOW.has(w)) continue
      found.add(w)
    }
  }
  return [...found]
}
