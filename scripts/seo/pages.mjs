// Landing pages. Each one targets a specific search. Plain data — the template turns it into HTML.
// Facts used here come from the live site and the 2026 pricing guide. Anything described as "how we work" should be read by Shotwell before launch.

import { clip, photo } from './assets.mjs'
import { HEALTHCARE_PAGES } from './pages-healthcare.mjs'

const CORE_PAGES = [
  // ─────────────────────────────────────────────────────────────────── 1
  {
    slug: 'skincare-video-production-london',
    group: 'audience', footerLabel: 'Skincare brands',
    relLabel: 'Skincare', relTitle: 'Skincare video production', relText: 'Product films, ingredient stories and ads for skincare brands.',
    crumb: 'Skincare video production',
    title: 'Skincare Video Production London | Shotwell',
    description: 'Skincare video production in London: product films, ingredient stories, ads and social content for skincare brands, shot and edited by one studio.',
    h1: 'Skincare video production <em>in London</em>',
    h1Plain: 'Skincare video production in London',
    eyebrow: 'Skincare brands',
    lead: 'Shotwell is a London studio that specialises in content for skincare, healthcare and wellness. We film and edit product films, ingredient stories, ads and social video that show your formula honestly and give people a reason to buy.',
    serviceName: 'Skincare video production', serviceType: 'Skincare video production',
    clipsLabel: 'Selected work', clips: [clip.ads, clip.treatments, clip.paid],
    sections: [
      {
        h2: 'Content built around the formula',
        paragraphs: [
          'A skincare film has a different job from most commercial video. People want to see how a product looks, feels and behaves on skin, and they want to understand why it works. The best content answers those questions quickly and does not rely on big claims.',
          'We plan every shoot around that. Texture and product close-ups show consistency and finish. Ingredient stories explain the active in plain language. Routine and series content shows the product in a real person’s day. Each one is made to do a specific job on your website, in your ads or in your social feed.',
        ],
      },
      {
        h2: 'One shoot, every format',
        paragraphs: [
          'Skincare brands need the same footage in many shapes: a widescreen film for the product page, vertical edits for Reels, TikTok and Stories, and short cuts for paid social. We plan for all of these before the shoot, so the day is spent capturing the right shots rather than fixing the shape later.',
          'The edit and colour grade are done by our own editors, who then cut the versions for each platform you actually use. You can read more about the social side on our <a href="/healthcare-social-media-video-production/">social media video</a> page, or see how we film products up close on <a href="/skincare-product-video-production/">skincare product video production</a>.',
        ],
      },
      {
        h2: 'Shot for skin',
        paragraphs: [
          'Skin is the hardest thing to light and the easiest thing to over-edit. We light to show real texture, and when we use creators we match them to your customer’s skin type and tone, so the content reflects the people who will use the product.',
          'Our work is based in Bloomsbury, central London, and we film across London and the UK. See <a href="/skincare-video-production-cost/">our packages</a> for what each one includes.',
        ],
      },
    ],
    getTitle: 'What you can get from a skincare shoot',
    getList: [
      'Product and texture close-ups, shot macro for ads and product pages',
      'Ingredient stories that explain your key active clearly',
      '60-second hero videos that lead your website, ads and events',
      '15-second snippets in landscape and portrait for every platform',
      'Final images for your site, retailers and social',
      'Versions for each platform: 16:9, 9:16 and short paid cuts',
    ],
    faqs: [
      { q: 'How much does skincare video production cost in London?', a: 'It depends on the number of shoot days, the people on screen and the deliverables you need. We quote each project to the brief, and our <a href="/skincare-video-production-cost/">packages page</a> sets out what each package includes. Get in touch for a quote.' },
      { q: 'How long does it take?', a: 'Our packages are delivered within 10 working days.' },
      { q: 'Do you film outside London?', a: 'Yes. We are based in Bloomsbury, London, and we film across London and the UK. Tell us where you need to shoot and we will plan around it.' },
      { q: 'Can we use the videos in paid ads?', a: 'Yes. We deliver cuts made for paid social as well as organic. Usage rights are agreed in the quote, so you know where and for how long the content can run.' },
    ],
    related: ['skincare-product-video-production', 'healthcare-social-media-video-production', 'skincare-video-production-cost'],
  },

  // ─────────────────────────────────────────────────────────────────── 3
  {
    slug: 'aesthetic-clinic-video-production-london',
    group: 'audience', footerLabel: 'Aesthetic clinics',
    relLabel: 'Clinics', relTitle: 'Aesthetic clinic video', relText: 'Treatment films, practitioner stories and testimonials for clinics.',
    crumb: 'Aesthetic clinic video production',
    title: 'Aesthetic Clinic Video Production London | Shotwell',
    description: 'Aesthetic clinic video production in London: treatment films, practitioner stories and testimonials that build trust before the first consultation.',
    h1: 'Aesthetic clinic video production <em>in London</em>',
    h1Plain: 'Aesthetic clinic video production in London',
    eyebrow: 'Clinics',
    lead: 'People choose a clinic on trust. Shotwell makes treatment films, practitioner stories and testimonials for aesthetic and medical clinics that show who you are, how you work and what the experience is like, before anyone books.',
    serviceName: 'Aesthetic clinic video production', serviceType: 'Clinic video production',
    clips: [clip.treatments, clip.interviews, clip.experts],
    sections: [
      {
        h2: 'Trust is the product',
        paragraphs: [
          'Someone considering a treatment is looking for reassurance as much as information. They want to meet the practitioner, understand the process and see the clinic. Good video does that better than a page of text.',
          'We make films that let your practitioners explain what they do in their own words, show treatments calmly and clearly, and give a real sense of the space. The result is a clinic website and social presence that feels as considered as the care you provide.',
        ],
      },
      {
        h2: 'Filming around a working clinic',
        paragraphs: [
          'We plan shoot days around your appointments and your team, with a shot list agreed beforehand, so filming fits around the clinic rather than the other way round. Anyone who appears on camera, including patients and staff, signs a release before we film.',
          'Practitioner-led content works particularly well for clinics: see our page on <a href="/interview-testimonial-filming-london/">interview and testimonial filming</a>.',
        ],
      },
      {
        h2: 'A note on advertising rules',
        paragraphs: [
          'Advertising for aesthetic treatments is regulated in the UK. For example, prescription-only treatments such as anti-wrinkle injections cannot be advertised to the public, and the ASA and CAP set rules on claims and before-and-after imagery. We plan content around education, the practitioner and the clinic experience, and we recommend checking the current CAP guidance. You remain responsible for the claims your clinic makes.',
        ],
      },
    ],
    getList: [
      'A brand film that introduces your clinic and your team',
      'Treatment films that explain the process calmly and clearly',
      'Practitioner interviews and expert-led education content',
      'Patient testimonials filmed with consent and releases',
      'Short vertical cuts for Instagram, TikTok and Stories',
      'Stills of the clinic, the team and the treatment room',
    ],
    faqs: [
      { q: 'Can you film while the clinic is open?', a: 'We plan the shoot around your appointments, so treatments and consultations can carry on. We agree the schedule and shot list with you beforehand.' },
      { q: 'How do you handle patient consent?', a: 'Anyone who appears on camera signs a release before filming. Footage of patients is only used where consent is in place, and we recommend reviewing the current guidance on consent and before-and-after content.' },
      { q: 'Can you make content for social as well as the website?', a: 'Yes. From one shoot we deliver a main film for your website and vertical edits for social. See our <a href="/healthcare-social-media-video-production/">social video</a> page.' },
      { q: 'How much does clinic video production cost?', a: 'It depends on the number of shoot days, the people on screen and the versions you need. We quote to the brief; see the <a href="/skincare-video-production-cost/">packages page</a> for what each package includes, then get in touch for a quote.' },
    ],
    related: ['private-clinic-video-production-london', 'interview-testimonial-filming-london', 'spa-wellness-video-production-london'],
  },

  // ─────────────────────────────────────────────────────────────────── 4
  {
    slug: 'spa-wellness-video-production-london',
    group: 'audience', footerLabel: 'Spas & wellness',
    relLabel: 'Spas & wellness', relTitle: 'Spa and wellness video', relText: 'Atmosphere, treatments and spaces filmed to make people book.',
    crumb: 'Spa and wellness video production',
    title: 'Spa & Wellness Video Production London | Shotwell',
    description: 'Spa and wellness video production in London: films of your spaces, treatments and rituals that capture the atmosphere and give people a reason to book.',
    h1: 'Spa and wellness video production <em>in London</em>',
    h1Plain: 'Spa and wellness video production in London',
    eyebrow: 'Spas & wellness',
    lead: 'A spa sells a feeling before it sells a treatment. Shotwell films spas, wellness studios and practitioners so that atmosphere comes through on screen: the light, the pace, the care, the quiet.',
    serviceName: 'Spa and wellness video production', serviceType: 'Spa and wellness video production',
    clips: [clip.treatments, clip.store, clip.process],
    sections: [
      {
        h2: 'Capturing a feeling, not just a room',
        paragraphs: [
          'Most spa footage is a tour of rooms. The films that make people book capture something harder: how it feels to be there. We plan each shoot around that. The moment you arrive, the treatment room at its calmest, the touch and pace of a therapist, the details that make your place yours.',
          'We agree the story, the spaces and the moments that matter with you in advance, so the shoot day is spent filming, not deciding.',
        ],
      },
      {
        h2: 'Treatments, rituals and spaces',
        paragraphs: [
          'We film treatments and rituals, therapists at work, treatment rooms, relaxation areas and the details of the space. We also film events and seasonal launches. Each piece can sit on its own page, in your newsletter or in a short vertical edit for social.',
          'If your focus is more clinical, see our <a href="/aesthetic-clinic-video-production-london/">aesthetic clinic video production</a> page.',
        ],
      },
      {
        h2: 'One shoot for your site and your feed',
        paragraphs: [
          'From one shoot we deliver a main film for your website and booking pages, along with shorter and vertical versions for Instagram, TikTok and Stories. Stills can be captured on the same day for your site and for press.',
        ],
      },
    ],
    getList: [
      'A brand film for your homepage and booking pages',
      'Treatment and ritual films, filmed with care',
      'Space and interior films that show the atmosphere',
      'Seasonal and event content for newsletters and social',
      'Vertical 9:16 edits for Instagram, TikTok and Stories',
      'Stills of treatments, interiors and your team',
    ],
    faqs: [
      { q: 'Can you film treatments with clients in the room?', a: 'Yes, with the client’s agreement. Anyone who appears on camera signs a release, and we plan the shot list and timings with you so the experience stays calm.' },
      { q: 'Do you work with day spas and independent practitioners as well as larger spas?', a: 'Yes. We work with spas, wellness studios and independent practitioners, and we scope the shoot to the size of the business.' },
      { q: 'Do you film outside London?', a: 'Yes. We are based in Bloomsbury, London, and we film across London and the UK.' },
    ],
    related: ['aesthetic-clinic-video-production-london', 'healthcare-social-media-video-production', 'skincare-photography-london'],
  },

  // ─────────────────────────────────────────────────────────────────── 6
  {
    slug: 'skincare-product-video-production',
    group: 'service', footerLabel: 'Product & ingredient video',
    relLabel: 'Product', relTitle: 'Skincare product video', relText: 'Texture close-ups, ingredient stories and 3D visualisation.',
    crumb: 'Skincare product video production',
    title: 'Skincare Product Video Production London | Shotwell',
    description: 'Skincare product video production in London: texture close-ups, ingredient stories and 3D molecular visualisation that show how your formula looks and works.',
    h1: 'Skincare product video production <em>in London</em>',
    h1Plain: 'Skincare product video production in London',
    eyebrow: 'Product & ingredient video',
    lead: 'Show the formula. Shotwell makes product videos for skincare brands: macro texture close-ups, ingredient stories and 3D visualisations of your key active, made for your product pages, your ads and your retailers.',
    serviceName: 'Skincare product video production', serviceType: 'Product video production',
    clips: [clip.ads, clip.paid, clip.store],
    sections: [
      {
        h2: 'Texture, finish and detail',
        paragraphs: [
          'Customers cannot touch your product online, so the video has to do it for them. Macro close-ups show how a serum moves, how a cream melts in, and what a finish looks like on skin. These shots are quick to understand and work hard in paid ads and on product pages.',
        ],
      },
      {
        h2: 'Ingredient stories',
        paragraphs: [
          'If the active is the reason people buy, we make it the star. An ingredient story explains where it comes from, what it does and why it is in the formula, in plain language and with visuals that hold attention.',
          'For brands that want to go further, we can add 3D assets, such as a molecular or ingredient visualisation that shows your key active at a scientific level.',
        ],
      },
      {
        h2: 'Made for the places they are used',
        paragraphs: [
          'Product video lives on product pages, in marketplaces and retailer listings, in paid social and in email. We deliver versions sized for each, with product close-ups made for ads. See our <a href="/healthcare-social-media-video-production/">social video</a> page for how these work in the feed, or our <a href="/skincare-photography-london/">product photography</a> for the stills that go with them.',
        ],
      },
    ],
    getList: [
      'Macro product and texture close-ups',
      'Ingredient stories in plain language',
      '3D molecular or ingredient visualisation (available as an add-on)',
      'Styled context videos that put the product in a real setting',
      'Cuts made for paid ads, product pages and retailers',
      'Retouched product stills from the same shoot',
    ],
    faqs: [
      { q: 'Do we need a model for a product video?', a: 'No. Product films work well on their own, and we can add people or talent where the brief calls for it. Tell us what you need and we will plan the shoot around it.' },
      { q: 'What is a molecular or ingredient visualisation?', a: 'A 3D animated asset that shows your key active at a scientific level. We offer it as an add-on to any package, and it works well in ads, on product pages and with retail buyers.' },
      { q: 'How much does skincare product video cost?', a: 'It depends on the number of films, stills and shoot days. Our packages combine hero films, short snippets and final images from a single shoot; see the <a href="/skincare-video-production-cost/">packages page</a> for what each includes, then get in touch for a quote.' },
    ],
    related: ['skincare-video-production-london', 'skincare-photography-london', 'healthcare-social-media-video-production'],
  },

  // ─────────────────────────────────────────────────────────────────── 7
  {
    slug: 'interview-testimonial-filming-london',
    group: 'service', footerLabel: 'Interviews & testimonials',
    relLabel: 'Interviews', relTitle: 'Interview and testimonial filming', relText: 'Founder stories, doctor-led content and testimonials.',
    crumb: 'Interview and testimonial filming',
    title: 'Interview & Testimonial Filming London | Shotwell',
    description: 'Interview and testimonial filming in London for healthcare and skincare: founder stories, doctor-led content and patient testimonials, cut for web and social.',
    h1: 'Interview and testimonial filming <em>in London</em>',
    h1Plain: 'Interview and testimonial filming in London',
    eyebrow: 'Interviews & testimonials',
    lead: 'The people behind a brand are often its most persuasive asset. Shotwell films founder interviews, doctor and practitioner-led content and patient and customer testimonials for healthcare, skincare and wellness, then cuts them for your site and your social channels.',
    serviceName: 'Interview and testimonial filming', serviceType: 'Interview filming',
    clips: [clip.interviews, clip.experts, clip.events],
    sections: [
      {
        h2: 'Let the experts speak',
        paragraphs: [
          'In healthcare, skincare and wellness, expertise is trust. A founder explaining why they made the product, or a doctor describing how a treatment works, can say what a script never could. We help people relax on camera, plan the questions, and shape the interview into something clear and worth watching.',
        ],
      },
      {
        h2: 'From one conversation to many pieces',
        paragraphs: [
          'A single interview can become a longer film for your site, short expert tips for social and a testimonial cut for ads. We plan these edits before we film, so the interview is shaped to produce all of them. Our packages are built around exactly this: a hero video and a run of short snippets from the same shoot.',
          'It pairs well with our <a href="/aesthetic-clinic-video-production-london/">clinic video production</a> and <a href="/spa-wellness-video-production-london/">spa and wellness video</a>.',
        ],
      },
      {
        h2: 'Testimonials people believe',
        paragraphs: [
          'Patient and customer testimonials work best when they are specific and natural. We film them in a relaxed setting, with consent and releases in place, and cut them to the moments that carry the most weight. Testimonials in healthcare must be genuine and not misleading, so we recommend checking the current ASA and CAP guidance, and your regulator’s, before publishing.',
        ],
      },
    ],
    getList: [
      'Founder and brand-story interviews',
      'Doctor, practitioner and expert-led education content',
      'Customer and patient testimonials, filmed with releases',
      'Short vertical clips for Reels, TikTok and Stories',
      'Longer films for your website and email',
      'Stills of your people, shot on the same day',
    ],
    faqs: [
      { q: 'Can you make a founder feel comfortable on camera?', a: 'That is part of the job. We agree the questions in advance, film in a relaxed setting and give direction as we go, so you do not need any experience on camera.' },
      { q: 'Can we get short clips as well as the full interview?', a: 'Yes. We plan the interview so it can be cut into a full film and several shorter vertical pieces for social.' },
      { q: 'How much does interview filming cost?', a: 'It depends on the number of people, the locations and the versions you need. See our <a href="/skincare-video-production-cost/">packages page</a> for our packages, and contact us for a quote.' },
    ],
    related: ['aesthetic-clinic-video-production-london', 'healthcare-social-media-video-production', 'skincare-video-production-cost'],
  },

  // ─────────────────────────────────────────────────────────────────── 8
  {
    slug: 'skincare-photography-london',
    group: 'service', footerLabel: 'Skincare photography',
    relLabel: 'Photography', relTitle: 'Skincare photography', relText: 'Product, lifestyle and editorial stills for skincare brands.',
    crumb: 'Skincare photography',
    title: 'Skincare Photography London | Shotwell',
    description: 'Skincare photography in London: product, lifestyle and editorial stills for skincare brands, clinics and spas, shot alongside your video content.',
    h1: 'Skincare photography <em>in London</em>',
    h1Plain: 'Skincare photography in London',
    eyebrow: 'Photography',
    lead: 'Stills for your website, your retailers and your social, made by the same studio that makes your video. Shotwell photographs skincare products, treatments, people and spaces, with a consistent look across every image.',
    serviceName: 'Skincare photography', serviceType: 'Skincare photography',
    photosLabel: 'Selected stills', photos: [photo.product, photo.device, photo.treatment, photo.portrait, photo.practice, photo.spa],
    sections: [
      {
        h2: 'Product, lifestyle and editorial',
        paragraphs: [
          'We shoot product hero images for your site and retailers, lifestyle images that put your products into real settings, and editorial images with a more considered, magazine feel. Every image is retouched with restraint, so skin looks like skin.',
        ],
      },
      {
        h2: 'Shot with your video, same day',
        paragraphs: [
          'Stills and film share a set, a look and a crew, so shooting them together saves time and keeps your brand consistent. Our packages include final images alongside the video, from 10 images in Foundation to 40 in Campaign.',
          'See <a href="/skincare-video-production-cost/">our packages</a>, or read about <a href="/skincare-product-video-production/">skincare product video</a>.',
        ],
      },
      {
        h2: 'Clinics, spas and practitioners',
        paragraphs: [
          'We also photograph clinics, spas and independent practitioners: treatment rooms, interiors, devices and portraits of the people who work there. Images that make a business look as good as it is.',
        ],
      },
    ],
    getList: [
      'Product hero images for your site, retailers and ads',
      'Lifestyle images that show your products in context',
      'Editorial and portrait photography',
      'Clinic, spa and interior photography',
      'Careful retouching that keeps skin looking real',
      'Format variants for web, retail and social',
    ],
    faqs: [
      { q: 'Can you shoot photography and video on the same day?', a: 'Yes, and we recommend it. It keeps the look consistent and usually costs less than booking two separate shoots.' },
      { q: 'How many photos are included in your packages?', a: 'Our packages include 10 final images in Foundation, 25 in Series and 40 in Campaign. See the <a href="/skincare-video-production-cost/">packages page</a>.' },
      { q: 'Do you photograph clinics and spas as well as products?', a: 'Yes. We photograph treatment rooms, interiors, devices and portraits of the people who work there.' },
    ],
    related: ['skincare-product-video-production', 'skincare-video-production-london', 'skincare-video-production-cost'],
  },

  // ─────────────────────────────────────────────────────────────────── 9
  {
    slug: 'skincare-video-production-cost',
    group: 'cost', footerLabel: 'Packages',
    relLabel: 'Packages', relTitle: 'Skincare video production cost', relText: 'Our three packages and what each one includes.',
    crumb: 'Skincare video production cost',
    title: 'How Much Does Skincare Video Production Cost? | Shotwell',
    description: 'What affects the cost of skincare video production in the UK, and what Shotwell’s three packages include: shoot days, edit time, hero videos, short snippets and final images.',
    h1: 'How much does skincare video production <em>cost?</em>',
    h1Plain: 'How much does skincare video production cost?',
    eyebrow: 'Packages',
    lead: 'Every Shotwell package sets out the shoot days, edit time and deliverables you get, so you know what you are paying for before we start. We quote to your brief: tell us what you need and we will recommend a package.',
    serviceName: 'Skincare video and photography packages', serviceType: 'Skincare video production',
    ctaTitle: 'Get a quote',
    ctaText: 'Tell us about your brand and what you need. We will recommend a package and come back with a clear, itemised quote.',
    packages: Object.assign([
      {
        num: 'Package 01', name: 'Foundation',
        meta: '1 shoot day · 1.5 editing days',
        items: ['1 × 60-second hero video', '4 × 15-second snippets, landscape and portrait', '10 final images', '10 working day delivery'],
      },
      {
        num: 'Package 02', name: 'Series', popular: true,
        meta: '2 shoot days · 3 editing days',
        items: ['2 × 60-second hero videos', '10 × 15-second snippets, landscape and portrait', '25 final images', '10 working day delivery'],
      },
      {
        num: 'Package 03', name: 'Campaign',
        meta: '3 shoot days · 4 editing days',
        items: ['4 × 60-second hero videos', '14 × 15-second snippets, landscape and portrait', '40 final images', '10 working day delivery'],
      },
    ], { note: 'Add-ons: UGC creator videos and 3D assets. Commitment discounts are available for 3, 6 and 12 month agreements. If your project does not fit a package, tell us what you need and we will quote it to the brief.' }),
    sections: [
      {
        h2: 'What affects the cost',
        paragraphs: [
          'Video costs are driven by a few things: how many days we shoot, how many people are on screen, how much editing and how many versions you need, and any specialist work such as UGC creator videos or 3D visualisation. Our three packages bundle these into a clear scope so you can plan.',
          'Usage matters too. We agree where and for how long the content can be used when we quote, including paid advertising. If you plan to commission shoots regularly, ask us about commitment discounts for 3, 6 and 12 month agreements.',
        ],
      },
      {
        h2: 'Which package suits you',
        paragraphs: [
          '<strong>Foundation</strong> suits skincare brands that need a polished hero film, a run of social snippets and a set of final images from a single shoot day. <strong>Series</strong>, our most popular, adds a second shoot day for two hero films, ten snippets and 25 images, which is a good fit for brands with a range to cover. <strong>Campaign</strong> is for launches and larger ranges, with four hero films, 14 snippets and 40 images, enough to run paid and organic side by side.',
          'Not sure? Tell us about your brand and we will recommend one. You can also see the thinking behind these in our <a href="/skincare-video-production-london/">skincare video production</a> and <a href="/healthcare-social-media-video-production/">social video</a> pages.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does skincare video production cost in the UK?', a: 'It varies widely, from small creator-style content to large campaigns. The cost depends on the number of shoot days, talent and deliverables. Tell us what you need and we will quote it to the brief.' },
      { q: 'What is included in each package?', a: 'Every package sets out the shoot days, editing days, the number of 60-second hero videos, 15-second snippets and final images, and the delivery time. The full lists are above.' },
      { q: 'How long does delivery take?', a: 'Our packages are delivered within 10 working days.' },
      { q: 'Can I add UGC creator videos or 3D assets?', a: 'Yes. Both are available as add-ons to any package, and we quote them to the brief.' },
      { q: 'Do you offer discounts for regular work?', a: 'Yes. We offer commitment discounts for 3, 6 and 12 month agreements. Ask us when you request a quote.' },
      { q: 'Can I commission a one-off project instead?', a: 'Tell us what you need and we will quote it to the brief.' },
    ],
    faqTitle: 'Cost questions',
    related: ['skincare-video-production-london', 'healthcare-social-media-video-production', 'skincare-product-video-production'],
  },
]

// Order used for the sitemap, llms.txt and the related-link lookups.
const ORDER = [
  'private-healthcare-video-production-london',
  'private-clinic-video-production-london',
  'private-hospital-video-production-london',
  'medical-device-video-production-london',
  'doctor-consultant-video-production-london',
  'harley-street-video-production',
  'aesthetic-clinic-video-production-london',
  'skincare-video-production-london',
  'spa-wellness-video-production-london',
  'healthcare-social-media-video-production',
  'skincare-product-video-production',
  'interview-testimonial-filming-london',
  'healthcare-photography-london',
  'skincare-photography-london',
  'skincare-video-production-cost',
]
const ALL = [...CORE_PAGES, ...HEALTHCARE_PAGES]
export const PAGES = ORDER.map((slug) => {
  const p = ALL.find((x) => x.slug === slug)
  if (!p) throw new Error('Missing page definition: ' + slug)
  return p
})
const unused = ALL.filter((p) => !ORDER.includes(p.slug)).map((p) => p.slug)
if (unused.length) throw new Error('Page defined but not in ORDER: ' + unused.join(', '))
