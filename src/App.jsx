import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS } from './data/content.js'
import Navbar from './components/Navbar.jsx'
import CircuitRail from './components/CircuitRail.jsx'
import Home from './components/Home.jsx'
import Sponsors from './components/Sponsors.jsx'
import Agenda from './components/Agenda.jsx'
import FAQs from './components/FAQs.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function updateSectionHash(id) {
  const nextHash = id === 'home' ? '' : `#${id}`
  if (window.location.hash !== nextHash) {
    const base = window.location.pathname + window.location.search
    window.history.replaceState(null, '', nextHash ? `${base}${nextHash}` : base)
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const activeSectionRef = useRef('home')

  // Keep the active nav item, the circuit rail, and the URL hash in sync
  // with whichever section is currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      Boolean,
    )

    if (sections.length === 0) return undefined

    function activateSection(id) {
      if (activeSectionRef.current === id) return
      activeSectionRef.current = id
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
      window.addEventListener('scroll', handleLegacyScrollSpy, { passive: true })
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
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Drive the circuit rail through a CSS variable so scrolling does not
  // re-render the React tree on every frame.
  useEffect(() => {
    let frame = null

    function handleScroll() {
      if (frame !== null) return

      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0
        document.documentElement.style.setProperty(
          '--scroll-progress',
          String(Math.min(1, Math.max(0, ratio))),
        )
        frame = null
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="min-h-screen bg-ink font-body text-paper">
      <Navbar activeSection={activeSection} />
      <CircuitRail activeSection={activeSection} />
      {/* The circuit rail is fixed near the left edge and only shows at the
          lg breakpoint, so reserve some room for it there specifically —
          otherwise it crowds page content on screens just past 1024px,
          before the centered max-w-7xl container's own margins grow large
          enough to clear it on their own. */}
      <div className="lg:pl-28">
        <main>
          <Home />
          <Sponsors />
          <Agenda />
          <FAQs />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
