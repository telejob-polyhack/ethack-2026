import { useEffect, useState } from 'react'
import { NAV_LINKS } from './data/content.js'
import Navbar from './components/Navbar.jsx'
import CircuitRail from './components/CircuitRail.jsx'
import Home from './components/Home.jsx'
import Sponsors from './components/Sponsors.jsx'
import Agenda from './components/Agenda.jsx'
import FAQs from './components/FAQs.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import EventPhotos from './components/EventPhotos.jsx'
import Footer from './components/Footer.jsx'

function updateSectionHash(id) {
  const nextHash = id === 'home' ? '' : `#${id}`

  if (window.location.hash !== nextHash) {
    const base = window.location.pathname + window.location.search

    window.history.replaceState(
      null,
      '',
      nextHash ? `${base}${nextHash}` : base,
    )
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [progress, setProgress] = useState(0)

  // Keep the active nav item, the circuit rail, and the URL hash in sync
  // with whichever main navigation section is currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter(Boolean)

    if (sections.length === 0) return undefined

    function activateSection(id) {
      setActiveSection(id)
      updateSectionHash(id)
    }

    if (!('IntersectionObserver' in window)) {
      function handleLegacyScrollSpy() {
        const referenceY = window.innerHeight * 0.4
        let currentSection = sections[0]

        sections.forEach((section) => {
          if (section.getBoundingClientRect().top <= referenceY) {
            currentSection = section
          }
        })

        activateSection(currentSection.id)
      }

      handleLegacyScrollSpy()

      window.addEventListener('scroll', handleLegacyScrollSpy, {
        passive: true,
      })

      window.addEventListener('resize', handleLegacyScrollSpy)

      return () => {
        window.removeEventListener('scroll', handleLegacyScrollSpy)
        window.removeEventListener('resize', handleLegacyScrollSpy)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activateSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Drive the circuit rail's fill amount off overall scroll position.
  useEffect(() => {
    function handleScroll() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight

      const ratio =
        scrollable > 0 ? window.scrollY / scrollable : 0

      setProgress(Math.min(1, Math.max(0, ratio)))
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-ink font-body text-paper">
      <Navbar activeSection={activeSection} />

      <CircuitRail
        activeSection={activeSection}
        progress={progress}
      />

      <div className="lg:pl-28">
        <main>
          <Home />
          <Sponsors />
          <Agenda />
          <FAQs />
          <Team />
          <Contact />

          {/* Final section of the website */}
          <EventPhotos />
        </main>

        <Footer />
      </div>
    </div>
  )
}