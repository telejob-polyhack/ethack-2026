import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, EVENT } from '../data/content.js'

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="ETHack 2026, back to top"
        >
          <img src="/logo.svg" alt="" className="h-8 w-8" aria-hidden="true" />
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            ETHack<span className="text-sky">/</span>26
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`eyebrow text-[11px] transition-colors ${
                  activeSection === link.id
                    ? 'text-sky'
                    : 'text-paper-dim hover:text-paper'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={EVENT.applyUrl}
          className="hidden rounded-full bg-brand-gradient px-5 py-2 font-display text-sm font-semibold text-ink shadow-lg shadow-steel/20 transition-transform hover:scale-[1.03] md:inline-block"
        >
          Apply to hack
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-paper md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-2.5 font-body text-base ${
                    activeSection === link.id
                      ? 'text-sky'
                      : 'text-paper-dim hover:text-paper'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={EVENT.applyUrl}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand-gradient px-5 py-2.5 text-center font-display text-sm font-semibold text-ink"
              >
                Apply to hack
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
