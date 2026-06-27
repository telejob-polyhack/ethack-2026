// Central content for the ETHack 2026 site.
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

export const EVENT = {
  name: 'ETHack 2026',
  theme: 'Hack for Good',
  dateLong: 'September 12–13, 2026',
  dateShort: 'Sep 12–13',
  location: 'ETH Zürich',
  applyUrl: '#contact',
  sponsorDeckUrl: '/ethack-2026-sponsorship-deck-v1.pdf',
}

export const STATS = [
  { value: '100', label: 'students selected' },
  { value: '24', label: 'hours, start to finish' },
  { value: '1', label: 'theme: hack for good' },
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
      "Don't see your idea above? Hack for good takes many shapes. Bring the problem you care about and we'll help you scope it.",
  },
]

// Tiers, pricing, and perks below match the official sponsorship deck
// (ethack-2026-sponsorship-deck.pdf-v1.pdf, "Sponsorship Packages" page).
// Keep this in sync if the deck changes.
export const SPONSOR_TIERS = [
  {
    id: 'platinum',
    name: 'Platinum',
    price: 'CHF 10,000',
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

export const AGENDA = [
  {
    day: 'Day 1',
    date: 'Saturday, September 12',
    items: [
      { time: '08:00', title: 'Registration & breakfast' },
      { time: '09:30', title: 'Opening ceremony' },
      { time: '10:30', title: 'Team formation & ideation' },
      { time: '11:30', title: 'Hacking begins', emphasis: true },
      { time: '13:00', title: 'Lunch' },
      { time: '16:00', title: 'Sponsor workshops & tech talks' },
      { time: '19:00', title: 'Dinner' },
      { time: '22:00', title: 'Mentor office hours' },
      { time: '00:00', title: 'Midnight snack' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Sunday, September 13',
    items: [
      { time: '06:00', title: 'Early breakfast for the night owls' },
      { time: '09:00', title: 'Final-stretch coffee & breakfast' },
      { time: '11:30', title: 'Hacking ends, submissions close', emphasis: true },
      { time: '12:00', title: 'Lunch & project expo' },
      { time: '13:30', title: 'Judging' },
      { time: '15:30', title: 'Top-team presentations' },
      { time: '16:30', title: 'Awards ceremony', emphasis: true },
      { time: '17:30', title: 'Closing & networking' },
    ],
  },
]

export const FAQS = [
  {
    question: 'Who can take part?',
    answer:
      "ETHack is open to students from ETH Zürich and other Swiss and international universities. We select 100 participants from across disciplines, not just computer science, since 'hack for good' needs designers, engineers, scientists, and humanities students working together.",
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
      "Nothing. Selected participants attend for free. Meals, snacks, and a place to work for 24 hours are covered, thanks to our sponsors.",
  },
  {
    question: 'What should I bring?',
    answer:
      'Your laptop and charger, a student ID, and anything that helps you work and rest comfortably overnight: a layer for the hacking hall, a water bottle, and a sleeping bag or mat if you plan to nap on site.',
  },
  {
    question: 'How are projects judged?',
    answer:
      "On impact, technical execution, and how well the project fits the 'hack for good' theme. A jury of sponsors, faculty, and alumni reviews top teams after the project expo.",
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

// Placeholder organizing team. Replace names, roles, and photos with the
// real ETHack 2026 team before publishing.
export const TEAM = [
  { name: 'Add your name', role: 'Co-President', photo: null },
  { name: 'Add your name', role: 'Co-President', photo: null },
  { name: 'Add your name', role: 'Sponsorship Lead', photo: null },
  { name: 'Add your name', role: 'Logistics Lead', photo: null },
  { name: 'Add your name', role: 'Tech & Platform Lead', photo: null },
  { name: 'Add your name', role: 'Marketing Lead', photo: null },
  { name: 'Add your name', role: 'Participant Experience Lead', photo: null },
  { name: 'Add your name', role: 'Design Lead', photo: null },
]

export const CONTACT = {
  email: 'team@ethack.ch',
  instagram: 'https://instagram.com/ethack',
  linkedin: 'https://linkedin.com/company/ethack',
  address: 'ETH Zürich, Rämistrasse 101, 8092 Zürich, Switzerland',
}