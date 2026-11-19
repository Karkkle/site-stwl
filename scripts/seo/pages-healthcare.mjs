// Healthcare landing pages: private healthcare, clinics, hospitals, medical devices, doctors, Harley Street, social and photography.
// Plain data, same shape as pages.mjs. These describe what Shotwell makes and how it works; they do not name clients or promise results.
// Anything about regulation is general guidance only (the ASA/CAP Code, MHRA and GMC are named as places to check); every claim stays the client's responsibility.

import { clip, photo } from './assets.mjs'

const COST = '<a href="/skincare-video-production-cost/">packages page</a>'

export const HEALTHCARE_PAGES = [
  // ───────────────────────────────────────────────────────── private healthcare (hub)
  {
    slug: 'private-healthcare-video-production-london',
    footerLabel: 'Private healthcare',
    relLabel: 'Private healthcare', relTitle: 'Private healthcare video', relText: 'Films for clinics, hospitals, doctors and medical device brands.',
    crumb: 'Private healthcare video production',
    title: 'Private Healthcare Video Production London | Shotwell',
    description: 'Private healthcare video production in London: films for clinics, hospitals, doctors and medical device brands that explain care clearly and build trust.',
    h1: 'Private healthcare video production <em>in London</em>',
    h1Plain: 'Private healthcare video production in London',
    eyebrow: 'Private healthcare',
    lead: 'Patients choose private care on trust. Shotwell is a London studio that makes video and photography for private clinics, hospitals, specialist doctors and medical device brands: films that explain what you do clearly, introduce the people behind it and are made with the care your patients expect.',
    serviceName: 'Private healthcare video production', serviceType: 'Healthcare video production',
    clipsLabel: 'Selected work', clips: [clip.treatments, clip.interviews, clip.experts],
    sections: [
      {
        h2: 'Content that earns trust before the first appointment',
        paragraphs: [
          'Choosing private healthcare is a high-stakes decision, and people research it carefully. They look at who will treat them, what the experience will be like and whether the place feels safe and well run. Video answers those questions faster and more honestly than a page of text.',
          'We make films that introduce clinicians in their own words, explain treatments and pathways calmly, and show the spaces where care happens. The aim is a patient who arrives informed and at ease, and a referrer who already knows who you are.',
        ],
      },
      {
        h2: 'One studio, every audience',
        paragraphs: [
          'Private healthcare speaks to several audiences at once: patients, GPs and other referrers, consultants and clinical staff, and, for device brands, buyers and clinicians. Each needs different content, and we plan it together so the look and the message stay consistent.',
          'Depending on who you are, start with our pages on <a href="/private-clinic-video-production-london/">private clinics</a>, <a href="/private-hospital-video-production-london/">private hospitals</a>, <a href="/doctor-consultant-video-production-london/">doctors and consultants</a> or <a href="/medical-device-video-production-london/">medical devices</a>.',
        ],
      },
      {
        h2: 'Accuracy, consent and approvals',
        paragraphs: [
          'Healthcare content is held to a higher standard. We work from your approved wording, you approve every medical claim, and anyone who appears on camera signs a release before we film. Marketing for healthcare in the UK is covered by the ASA and CAP Code, and doctors’ advertising by GMC guidance, so we recommend your compliance lead or regulatory adviser reviews the final cut.',
          'We are based in Bloomsbury, central London, a short journey from <a href="/harley-street-video-production/">Harley Street</a> and Marylebone, and we film at your premises across London and the UK.',
        ],
      },
    ],
    getTitle: 'What we make for private healthcare',
    getList: [
      'Brand films that introduce your clinic, hospital or practice',
      'Clinician introductions and expert-led education content',
      'Treatment and pathway explainers made for patients',
      'Patient stories, filmed with consent and releases',
      'Short vertical cuts for Instagram, LinkedIn and Stories',
      'Photography of your people, spaces and equipment',
    ],
    faqs: [
      { q: 'What kinds of healthcare organisations do you make content for?', a: 'We make video and photography for private clinics, hospitals, specialist doctors and medical device brands, as well as skincare and wellness businesses. Each project is scoped to the organisation and the audience it needs to reach.' },
      { q: 'Can you film in a working clinic or hospital?', a: 'Yes. We follow your site’s rules on infection control, privacy and access, agree the schedule and shot list beforehand, and film patients only with their consent. Shoots are planned around appointments and clinical activity.' },
      { q: 'Do you write or check medical claims?', a: 'No. You approve every claim. We work from your approved wording and flag anything that may need a second look. Because healthcare marketing is regulated, we recommend your compliance lead reviews the final cut.' },
      { q: 'Do you film on Harley Street?', a: 'Yes. Our studio is in Bloomsbury, a short journey from Harley Street and Marylebone, and we film at your premises. See our <a href="/harley-street-video-production/">Harley Street page</a>.' },
    ],
    related: ['private-clinic-video-production-london', 'private-hospital-video-production-london', 'medical-device-video-production-london'],
  },

  // ───────────────────────────────────────────────────────── private clinics
  {
    slug: 'private-clinic-video-production-london',
    footerLabel: 'Private clinics',
    relLabel: 'Private clinics', relTitle: 'Private clinic video', relText: 'Brand films, clinician introductions and treatment explainers.',
    crumb: 'Private clinic video production',
    title: 'Private Clinic Video Production London | Shotwell',
    description: 'Video production for private clinics in London: brand films, clinician introductions and treatment explainers, filmed around your appointments.',
    h1: 'Private clinic video production <em>in London</em>',
    h1Plain: 'Private clinic video production in London',
    eyebrow: 'Private clinics',
    lead: 'A private clinic is chosen on reputation, reassurance and the people a patient will meet. Shotwell films private clinics in London with films that introduce your clinicians, explain consultations and treatments, and show the space, so patients arrive informed and at ease.',
    serviceName: 'Private clinic video production', serviceType: 'Clinic video production',
    clips: [clip.treatments, clip.process, clip.experts],
    sections: [
      {
        h2: 'Show patients what to expect',
        paragraphs: [
          'Much of the worry before a first appointment is about the unknown: who will I see, what will happen, will it hurt, how long will it take. A short film that walks through a consultation, a test or a treatment answers those questions before the patient has to ask them.',
          'We make these films calmly and clearly, in the language your clinicians would use in the room, and cut them for your website, your appointment emails and social.',
        ],
      },
      {
        h2: 'Your clinicians, on camera',
        paragraphs: [
          'Patients want to know who is treating them. We film clinicians introducing themselves, their specialism and their approach, and explaining conditions and treatments in plain language. We help people who are not used to cameras relax, and we agree the questions beforehand so nobody is put on the spot.',
          'A single session can produce an introduction film, several short educational clips and portraits for your site. See our pages on <a href="/doctor-consultant-video-production-london/">doctors and consultants</a> and <a href="/interview-testimonial-filming-london/">interview and testimonial filming</a>.',
        ],
      },
      {
        h2: 'Filming around patients and privacy',
        paragraphs: [
          'A working clinic cannot stop for a shoot, so we plan around your appointments, agree which rooms are used and when, and keep the crew small. Patients are never filmed without a signed release, and we can use staff, consenting volunteers or careful framing where a patient should not be identifiable.',
          'For cosmetic and aesthetic medicine, see our <a href="/aesthetic-clinic-video-production-london/">aesthetic clinic video production</a> page, which also covers the advertising rules that apply to those treatments.',
        ],
      },
    ],
    getTitle: 'What you can get for your clinic',
    getList: [
      'A brand film that introduces your clinic and your team',
      'Consultation and treatment explainers for patients',
      'Clinician introductions and condition education',
      'Patient stories, with consent and releases in place',
      'Vertical edits for Instagram, LinkedIn and Stories',
      'Photography of the clinic, the team and the equipment',
    ],
    faqs: [
      { q: 'How long does a clinic shoot take?', a: 'Our packages are built around one to three shoot days a month. We scope a clinic shoot to the number of clinicians, treatments and spaces involved, and agree the plan and shot list with you first.' },
      { q: 'Can we show real patients in the film?', a: 'Only with their agreement and a signed release. Where that is not appropriate, we can use staff, consenting volunteers or framing that keeps a patient unidentifiable.' },
      { q: 'Can the content work for social as well as the website?', a: 'Yes. From one shoot we deliver a main film for your website and short vertical edits for social. See our <a href="/healthcare-social-media-video-production/">healthcare social media video</a> page.' },
      { q: 'How much does clinic video production cost?', a: `It depends on the number of shoot days, the people on screen and the versions you need. We quote to the brief; see the ${COST} for what each monthly package includes, then get in touch for a quote.` },
    ],
    related: ['private-healthcare-video-production-london', 'doctor-consultant-video-production-london', 'aesthetic-clinic-video-production-london'],
  },

  // ───────────────────────────────────────────────────────── private hospitals
  {
    slug: 'private-hospital-video-production-london',
    footerLabel: 'Private hospitals',
    relLabel: 'Private hospitals', relTitle: 'Private hospital video', relText: 'Facility films, patient information and consultant introductions.',
    crumb: 'Private hospital video production',
    title: 'Private Hospital Video Production London | Shotwell',
    description: 'Video and photography for private hospitals in London: facility films, patient information, consultant introductions and recruitment content.',
    h1: 'Private hospital video production <em>in London</em>',
    h1Plain: 'Private hospital video production in London',
    eyebrow: 'Private hospitals',
    lead: 'A private hospital speaks to many audiences at once: patients choosing where to be treated, consultants deciding where to practise, referrers, and the staff you want to recruit. Shotwell makes video and photography for private hospitals and healthcare groups that speaks to each of them clearly.',
    serviceName: 'Private hospital video production', serviceType: 'Hospital video production',
    clips: [clip.interviews, clip.treatments, clip.process],
    sections: [
      {
        h2: 'One hospital, several audiences',
        paragraphs: [
          'The film that reassures a patient is not the film that persuades a consultant. We plan a library of content together: patient guides that show what to expect on admission and through a pathway, introductions to specialties and services, content for consultants considering where to practise, and recruitment films that show what it is like to work for you.',
          'Planned as one programme, these share a look and a voice, so the hospital feels like one confident organisation rather than a collection of separate pieces.',
        ],
      },
      {
        h2: 'Facilities, services and people',
        paragraphs: [
          'We film and photograph the facilities, the services and the people who run them: patient rooms and public spaces, diagnostics and treatment areas, and the clinical and support teams. For groups with several sites, we can shoot to a consistent style so every location feels part of the same brand.',
          'The same studio that makes the films also photographs the spaces and portraits of your clinicians. See <a href="/healthcare-photography-london/">healthcare photography</a>.',
        ],
      },
      {
        h2: 'Working inside a live hospital',
        paragraphs: [
          'A hospital has rules for good reasons. We agree access, infection control, privacy and filming areas with your site, estates and communications teams before we arrive, work with a small crew and escort arrangements where required, and plan around clinical activity. Patients appear only with their consent, and where an area is too sensitive to film we use a reset room, an unoccupied space or staff on camera instead.',
        ],
      },
    ],
    getTitle: 'What you can get for your hospital',
    getList: [
      'A hospital brand film and service introductions',
      'Patient guides: what to expect from admission to discharge',
      'Consultant introductions and practising-privileges content',
      'Recruitment and staff stories for your careers pages',
      'Facility photography and clinician portraits',
      'Short edits for social and internal communications',
    ],
    faqs: [
      { q: 'Can you film in wards and clinical areas?', a: 'It depends on your site’s rules, infection control and patient privacy. We agree what is filmed where with your teams, and often use unoccupied or reset spaces, with staff on camera in place of patients.' },
      { q: 'Can you work across several hospital sites?', a: 'Yes. We plan multi-site projects so each location is filmed to a consistent look, and we schedule around the access and clinical activity at each one.' },
      { q: 'Do you make recruitment videos?', a: 'Yes. Staff stories and day-in-the-life films for careers pages are part of what we make for hospitals, filmed with the people who work there.' },
      { q: 'How much does hospital video production cost?', a: `It depends on the number of sites, shoot days and deliverables. We quote to the brief; see the ${COST}, then get in touch for a quote.` },
    ],
    related: ['private-healthcare-video-production-london', 'doctor-consultant-video-production-london', 'healthcare-photography-london'],
  },

  // ───────────────────────────────────────────────────────── medical devices
  {
    slug: 'medical-device-video-production-london',
    footerLabel: 'Medical devices',
    relLabel: 'Medical devices', relTitle: 'Medical device video', relText: 'Product films, clinician demonstrations and 3D visualisation.',
    crumb: 'Medical device video production',
    title: 'Medical Device Video Production London | Shotwell',
    description: 'Medical device video production in London: product films, clinician demonstrations and 3D visuals that show buyers and clinicians how your device works.',
    h1: 'Medical device video production <em>in London</em>',
    h1Plain: 'Medical device video production in London',
    eyebrow: 'Medical devices',
    lead: 'A device has to be understood before it is bought or trusted. Shotwell makes video and photography for medical device brands: product films, clinician demonstrations, training content and 3D visualisation that explain what your device does, how it is used and why clinicians can rely on it.',
    serviceName: 'Medical device video production', serviceType: 'Medical device video production',
    clips: [clip.treatments, clip.ads, clip.process],
    sections: [
      {
        h2: 'Show how it works, in use',
        paragraphs: [
          'Specifications explain what a device is. A film shows what it is like to use: how it is held, how it behaves, what the clinician and the patient experience. We film devices in real clinical settings with real clinicians, and add macro close-ups of the product itself for the detail that matters to a buyer.',
          'The same shoot can produce a main product film, shorter demonstration clips and stills for your site, brochures and distributors.',
        ],
      },
      {
        h2: 'Clinician voices and training',
        paragraphs: [
          'Peer credibility carries more weight than a brand voice. We film clinicians explaining why they use a device and what they have seen, and we make training and onboarding content for new users and for your own sales and support teams.',
          'For events and shows, we cut shorter versions for screens and social. See our page on <a href="/interview-testimonial-filming-london/">interview and testimonial filming</a>.',
        ],
      },
      {
        h2: '3D visualisation',
        paragraphs: [
          'Some of what a device does cannot be filmed: what happens beneath the skin, at the tissue or at the cellular level. We can include 3D animated visualisation, as in our Campaign package, to explain a mechanism clearly and consistently with the live-action film.',
        ],
      },
      {
        h2: 'Claims, regulation and approvals',
        paragraphs: [
          'What you can say about a device depends on its intended use and evidence, and on whether the audience is professional or the public. Advertising claims fall under the ASA and CAP Code, and the MHRA regulates devices in the UK. We work from your approved intended-use wording and claims, you approve every claim in the cut, and we recommend your regulatory team reviews the final films before release.',
        ],
      },
    ],
    getTitle: 'What you can get for your device',
    getList: [
      'A main product film showing the device in use',
      'Clinician demonstrations and expert-led content',
      'Training and onboarding videos for users and sales teams',
      '3D visualisation of how the device works',
      'Macro product close-ups and clinical-setting stills',
      'Shorter cuts for events, distributors and social',
    ],
    faqs: [
      { q: 'Can you film the device in a real clinic, with a clinician?', a: 'Yes. We arrange the shoot with your clinical partner, agree the procedure and what appears on camera beforehand, and film with the necessary consent. Where a procedure cannot be filmed live, we can recreate it with staff.' },
      { q: 'Do you make content for professionals and for patients?', a: 'Yes, and we plan them separately, because the language, the claims and the rules differ. A film for clinicians can go further than one aimed at the public.' },
      { q: 'Do you make 3D animation?', a: 'We can include 3D animated visualisation to explain how a device or an active works. It is part of our Campaign package, and can be scoped on its own for a device launch.' },
      { q: 'Who checks the regulatory claims?', a: 'You do. We work from your approved wording and flag anything that may need a second look, and we recommend your regulatory or compliance team reviews the final cut before it is published.' },
    ],
    related: ['private-clinic-video-production-london', 'healthcare-photography-london', 'skincare-product-video-production'],
  },

  // ───────────────────────────────────────────────────────── doctors and consultants
  {
    slug: 'doctor-consultant-video-production-london',
    footerLabel: 'Doctors & consultants',
    relLabel: 'Doctors & consultants', relTitle: 'Doctor and consultant video', relText: 'Introduction films, patient education and profile photography.',
    crumb: 'Doctor and consultant video production',
    title: 'Doctor & Consultant Video Production London | Shotwell',
    description: 'Video and photography for specialist doctors and consultants in London: introduction films, patient education and profile content that builds trust.',
    h1: 'Doctor and consultant video production <em>in London</em>',
    h1Plain: 'Doctor and consultant video production in London',
    eyebrow: 'Doctors & consultants',
    lead: 'Patients and referrers look a specialist up before they ever call. Shotwell films consultants and specialist doctors in London: introduction films, condition and procedure explainers and profile photography that let people meet you, understand your approach and feel confident booking.',
    serviceName: 'Doctor and consultant video production', serviceType: 'Healthcare video production',
    clips: [clip.interviews, clip.experts, clip.treatments],
    sections: [
      {
        h2: 'Let patients meet the doctor',
        paragraphs: [
          'A good introduction film does what a first consultation does: it shows how you speak, how you listen and how you explain. We film it simply and calmly, with you speaking in your own words about your specialism, your approach and what patients can expect. The result goes on your profile page, your practice website and your hospital listings.',
          'Alongside the film we photograph portraits for your site, your practice and press.',
        ],
      },
      {
        h2: 'Explain your specialty',
        paragraphs: [
          'Patients search for what is wrong before they search for who can help. Short films that explain a condition, a test or a procedure in plain language bring people to you and make a first appointment easier. We plan these with you, working from your wording, and cut them for your website and for vertical social.',
          'Referrers also watch. A clear introduction and a clear account of your pathway helps GPs and colleagues know when and how to refer.',
        ],
      },
      {
        h2: 'Made for a busy schedule',
        paragraphs: [
          'Consultants have limited time, so we plan shoots to use it well: questions agreed in advance, a small crew, and one session producing an introduction film, several short educational clips and portraits. We can film at your rooms, your hospital or at a location that suits you.',
          'Doctors’ marketing is governed by the ASA and CAP Code and by GMC guidance. We work from your wording and you approve the final cut. See also our pages on <a href="/private-clinic-video-production-london/">private clinics</a> and <a href="/harley-street-video-production/">Harley Street</a>.',
        ],
      },
    ],
    getTitle: 'What you can get as a consultant',
    getList: [
      'An introduction film for your profile and practice website',
      'Condition and procedure explainers in plain language',
      'Short vertical clips for LinkedIn and Instagram',
      'Referrer-focused content on your pathway and approach',
      'Profile portraits for your site, hospitals and press',
      'All captured in one planned, time-efficient session',
    ],
    faqs: [
      { q: 'I have never been on camera. Will it be awkward?', a: 'It is a normal worry. We agree the questions in advance, film in a relaxed setting and direct as we go, so you do not need any experience. Most people find it easier than they expected.' },
      { q: 'How long does a shoot take?', a: 'A single-consultant shoot can often be planned as a half day to a day, depending on how much we make. We agree the plan with you first so your time is used well.' },
      { q: 'Can you film at my rooms or the hospital where I practise?', a: 'Yes. We film at your rooms, at the hospital, or elsewhere, agreeing access and permissions with the site beforehand.' },
      { q: 'How much does it cost?', a: `It depends on how much you want to make. We quote to the brief; see the ${COST}, then get in touch for a quote.` },
    ],
    related: ['private-clinic-video-production-london', 'harley-street-video-production', 'interview-testimonial-filming-london'],
  },

  // ───────────────────────────────────────────────────────── Harley Street
  {
    slug: 'harley-street-video-production',
    footerLabel: 'Harley Street',
    relLabel: 'Harley Street', relTitle: 'Harley Street video and photography', relText: 'Video and photography for Harley Street and Marylebone practices.',
    crumb: 'Harley Street video production',
    title: 'Harley Street Video Production & Photography | Shotwell',
    description: 'Video production and photography for Harley Street and Marylebone clinics, consultants and practices, from a Bloomsbury studio a short journey away.',
    h1: 'Video production and photography <em>for Harley Street</em>',
    h1Plain: 'Video production and photography for Harley Street',
    eyebrow: 'Harley Street & Marylebone',
    lead: 'Harley Street is a reputation as much as an address. Shotwell, based in Bloomsbury, makes video and photography for consultants, clinics and practices on Harley Street and in Marylebone: content that matches the standard your patients expect and works for your website, your referrers and your social channels.',
    serviceName: 'Video production and photography for Harley Street', serviceType: 'Healthcare video production',
    clips: [clip.treatments, clip.interviews, clip.process],
    sections: [
      {
        h2: 'Content for an address with a reputation',
        paragraphs: [
          'Patients who choose Harley Street are choosing a standard, and your content should look like it. We keep the look restrained and considered: calm light, careful framing and a natural grade, with the focus on the doctor, the care and the space rather than on effects.',
          'The same approach runs from the introduction film to the portraits to the short edits for social, so everything feels like one practice.',
        ],
      },
      {
        h2: 'Filming in practices and consulting rooms',
        paragraphs: [
          'Many Harley Street practices share a building, so we plan access with you and, where needed, your managing agent: loading, lifts, shared areas and timing. We work with a small crew, keep disruption to other tenants low, and plan around your appointments, including early, late or weekend slots where your building allows.',
          'We cover Harley Street, Wimpole Street, Welbeck Street, Cavendish Square and the surrounding Marylebone medical district, and we also film across London and the UK.',
        ],
      },
      {
        h2: 'What we make for Harley Street practices',
        paragraphs: [
          'An introduction film for each consultant, explainers for the conditions and procedures you treat, a practice film that shows the rooms and the team, and profile photography. See our pages for <a href="/doctor-consultant-video-production-london/">doctors and consultants</a>, <a href="/private-clinic-video-production-london/">private clinics</a> and <a href="/healthcare-photography-london/">healthcare photography</a>.',
        ],
      },
    ],
    getTitle: 'What you can get for your practice',
    getList: [
      'An introduction film for each consultant',
      'Condition and procedure explainers',
      'A practice film showing your rooms and your team',
      'Profile portraits and interior photography',
      'Vertical edits for LinkedIn and Instagram',
      'Shoots planned around your appointments and building',
    ],
    faqs: [
      { q: 'Can you film in a shared Harley Street building?', a: 'Yes. We agree access, timing and shared-area arrangements with you and, where needed, your managing agent, and keep the crew small to minimise disruption.' },
      { q: 'Can you film outside normal hours?', a: 'We can plan shoots around your appointments, including early or late slots where your building and your team allow.' },
      { q: 'Do you work with a single consultant as well as larger practices?', a: 'Yes. We scope the shoot to the size of the practice, from one consultant’s introduction film to a multi-specialty practice.' },
      { q: 'How much does it cost?', a: `It depends on the number of consultants, shoot days and deliverables. We quote to the brief; see the ${COST}, then get in touch for a quote.` },
    ],
    related: ['doctor-consultant-video-production-london', 'private-clinic-video-production-london', 'healthcare-photography-london'],
  },

  // ───────────────────────────────────────────────────────── healthcare + skincare social
  {
    slug: 'healthcare-social-media-video-production',
    footerLabel: 'Social media video',
    relLabel: 'Social', relTitle: 'Social media video for healthcare and skincare', relText: 'Vertical video for Instagram, TikTok and LinkedIn.',
    crumb: 'Social media video for healthcare and skincare brands',
    title: 'Social Media Video for Healthcare & Skincare | Shotwell',
    description: 'Social media video for healthcare and skincare brands in London: native vertical content and clinician-led education for Instagram, TikTok and LinkedIn.',
    h1: 'Social media video for <em>healthcare and skincare</em> brands',
    h1Plain: 'Social media video for healthcare and skincare brands',
    eyebrow: 'Social content',
    lead: 'Shotwell makes social content for healthcare and skincare brands: clinician-led education, treatment explainers and product videos shot natively in vertical for Reels, TikTok, Stories and LinkedIn. Made by a London studio that also shoots your hero films.',
    serviceName: 'Social media video production for healthcare and skincare brands', serviceType: 'Social media video production',
    clipsLabel: 'Social content', clips: [clip.paid, clip.experts, clip.events],
    sections: [
      {
        h2: 'Shot for the feed, not cropped for it',
        paragraphs: [
          'A widescreen film cropped to vertical rarely works. We shoot social content natively in 9:16, framing for the phone, with a clear hook in the first seconds and edits paced for how people scroll. The same shoot can also produce widescreen and square versions, so nothing needs to be re-made.',
        ],
      },
      {
        h2: 'Education that earns attention',
        paragraphs: [
          'In healthcare, the content that works is usually the most useful: a clinician explaining a condition in a minute, a clear answer to a question patients keep asking, a calm look at what a procedure involves. We plan these formats with your clinicians, work from your approved wording, and keep the tone considered rather than salesy.',
          'Healthcare advertising rules apply on social too. Some treatments cannot be advertised to the public at all, so we plan content around education, the clinician and the experience, and we recommend your compliance lead reviews it.',
        ],
      },
      {
        h2: 'Organic and paid, planned together',
        paragraphs: [
          'Paid social rewards variety. Our packages include a mix of organic and paid-optimised formats, product close-ups made for ads, and creator videos for skincare, so you have fresh creative to test rather than one hero asset that tires quickly. See our <a href="/skincare-video-production-cost/">packages</a> for what each month includes.',
          'Where it helps, we build recurring series, such as clinician explainers for healthcare or Ingredient Deep-Dive and Founder Perspective for skincare, so your feed has a recognisable shape.',
        ],
      },
    ],
    getList: [
      'Native 9:16 video for Reels, TikTok, Stories and LinkedIn',
      'Clinician-led education and treatment explainers',
      'Product close-up videos made for paid ads',
      'UGC creator videos for skincare, matched to your customer',
      'Series formats that give your feed a recognisable shape',
      'A structured revision round with a 48-hour turnaround',
    ],
    faqs: [
      { q: 'Can healthcare providers advertise treatments on social?', a: 'It depends on the treatment. The ASA and CAP Code set strict rules for healthcare advertising, and prescription-only medicines cannot be advertised to the public. We plan content around education and the clinician, and we recommend checking the current guidance.' },
      { q: 'Do you make content for paid ads as well as organic posts?', a: 'Yes. Our packages include a mix of organic and paid-optimised formats, and product close-ups made specifically for ads.' },
      { q: 'Can you work with our own clinicians or creators?', a: 'Yes. Tell us who you want on camera and we will plan how they fit into the shoot. Our monthly packages also include vetted UGC creators for skincare.' },
      { q: 'How much does social video cost?', a: `It depends on how many clips, platforms and shoot days you need. We quote to the brief; see the ${COST}, then get in touch for a quote.` },
    ],
    related: ['private-clinic-video-production-london', 'skincare-product-video-production', 'skincare-video-production-cost'],
  },

  // ───────────────────────────────────────────────────────── healthcare photography
  {
    slug: 'healthcare-photography-london',
    footerLabel: 'Healthcare photography',
    relLabel: 'Healthcare photography', relTitle: 'Healthcare photography', relText: 'Clinic and hospital interiors, clinician portraits, devices and treatments.',
    crumb: 'Healthcare photography',
    title: 'Healthcare Photography London | Shotwell',
    description: 'Healthcare photography in London: clinic and hospital interiors, clinician portraits, devices and treatment stills, shot alongside your video content.',
    h1: 'Healthcare photography <em>in London</em>',
    h1Plain: 'Healthcare photography in London',
    eyebrow: 'Photography',
    lead: 'Stills for your website, your hospital listings and your press, made by the same studio that makes your video. Shotwell photographs clinics, hospitals, clinicians, devices and treatments in London, with a consistent, considered look across every image.',
    serviceName: 'Healthcare photography', serviceType: 'Healthcare photography',
    photosLabel: 'Selected stills', photos: [photo.practice, photo.device, photo.treatment, photo.portrait, photo.spa, photo.product],
    sections: [
      {
        h2: 'Clinicians and teams',
        paragraphs: [
          'People choose a clinician by looking at them. We make portraits that look like the person: warm, direct and professionally lit, with the setting and clothing agreed in advance. We photograph individual consultants for profile pages and whole teams for practice and hospital websites.',
        ],
      },
      {
        h2: 'Clinics, hospitals and equipment',
        paragraphs: [
          'We photograph consulting rooms, treatment rooms, waiting areas and facilities so they look as clean, calm and well run as they are, and we photograph equipment and devices in use or on their own for your site, brochures and distributors. We follow your site’s rules on privacy and access, and nobody who is identifiable appears without consent.',
        ],
      },
      {
        h2: 'Shot with your video, same day',
        paragraphs: [
          'Stills and film share a set, a look and a crew, so shooting them together saves time and keeps your brand consistent. Our monthly packages include retouched stills alongside the video. See our <a href="/skincare-video-production-cost/">packages</a>, or the pages on <a href="/private-clinic-video-production-london/">private clinics</a> and <a href="/medical-device-video-production-london/">medical devices</a>.',
        ],
      },
    ],
    getList: [
      'Clinician and team portraits for profiles and websites',
      'Consulting room, clinic and hospital interiors',
      'Device and equipment photography',
      'Treatment and in-clinic documentary stills',
      'Careful retouching that keeps people looking natural',
      'Format variants for web, print and social',
    ],
    faqs: [
      { q: 'Can you shoot photography and video on the same day?', a: 'Yes, and we recommend it. It keeps the look consistent and usually costs less than booking two separate shoots.' },
      { q: 'Can you photograph patients?', a: 'Only with their consent and a signed release. Where that is not appropriate, we use staff, consenting volunteers or framing that keeps a patient unidentifiable.' },
      { q: 'Do you photograph devices as well as people and spaces?', a: 'Yes. We photograph devices in a clinical setting and on their own, for your website, brochures and distributors.' },
    ],
    related: ['doctor-consultant-video-production-london', 'private-hospital-video-production-london', 'medical-device-video-production-london'],
  },
]
