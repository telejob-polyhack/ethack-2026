import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  NAV_LINKS,
  EDITION_2026_LINK,
  EVENT,
} from '../data/content.js'
import { goToSection } from '../lib/navigation.js'

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const isHomepage = location.pathname === '/'

  function handleHomepageSection(event, sectionId) {
    event.preventDefault()

    if (isHomepage) {
      goToSection(sectionId)
      return
    }

    if (sectionId === 'home') {
      navigate('/')
    } else {
      navigate(`/#${sectionId}`)
    }
  }

  return (
    <footer className="border-t border-line bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="ETHack 2026 home"
        >
          <div className="h-5 w-[68px] shrink-0">
            <img
              src="/logo_colored.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="font-display text-sm font-semibold text-paper">
            <span className="text-sky">/26</span> · {EVENT.location}
          </span>
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={
                  link.id === 'home'
                    ? '/'
                    : `/#${link.id}`
                }
                onClick={(event) =>
                  handleHomepageSection(event, link.id)
                }
                className="font-mono text-xs uppercase tracking-wide text-paper-dim transition-colors hover:text-sky"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <Link
              to={EDITION_2026_LINK.path}
              className="font-mono text-xs uppercase tracking-wide text-paper-dim transition-colors hover:text-sky"
            >
              {EDITION_2026_LINK.label}
            </Link>
          </li>
        </ul>

        <p className="font-mono text-xs text-paper-dim">
          &copy; {new Date().getFullYear()} ETHack. Built by students.
        </p>
      </div>
    </footer>
  )
}
