import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  NAV_LINKS,
  EDITION_2026_LINK,
  EVENT,
} from '../data/content.js'
import { goToSection } from '../lib/navigation.js'

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const isHomepage = location.pathname === '/'
  const isEdition2026Page = location.pathname === EDITION_2026_LINK.path
  const editionYear = isEdition2026Page ? 2026 : EVENT.year

  function handleHomepageSection(event, sectionId) {
    event.preventDefault()
    setOpen(false)

    /*
     * If we are already on the homepage, use the site's existing
     * smooth-scroll behavior.
     */
    if (isHomepage) {
      goToSection(sectionId)
      return
    }

    /*
     * If we are on /2026, return to the homepage with the
     * correct hash. HomePage will scroll to it after mounting.
     */
    if (sectionId === 'home') {
      navigate('/')
    } else {
      navigate(`/#${sectionId}`)
    }
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          onClick={(event) => {
            if (isHomepage) {
              event.preventDefault()
              goToSection('home')
            }

            setOpen(false)
          }}
          className="flex shrink-0 items-center gap-1.5"
          aria-label={`ETHack ${editionYear}, back to home`}
        >
          <img
            src="/logo_colored.png"
            alt=""
            aria-hidden="true"
            className="h-6 w-auto sm:h-7"
          />

          <span className="font-display text-lg font-semibold tracking-tight text-sky">
            /{String(editionYear).slice(-2)}
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 md:flex">
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
                className={`eyebrow text-[11px] transition-colors ${
                  isHomepage && activeSection === link.id
                    ? 'text-sky'
                    : 'text-paper-dim hover:text-paper'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <Link
              to={EDITION_2026_LINK.path}
              className={`eyebrow text-[11px] transition-colors ${
                isEdition2026Page
                  ? 'text-sky'
                  : 'text-paper-dim hover:text-paper'
              }`}
            >
              {EDITION_2026_LINK.label}
            </Link>
          </li>
        </ul>

        {!isEdition2026Page && <button type="button" disabled title="Applications are not open yet"
          className="hidden rounded-full bg-brand-gradient px-5 py-2 font-display text-sm font-semibold text-ink shadow-lg shadow-steel/20 cursor-not-allowed opacity-60 md:inline-block"
        >
          Apply to hack
        </button>}

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-paper md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
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
                  className={`block rounded-md px-2 py-2.5 font-body text-base ${
                    isHomepage && activeSection === link.id
                      ? 'text-sky'
                      : 'text-paper-dim hover:text-paper'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <Link
                to={EDITION_2026_LINK.path}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2.5 font-body text-base ${
                  isEdition2026Page
                    ? 'text-sky'
                    : 'text-paper-dim hover:text-paper'
                }`}
              >
                {EDITION_2026_LINK.label}
              </Link>
            </li>

            {!isEdition2026Page && <li className="pt-2">
              <button type="button" disabled title="Applications are not open yet"
                className="block w-full cursor-not-allowed rounded-full opacity-60 bg-brand-gradient px-5 py-2.5 text-center font-display text-sm font-semibold text-ink"
              >
                Apply to hack
              </button>
            </li>}
          </ul>
        </div>
      )}
    </header>
  )
}
