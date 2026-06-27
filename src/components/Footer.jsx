import { NAV_LINKS, EVENT } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="" className="h-6 w-6" aria-hidden="true" />
          <span className="font-display text-sm font-semibold text-paper">
            {EVENT.name} · {EVENT.location}
          </span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-mono text-xs uppercase tracking-wide text-paper-dim hover:text-sky"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-paper-dim">
          &copy; {new Date().getFullYear()} ETHack. Built by students.
        </p>
      </div>
    </footer>
  )
}
