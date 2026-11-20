// Navigation data shared by the landing pages (scripts/seo/template.mjs) and the React home page (src/App.jsx).
// Pure data only: this file is bundled into the home page, so keep it small and free of Node-only code.
// A link has either a `slug` (a landing page) or an `anchor` (a section of the home page).

export const FOOTER_COLUMNS = [
  {
    title: 'Healthcare',
    links: [
      { slug: 'private-healthcare-video-production-london', label: 'Private healthcare' },
      { slug: 'private-clinic-video-production-london', label: 'Private clinics' },
      { slug: 'private-hospital-video-production-london', label: 'Private hospitals' },
      { slug: 'doctor-consultant-video-production-london', label: 'Doctors & consultants' },
      { slug: 'medical-device-video-production-london', label: 'Medical devices' },
    ],
  },
  {
    title: 'Skincare & wellness',
    links: [
      { slug: 'skincare-video-production-london', label: 'Skincare brands' },
      { slug: 'aesthetic-clinic-video-production-london', label: 'Aesthetic clinics' },
      { slug: 'spa-wellness-video-production-london', label: 'Spas & wellness' },
      { slug: 'skincare-product-video-production', label: 'Product & ingredient video' },
    ],
  },
  {
    title: 'What we make',
    links: [
      { slug: 'healthcare-social-media-video-production', label: 'Social media video' },
      { slug: 'interview-testimonial-filming-london', label: 'Interviews & testimonials' },
      { slug: 'healthcare-photography-london', label: 'Healthcare photography' },
      { slug: 'skincare-photography-london', label: 'Skincare photography' },
      { slug: 'video-photography-packages', label: 'Packages' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { anchor: 'work', label: 'Our work' },
      { slug: 'harley-street-video-production', label: 'Harley Street' },
      { anchor: 'about', label: 'About' },
      { anchor: 'contact', label: 'Contact' },
    ],
  },
]

// "Made for healthcare and skincare" section on the home page.
export const SPECIALISMS = {
  who: [
    { slug: 'private-clinic-video-production-london', name: 'Private clinics', desc: 'Brand films, clinician introductions and treatment explainers.' },
    { slug: 'private-hospital-video-production-london', name: 'Private hospitals', desc: 'Facility films, patient information and recruitment content.' },
    { slug: 'medical-device-video-production-london', name: 'Medical devices', desc: 'Product films, clinician demonstrations and 3D visualisation.' },
    { slug: 'doctor-consultant-video-production-london', name: 'Doctors & consultants', desc: 'Introduction films, patient education and profile photography.' },
    { slug: 'skincare-video-production-london', name: 'Skincare brands', desc: 'Product films, ingredient stories and ads.' },
    { slug: 'spa-wellness-video-production-london', name: 'Spas & wellness', desc: 'Atmosphere, treatments and spaces filmed to make people book.' },
  ],
  what: [
    { slug: 'private-healthcare-video-production-london', name: 'Private healthcare video', desc: 'Films for clinics, hospitals, doctors and device brands.' },
    { slug: 'healthcare-social-media-video-production', name: 'Social media video', desc: 'Vertical video for Instagram, TikTok and LinkedIn.' },
    { slug: 'interview-testimonial-filming-london', name: 'Interviews & testimonials', desc: 'Founder stories, doctor-led content and testimonials.' },
    { slug: 'skincare-product-video-production', name: 'Product & ingredient video', desc: 'Texture close-ups, ingredient stories and 3D visualisation.' },
    { slug: 'healthcare-photography-london', name: 'Healthcare photography', desc: 'Clinic interiors, clinician portraits, devices and treatments.' },
    { slug: 'harley-street-video-production', name: 'Harley Street', desc: 'Video and photography for Harley Street and Marylebone practices.' },
  ],
}
