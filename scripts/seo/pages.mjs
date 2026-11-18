// Landing pages. Each one targets a specific search. Plain data — the template turns it into HTML.
// Facts used here come from the live site and the 2026 pricing guide. Anything described as "how we work" should be read by Shotwell before launch.

const clip = {
  ads: { name: 'ads', tag: 'Ads', caption: 'Campaign ads for beauty and skincare brands', alt: 'Still from a Shotwell campaign ad for a skincare brand' },
  interviews: { name: 'interviews', tag: 'Interviews', caption: 'Founder-led brand story', alt: 'Still from a Shotwell founder interview film' },
  store: { name: 'store', tag: 'Store highlights', caption: 'In-store tours and product highlights', alt: 'Still from a Shotwell in-store product highlights film' },
  treatments: { name: 'treatments', tag: 'Treatments', caption: 'Clinic and spa treatments', alt: 'Still from a Shotwell film of a spa treatment' },
  process: { name: 'process', tag: 'Behind the scenes', caption: 'On set with the Shotwell crew', alt: 'Still from behind the scenes on a Shotwell shoot' },
  paid: { name: 'paid', tag: 'Paid social', caption: 'Skincare routine, cut for paid social', alt: 'Vertical still from a skincare routine video cut for paid social', vertical: true },
  experts: { name: 'experts', tag: 'Experts', caption: 'Expert-led content, cut for social', alt: 'Vertical still from an expert-led video cut for social', vertical: true },
  events: { name: 'events', tag: 'Events', caption: 'Event coverage, cut for social', alt: 'Vertical still from event coverage cut for social', vertical: true },
}
const photo = {
  product: { file: 'product_09.jpg', tag: 'Product', caption: 'Product hero, studio lighting', alt: 'Skincare product hero photograph in studio lighting' },
  device: { file: 'device_01.jpg', tag: 'Product', caption: 'In-clinic device photography', alt: 'Photograph of a skincare device in a clinic setting' },
  treatment: { file: 'treatment_01.jpg', tag: 'Editorial', caption: 'Treatment room, documentary style', alt: 'Documentary-style photograph of a skincare treatment room' },
  portrait: { file: 'portrait_01.jpg', tag: 'Portrait', caption: 'Client portrait, editorial lighting', alt: 'Editorial portrait photograph for a beauty brand' },
  practice: { file: 'practice_01.jpg', tag: 'Practice', caption: 'Independent practitioner in session', alt: 'Photograph of an independent practitioner working with a client' },
  spa: { file: 'spa_01.jpg', tag: 'Interior', caption: 'Spa interior, architectural detail', alt: 'Architectural photograph of a spa interior' },
}

