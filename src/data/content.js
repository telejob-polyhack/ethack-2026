// Central content for the current ETHack edition.
// Edit this file to update copy, schedule, FAQs, team, and sponsorship tiers
// without touching component markup.

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
]

export const EDITION_2026_LINK = {
  label: '2026 Edition',
  path: '/2026',
}

export const EVENT = {
  name: 'ETHack 2027',
  year: 2027,
  theme: 'Resilient Futures',
  dateLong: '2027 · Dates to be announced',
  dateShort: 'To be announced',
  location: 'ETH Zürich',
  sponsorDeckUrl: '/ethack-2027-sponsorship-deck-v1.pdf',
}

export const STATS = [
  { value: '100', label: 'students selected' },
  { value: '24', label: 'hours, start to finish' },
  { value: '1', label: 'theme: Resilient Futures' },
  { value: '4+', label: 'tracks to build in' },
]

export const TRACKS = [
  {
    title: 'Technology',
    description:
      'Tools and systems that make existing problems easier to solve, from accessibility to civic infrastructure.',
  },
  {
    title: 'Sustainability',
    description:
      'Projects that cut waste, emissions, or resource use, or help people and institutions make greener decisions.',
  },
  {
    title: 'Society',
    description:
      'Solutions for education, health, inclusion, or community resilience, built with the people they serve in mind.',
  },
  {
    title: 'Beyond',
    description:
      "Don't see your idea above? Resilient Futures takes many shapes. Bring the problem you care about and we'll help you scope it.",
  },
]

export const SPONSOR_TIERS = [
  {
    id: 'platinum',
    name: 'Platinum',
    price: 'CHF 10,000',
    earlyBirdPrice: 'CHF 7,000',
    note: 'Limited spots',
    tagline: 'Set the challenge, judge the finals, own the room.',
    style: 'platinum',
    perks: [
      'Set a challenge around your own data, code, or tools',
      'Large logo placement on event material',
      'A booth at the event',
      'Host a talk at the opening ceremony',
      '2 job listings on ETH Get Hired, including a VIP slot',
      'A seat on the jury for the final pitches',
      "Participant resumes, with an expected 90% opt-in",
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 'CHF 5,000',
    earlyBirdPrice: 'CHF 3,500',
    tagline: 'Strong visibility with hands-on access to participants.',
    style: 'gold',
    perks: [
      'Small logo placement on event material',
      'A booth at the event',
      'Host a talk during the event',
      '1 job listing on ETH Get Hired',
    ],
  },
]

// Add the confirmed 2027 schedule here when it is available.
export const AGENDA = []

export const FAQS = [
  {
    question: 'Who can take part?',
    answer:
      "ETHack is open to students from ETH Zürich and the ETH Domain (ETH Zurich, EPFL, Eawag, WSL, Empa and PSI). We select 100 participants from across disciplines, not just computer science, since 'Resilient Futures' needs designers, engineers, scientists, and humanities students working together.",
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'No. Teams need a mix of skills, including design, research, and storytelling. If you can prototype, pitch, or validate an idea, you have a role to play.',
  },
  {
    question: 'How are teams formed?',
    answer:
      'You can apply with a team of up to four, or apply solo and form a team during our team-formation session on the morning of Day 1.',
  },
  {
    question: 'What does it cost to take part?',
    answer:
      'Nothing. Selected participants attend for free. Meals, snacks, and a place to work for 24 hours are covered, thanks to our sponsors.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Your laptop and charger, a student ID, and anything that helps you work and rest comfortably overnight: a layer for the hacking hall, a water bottle, and a sleeping bag or mat if you plan to nap on site.',
  },
  {
    question: 'How are projects judged?',
    answer:
      "On impact, technical execution, and how well the project fits the 'Resilient Futures' theme. A jury of sponsors, faculty, and alumni reviews top teams after the project expo.",
  },
  {
    question: 'Is there a code of conduct?',
    answer:
      'Yes. ETHack follows a standard hackathon code of conduct covering respect, harassment, and fair play. It is sent to every participant before the event and posted on site.',
  },
  {
    question: 'How can my company get involved?',
    answer:
      "Through one of our sponsorship tiers, covered in the Sponsors section above, or by sending mentors and judges for the weekend. Reach out through the Contact section and we'll follow up with details.",
  },
]

export const TEAM = [
  {
    name: 'Luca Ferrari',
    designation: 'Doctoral Student',
    field: 'Environmental Science',
    photo: '/team_luca.png',
  },
  {
    name: 'Angela Ng',
    designation: 'Doctoral Student',
    field: 'Neuroscience',
    photo: '/team_angela.jpg',
  },
  {
    name: 'Michael Wenger',
    designation: 'Doctoral Student',
    field: 'Solid State Physics',
    photo: '/team_michael.jpg',
  },
  {
    name: 'Arnout Devos',
    designation: 'Established Researcher',
    field: 'ETH AI Center',
    photo: '/team_arnout.jpg',
  },
  {
    name: 'Mohid Fayaz Mir',
    designation: 'Doctoral Student',
    field: 'Hydrology',
    photo: '/team_mohid.jpg',
  },
  {
    name: 'Jenestin Anthonipillai',
    designation: 'Doctoral Student',
    field: 'AI and Biomedical Engineering',
    photo: '/team_jenestin.jpg',
  },
]

export const CONTACT = {
  email: 'info@ethack.ch',
  address:
    'ETH Zürich, SOL B6 Sonneggstrasse 33, 8092 Zürich, Switzerland',
}
