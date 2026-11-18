// Facts and settings shared by every generated page. Only put things here that are true and already public on the site.
export const SITE = {
  url: 'https://shotwell.co.uk',
  name: 'Shotwell',
  legalName: 'Shotwell Studios Ltd',
  tagline: 'Visual content for beauty, skincare and wellness',
  ogImage: 'https://shotwell.co.uk/og-image.png',
  instagram: 'https://www.instagram.com/weareshotwell/',
  linkedin: 'https://www.linkedin.com/company/shotwell-london',
  founders: ['Mark Weeks', 'Louis Mas'],
  // Short bios used in the schema (the full text is on the home page, About section).
  bios: {
    'Mark Weeks': 'Co-founder of Shotwell. Commercial photographer with more than twenty years of experience, working independently since 2003, who leads photography at Shotwell from London.',
    'Louis Mas': 'Co-founder of Shotwell. Filmmaker with over ten years of experience and a BA in Cinematography, previously a camera assistant on feature films, TV series and commercials in Paris and London, who leads video at Shotwell.',
  },
  // Date the site videos were exported/published (folder 20260920_Shotwell_Reel). Used as the video schema uploadDate.
  videoDate: '2026-09-20',
  address: { street: '11-13 Bayley Street', area: 'Bloomsbury', city: 'London', postcode: 'WC1B 3HD', country: 'GB' },
  // The address is assembled in the browser (never printed in the HTML) so scrapers don't harvest it — same as the main site.
  emailUser: 'contact',
  emailHost: 'shotwell.co.uk',
}

// The five steps already described on the home page ("How we work").
export const PROCESS = [
  { title: 'Discover & diagnose', text: 'We start with your brand, your customer and what the content has to achieve, so the work is built on a clear goal.' },
  { title: 'Content & video strategy', text: 'A tailored plan for what to make, where it will run and how it will reach and resonate with the right people.' },
  { title: 'Pre-production & creative', text: 'Concepts, storyboards and planning for every detail before the cameras roll, so shoot days run smoothly.' },
  { title: 'Shoot & capture', text: 'High-end cinematography and expert direction, planned in advance so the shoot day runs smoothly.' },
  { title: 'Edit & optimise for socials', text: 'Edit and colour grade, then tailored versions for each platform and format you will actually use.' },
]