export const PAGES = [
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
    lead: 'Shotwell is a London studio that specialises in content for beauty, skincare and wellness. We film and edit product films, ingredient stories, ads and social video that show your formula honestly and give people a reason to buy.',
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
          'The edit and colour grade are done by our own editors, who then cut the versions for each platform you actually use. You can read more about the social side on our <a href="/beauty-social-media-video-production/">beauty social media video</a> page, or see how we film products up close on <a href="/skincare-product-video-production/">skincare product video production</a>.',
        ],
      },
      {
        h2: 'Shot for skin',
        paragraphs: [
          'Skin is the hardest thing to light and the easiest thing to over-edit. We light to show real texture, and when we use creators we match them to your customer’s skin type and tone, so the content reflects the people who will use the product.',
          'Our work is based in Bloomsbury, central London, and we film across London and the UK. See <a href="/skincare-video-production-cost/">our packages</a> for what each month includes.',
        ],
      },
    ],
    getTitle: 'What you can get from a skincare shoot',
    getList: [
      'Product and texture close-ups, shot macro for ads and product pages',
      'Ingredient stories that explain your key active clearly',
      'Series episodes such as Skin Ritual, Ingredient Deep-Dive and Founder Perspective',
      'UGC creator videos matched to your skin type and customer',
      'Retouched stills for your site, retailers and social',
      'Versions for each platform: 16:9, 9:16 and short paid cuts',
    ],
    faqs: [
      { q: 'How much does skincare video production cost in London?', a: 'It depends on the number of shoot days, the people on screen and the deliverables you need. We quote each project to the brief, and our <a href="/skincare-video-production-cost/">packages page</a> sets out what each monthly package includes. Get in touch for a quote.' },
      { q: 'How long does it take?', a: 'Our monthly packages are delivered within 10 working days, with a structured revision round that comes back within 48 hours.' },
      { q: 'Do you film outside London?', a: 'Yes. We are based in Bloomsbury, London, and we film across London and the UK. Tell us where you need to shoot and we will plan around it.' },
      { q: 'Can we use the videos in paid ads?', a: 'Yes. We deliver cuts made for paid social as well as organic. Usage rights are agreed in the quote, so you know where and for how long the content can run.' },
    ],
    related: ['skincare-product-video-production', 'beauty-social-media-video-production', 'skincare-video-production-cost'],
  },

  // ─────────────────────────────────────────────────────────────────── 2
  {
    slug: 'beauty-video-production-london',
    group: 'audience', footerLabel: 'Beauty brands',
    relLabel: 'Beauty', relTitle: 'Beauty video production', relText: 'Brand films, ads and launch content for beauty brands and retailers.',
    crumb: 'Beauty video production',
    title: 'Beauty Video Production London | Films & Ads | Shotwell',
    description: 'Beauty video production in London for brands and retailers: campaign ads, launch films, in-store content and social video from one specialist studio.',
    h1: 'Beauty video production <em>in London</em>',
    h1Plain: 'Beauty video production in London',
    eyebrow: 'Beauty brands',
    lead: 'From campaign ads to in-store films and launch content, Shotwell makes video for beauty brands and retailers from our studio in Bloomsbury, central London. High-end in look, built to perform across your channels.',
    serviceName: 'Beauty video production', serviceType: 'Beauty video production',
    clips: [clip.ads, clip.store, clip.events],
    sections: [
      {
        h2: 'A beauty film has to look good and do a job',
        paragraphs: [
          'Beauty is a visual category, so the bar for how it looks is high. But a beautiful film that does not make people click, book or buy has failed. We start with what the content needs to achieve, who it is for and where it will run, and then make it look the part.',
          'That might be a hero film for a product launch, a set of campaign ads, or a series of shorter pieces that keep your channels moving between launches.',
        ],
      },
      {
        h2: 'In-store, launches and events',
        paragraphs: [
          'Beauty lives in shops, counters, clinics and events as much as online. We film in-store tours and product highlights, launch evenings and brand events, and cut them into content for your social channels and your retail partners.',
          'It is the same approach as our <a href="/skincare-video-production-london/">skincare video production</a>: plan the shoot around the formats you need, and capture everything once.',
        ],
      },
      {
        h2: 'Direction, talent and finish',
        paragraphs: [
          'Our team includes directors, filmmakers, editors and photographers, so the idea, the shoot and the finish stay with one studio. Model and talent-led formats are part of our Series and Campaign packages, and every project is edited and colour graded to a consistent look.',
          'If you also need stills for your site and retailers, see our <a href="/skincare-photography-london/">skincare photography</a> page.',
        ],
      },
    ],
    getList: [
      'Campaign ads and brand films for your site and channels',
      'In-store and launch event films cut for social',
      'Model and talent-led content with a consistent grade',
      'Product close-ups and detail shots for ads and retailers',
      'Retouched stills shot alongside the films',
      'Versions for every platform, including vertical 9:16',
    ],
    faqs: [
      { q: 'Do you work with beauty retailers as well as brands?', a: 'Yes. We film in-store tours and product highlights for retail, as well as brand campaigns, launches and events.' },
      { q: 'Can you shoot a product launch and cut content for social afterwards?', a: 'Yes. We plan the launch coverage and the social cuts together, so you leave the event with content for every channel you need.' },
      { q: 'What does beauty video production cost?', a: 'It depends on the number of shoot days, the people on screen and the deliverables you need. We quote each project to the brief. See our <a href="/skincare-video-production-cost/">packages page</a> for what each monthly package includes, then get in touch for a quote.' },
    ],
    related: ['skincare-video-production-london', 'beauty-social-media-video-production', 'skincare-photography-london'],
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
      { q: 'Can you make content for social as well as the website?', a: 'Yes. From one shoot we deliver a main film for your website and vertical edits for social. See our <a href="/beauty-social-media-video-production/">social video</a> page.' },
      { q: 'How much does clinic video production cost?', a: 'It depends on the number of shoot days, the people on screen and the versions you need. We quote to the brief; see the <a href="/skincare-video-production-cost/">packages page</a> for what each monthly package includes, then get in touch for a quote.' },
    ],
    related: ['interview-testimonial-filming-london', 'spa-wellness-video-production-london', 'skincare-video-production-cost'],
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
    related: ['aesthetic-clinic-video-production-london', 'beauty-social-media-video-production', 'skincare-photography-london'],
  },

  // ─────────────────────────────────────────────────────────────────── 5
  {
    slug: 'beauty-social-media-video-production',
    group: 'service', footerLabel: 'Social media video',
    relLabel: 'Social', relTitle: 'Social media video for beauty', relText: 'Vertical video for Reels, TikTok and paid social.',
    crumb: 'Social media video for beauty brands',
    title: 'Social Media Video for Beauty & Skincare Brands | Shotwell',
    description: 'Social media video production for beauty and skincare brands in London: native vertical content, creator videos and ads for Reels, TikTok and paid social.',
    h1: 'Social media video for <em>beauty and skincare</em> brands',
    h1Plain: 'Social media video for beauty and skincare brands',
    eyebrow: 'Social content',
    lead: 'Shotwell makes social content for beauty and skincare brands: vertical video shot natively for Reels, TikTok and Stories, creator-led videos and ads built to perform in paid social. Made by a London studio that also shoots your hero films.',
    serviceName: 'Social media video production for beauty brands', serviceType: 'Social media video production',
    clipsLabel: 'Social content', clips: [clip.paid, clip.experts, clip.events],
    sections: [
      {
        h2: 'Shot for the feed, not cropped for it',
        paragraphs: [
          'A widescreen film cropped to vertical rarely works. We shoot social content natively in 9:16, framing for the phone, with hooks in the first seconds and edits paced for how people scroll. The same shoot can also produce widescreen and square versions, so nothing needs to be re-made.',
        ],
      },
      {
        h2: 'Organic and paid, planned together',
        paragraphs: [
          'Paid social rewards variety. Our packages include a mix of organic and paid-optimised formats, product close-ups made for ads, and creator videos, so you have fresh creative to test rather than one hero asset that tires quickly.',
          'Where it helps, we build recurring series, such as Skin Ritual, Ingredient Deep-Dive and Founder Perspective, so your feed has a recognisable shape. See <a href="/skincare-video-production-cost/">our packages</a> for what each month includes.',
        ],
      },
      {
        h2: 'Creators matched to your customer',
        paragraphs: [
          'Our packages include UGC creator videos from vetted creators, matched to your customer profile and, for skincare, to skin type, with diversity across skin types. It means the content looks like your customers rather than a stock library.',
        ],
      },
    ],
    getList: [
      'Native 9:16 video for Reels, TikTok and Stories',
      'Product close-up videos made for paid ads',
      'UGC creator videos matched to your customer',
      'Series formats that give your feed a recognisable shape',
      'Behind-the-scenes cuts with music, optimised per platform',
      'A structured revision round with a 48-hour turnaround',
    ],
    faqs: [
      { q: 'Do you make content for paid ads as well as organic posts?', a: 'Yes. Our packages include a mix of organic and paid-optimised formats, and product close-ups made specifically for ads.' },
      { q: 'Can you work with our own creators or influencers?', a: 'Our monthly packages include vetted UGC creators matched to your customer. If you already work with creators or influencers, tell us and we will plan how they fit into a shoot.' },
      { q: 'How much does social video for a beauty brand cost?', a: 'It depends on how many clips, platforms and shoot days you need. We quote to the brief; see the <a href="/skincare-video-production-cost/">packages page</a> for what each monthly package includes, then get in touch for a quote.' },
    ],
    related: ['skincare-product-video-production', 'skincare-video-production-london', 'skincare-video-production-cost'],
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
          'For brands that want to go further, our Campaign package includes a 3D animated molecular or ingredient visualisation that shows your key active at a scientific level.',
        ],
      },
      {
        h2: 'Made for the places they are used',
        paragraphs: [
          'Product video lives on product pages, in marketplaces and retailer listings, in paid social and in email. We deliver versions sized for each, with product close-ups made for ads. See our <a href="/beauty-social-media-video-production/">social video</a> page for how these work in the feed, or our <a href="/skincare-photography-london/">product photography</a> for the stills that go with them.',
        ],
      },
    ],
    getList: [
      'Macro product and texture close-ups',
      'Ingredient stories in plain language',
      '3D molecular or ingredient visualisation (Campaign package)',
      'Styled context videos that put the product in a real setting',
      'Cuts made for paid ads, product pages and retailers',
      'Retouched product stills from the same shoot',
    ],
    faqs: [
      { q: 'Do we need a model for a product video?', a: 'No. Our Foundation package is product-only with no model. Model and talent-led content is available in our Series and Campaign packages.' },
      { q: 'What is a molecular or ingredient visualisation?', a: 'A 3D animated asset that shows your key active at a scientific level. It is included each month in our Campaign package, and it works well in ads, on product pages and with retail buyers.' },
      { q: 'How much does skincare product video cost?', a: 'It depends on the number of films, stills and shoot days. Our Foundation package is built around product films and stills; see the <a href="/skincare-video-production-cost/">packages page</a> for what it includes, then get in touch for a quote.' },
    ],
    related: ['skincare-video-production-london', 'skincare-photography-london', 'beauty-social-media-video-production'],
  },

  // ─────────────────────────────────────────────────────────────────── 7
  {
    slug: 'interview-testimonial-filming-london',
    group: 'service', footerLabel: 'Interviews & testimonials',
    relLabel: 'Interviews', relTitle: 'Interview and testimonial filming', relText: 'Founder stories, expert-led content and testimonials.',
    crumb: 'Interview and testimonial filming',
    title: 'Interview & Testimonial Filming London | Shotwell',
    description: 'Interview and testimonial filming in London for beauty and wellness: founder stories, practitioner-led content and testimonials, cut for web and social.',
    h1: 'Interview and testimonial filming <em>in London</em>',
    h1Plain: 'Interview and testimonial filming in London',
    eyebrow: 'Interviews & testimonials',
    lead: 'The people behind a brand are often its most persuasive asset. Shotwell films founder interviews, practitioner-led content and customer testimonials for beauty, skincare and wellness, then cuts them for your site and your social channels.',
    serviceName: 'Interview and testimonial filming', serviceType: 'Interview filming',
    clips: [clip.interviews, clip.experts, clip.events],
    sections: [
      {
        h2: 'Let the experts speak',
        paragraphs: [
          'In beauty and wellness, expertise is trust. A founder explaining why they made the product, or a practitioner describing how a treatment works, can say what a script never could. We help people relax on camera, plan the questions, and shape the interview into something clear and worth watching.',
        ],
      },
      {
        h2: 'From one conversation to many pieces',
        paragraphs: [
          'A single interview can become a longer film for your site, short expert tips for social and a testimonial cut for ads. We plan these edits before we film, so the interview is shaped to produce all of them. Our Series packages include a Founder Perspective format built around exactly this.',
          'It pairs well with our <a href="/aesthetic-clinic-video-production-london/">clinic video production</a> and <a href="/spa-wellness-video-production-london/">spa and wellness video</a>.',
        ],
      },
      {
        h2: 'Testimonials people believe',
        paragraphs: [
          'Customer and client testimonials work best when they are specific and natural. We film them in a relaxed setting, with consent and releases in place, and cut them to the moments that carry the most weight.',
        ],
      },
    ],
    getList: [
      'Founder and brand-story interviews',
      'Practitioner and expert-led education content',
      'Customer and patient testimonials, filmed with releases',
      'Short vertical clips for Reels, TikTok and Stories',
      'Longer films for your website and email',
      'Stills of your people, shot on the same day',
    ],
    faqs: [
      { q: 'Can you make a founder feel comfortable on camera?', a: 'That is part of the job. We agree the questions in advance, film in a relaxed setting and give direction as we go, so you do not need any experience on camera.' },
      { q: 'Can we get short clips as well as the full interview?', a: 'Yes. We plan the interview so it can be cut into a full film and several shorter vertical pieces for social.' },
      { q: 'How much does interview filming cost?', a: 'It depends on the number of people, the locations and the versions you need. See our <a href="/skincare-video-production-cost/">packages page</a> for our monthly packages, and contact us for a quote.' },
    ],
    related: ['aesthetic-clinic-video-production-london', 'beauty-social-media-video-production', 'skincare-video-production-cost'],
  },

  // ─────────────────────────────────────────────────────────────────── 8
  {
    slug: 'skincare-photography-london',
    group: 'service', footerLabel: 'Skincare photography',
    relLabel: 'Photography', relTitle: 'Skincare photography', relText: 'Product, lifestyle and editorial stills for beauty brands.',
    crumb: 'Skincare photography',
    title: 'Skincare & Beauty Photography London | Shotwell',
    description: 'Skincare and beauty photography in London: product, lifestyle and editorial stills for brands, clinics and spas, shot alongside your video content.',
    h1: 'Skincare and beauty photography <em>in London</em>',
    h1Plain: 'Skincare and beauty photography in London',
    eyebrow: 'Photography',
    lead: 'Stills for your website, your retailers and your social, made by the same studio that makes your video. Shotwell photographs skincare and beauty products, treatments, people and spaces, with a consistent look across every image.',
    serviceName: 'Skincare and beauty photography', serviceType: 'Beauty photography',
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
          'Stills and film share a set, a look and a crew, so shooting them together saves time and keeps your brand consistent. Our monthly packages include retouched stills alongside the video, from 12 images a month in Foundation to 35 in Campaign, including format variants.',
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
      { q: 'How many photos are included in your packages?', a: 'Our monthly packages include 12 retouched stills in Foundation, 20 in Series and 35 in Campaign. See the <a href="/skincare-video-production-cost/">packages page</a>.' },
      { q: 'Do you photograph clinics and spas as well as products?', a: 'Yes. We photograph treatment rooms, interiors, devices and portraits of the people who work there.' },
    ],
    related: ['skincare-product-video-production', 'skincare-video-production-london', 'skincare-video-production-cost'],
  },

  // ─────────────────────────────────────────────────────────────────── 9
  {
    slug: 'skincare-video-production-cost',
    group: 'cost', footerLabel: 'Packages',
    relLabel: 'Packages', relTitle: 'Skincare video production cost', relText: 'Our monthly packages and what each one includes.',
    crumb: 'Skincare video production cost',
    title: 'How Much Does Skincare Video Production Cost? | Shotwell',
    description: 'What affects the cost of skincare video production in the UK, and what Shotwell’s three monthly packages include: shoot days, edit time, videos and stills.',
    h1: 'How much does skincare video production <em>cost?</em>',
    h1Plain: 'How much does skincare video production cost?',
    eyebrow: 'Packages',
    lead: 'Every Shotwell package sets out the shoot days, edit time and deliverables you get, so you know what you are paying for before we start. We quote to your brief: tell us what you need and we will recommend a package.',
    serviceName: 'Monthly skincare content packages', serviceType: 'Skincare video production',
    ctaTitle: 'Get a quote',
    ctaText: 'Tell us about your brand and what you need. We will recommend a package and come back with a clear, itemised quote.',
    packages: Object.assign([
      {
        num: 'Package 01', name: 'Foundation',
        meta: '1 shoot day · 1.5 editing days · product-only, no model',
        items: ['4 short-form videos', '1 product close-up video for paid ads', '12 retouched stills', '3 UGC creator videos', '1 structured revision cycle, 48-hour turnaround', '10 working day delivery'],
      },
      {
        num: 'Package 02', name: 'Series', popular: true,
        meta: '2 shoot days · 2.5 editing days · model included',
        items: ['5 short-form videos', '1 series episode (45–75 sec, model or talent-led)', '2 product close-up videos', '1 behind-the-scenes cut', '20 retouched stills', '4 UGC creator videos', '2 structured revision cycles', '10 working day delivery'],
      },
      {
        num: 'Package 03', name: 'Campaign',
        meta: '3 shoot days · 4 editing days · model + 3D',
        items: ['8 short-form videos', '1 series episode (45–75 sec, model-led)', '3 product close-up videos', '2 behind-the-scenes cuts', '1 molecular / ingredient 3D visualisation', '35 retouched stills', '6 UGC creator videos', '3 structured revision cycles', 'Quarterly: 1 cinematic hero brand film (60–90 sec)', '10 working day delivery'],
      },
    ], { note: 'If your project does not fit a package, tell us what you need and we will quote it to the brief.' }),
    sections: [
      {
        h2: 'What affects the cost',
        paragraphs: [
          'Video costs are driven by a few things: how many days we shoot, how many people are on screen and whether you need models or creators, how much editing and how many versions you need, and any specialist work such as 3D visualisation. Our packages bundle these into a fixed monthly fee so you can plan.',
          'Usage matters too. We agree where and for how long the content can be used when we quote, including paid advertising.',
        ],
      },
      {
        h2: 'Which package suits you',
        paragraphs: [
          '<strong>Foundation</strong> suits skincare brands that need a steady supply of product-led content without a model. <strong>Series</strong>, our most popular, adds a model or talent and a recurring series episode, which is a good fit for brands building a recognisable feed. <strong>Campaign</strong> is for brands running paid social at scale, with 3D visualisation, more creator content and a quarterly hero brand film.',
          'Not sure? Tell us about your brand and we will recommend one. You can also see the thinking behind these in our <a href="/skincare-video-production-london/">skincare video production</a> and <a href="/beauty-social-media-video-production/">social video</a> pages.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does skincare video production cost in the UK?', a: 'It varies widely, from small creator-style content to large campaigns. The cost depends on the number of shoot days, talent and deliverables. Tell us what you need and we will quote it to the brief.' },
      { q: 'What is included in each package?', a: 'Every package sets out the shoot days, editing days, the number of videos and stills, creator videos, revision rounds and the delivery time. The full lists are above.' },
      { q: 'How long does delivery take?', a: 'Our packages are delivered within 10 working days, with each revision round turned around in 48 hours.' },
      { q: 'Can I commission a one-off project instead?', a: 'Tell us what you need and we will quote it to the brief.' },
    ],
    faqTitle: 'Cost questions',
    related: ['skincare-video-production-london', 'beauty-social-media-video-production', 'skincare-product-video-production'],
  },
]
