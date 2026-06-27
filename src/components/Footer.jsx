import { NAV_LINKS, EVENT } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div className="flex items-center gap-2">
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