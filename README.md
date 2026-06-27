# ETHack 2026 — Website

A single-page React site for ETHack 2026, the "Hack for Good" student
hackathon at ETH Zürich, September 12–13, 2026.

The page is one long scroll with six sections, each addressable as a URL
anchor: `#home`, `#sponsors`, `#agenda`, `#faqs`, `#team`, `#contact`. The
hash in the address bar updates automatically as you scroll, not just when
you click a nav link.

## Stack

- React 18 + Vite
- Tailwind CSS (custom theme: see `tailwind.config.js`)
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/content.js     // ALL editable copy: nav, stats, sponsor tiers,
                       // agenda, FAQs, team, contact info. Start here.
  components/
    Navbar.jsx         // top nav, active-section highlight, mobile menu
    CircuitRail.jsx     // left-edge scroll progress / quick-nav rail
    Home.jsx             // hero + "hack for good" theme + tracks (#home)
    Sponsors.jsx        // Premium / Gold / Community tiers (#sponsors)
    Agenda.jsx           // two-day schedule timeline (#agenda)
    FAQs.jsx              // accordion (#faqs)
    Team.jsx               // organizer grid (#team)
    Contact.jsx           // contact form + info (#contact)
    Footer.jsx
  App.jsx              // assembles sections, owns scroll-spy logic
public/
  logo_colored.png             // the ETHack monogram supplied for the brand
  ethack-2026-sponsorship-deck-v1.pdf   // 
```

## Things to replace before launch

1. **Team section** (`src/data/content.js` → `TEAM`): currently
   placeholder names/roles. Swap in the real organizing team.
2. **Sponsorship deck** (`public/ethack-2026-sponsorship-deck.pdf`): a
   one-page placeholder explaining what should go in the real deck.
3. **Contact form** (`src/components/Contact.jsx`): the form is UI-only.
   Wire `handleSubmit` up to a real endpoint (Formspree, Getform, your own
   backend, etc.) before relying on it.
4. **Contact details, social links, prices/dates**: in `src/data/content.js`,
   under `CONTACT`, `EVENT`, and `SPONSOR_TIERS`.

## Design notes

- Palette and type scale live in `tailwind.config.js` (colors: `ink`,
  `paper`, `sky`, `steel`, `ember`, `gold`) and are derived from the
  blue gradient in the supplied ET monogram.
- The vertical "circuit rail" on the left edge (desktop only) is the
  page's signature element: a trace that fills with the brand gradient as
  you scroll and marks the current section, echoing the act of building
  and wiring something together.
