import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { NAV_LINKS } from './data/content.js'

import Navbar from './components/Navbar.jsx'
import CircuitRail from './components/CircuitRail.jsx'
import Home from './components/Home.jsx'
import Sponsors from './components/Sponsors.jsx'
import Agenda from './components/Agenda.jsx'
import FAQs from './components/FAQs.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import EventPhotos from './pages/EventPhotos.jsx'
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

function HomePage() {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('home')
  const [progress, setProgress] = useState(0)

  /*
   * If somebody arrives from /event-photos and the URL contains a
   * homepage hash such as /#sponsors, scroll to that section after
   * the homepage has mounted.
   */
  useEffect(() => {
    if (!location.hash) {
      return
    }

    const sectionId = location.hash.replace('#', '')

    const timeout = window.setTimeout(() => {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 50)

    return () => window.clearTimeout(timeout)
  }, [location.hash])

  /*
   * Keep the active navbar item, circuit rail, and URL hash in sync
   * with whichever homepage section is currently in view.
   */
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter(Boolean)

    if (sections.length === 0) {
      return undefined
    }

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

  /*
   * Drive the circuit rail fill amount from the overall homepage
   * scroll position.
   */
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
        </main>

        <Footer />
      </div>
    </div>
  )
}

function EventPhotosPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [])

  return (
    <div className="min-h-screen bg-ink font-body text-paper">
      <Navbar activeSection="event-photos" />

      <main className="pt-14">
        <EventPhotos />
      </main>

      <Footer />
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-5 font-body text-paper">
      <div className="text-center">
        <p className="eyebrow text-xs text-sky">404</p>

        <h1 className="mt-3 font-display text-4xl font-semibold">
          Page not found.
        </h1>

        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-gradient px-6 py-3 font-display text-sm font-semibold text-ink"
        >
          Back to ETHack
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/event-photos" element={<EventPhotosPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}