import { NAV_LINKS } from '../data/content.js'

// Signature element: a circuit trace running down the side of the page.
// It fills with the brand gradient as the visitor scrolls, and each node
// marks a section, echoing the "wiring things together" of a hackathon.
export default function CircuitRail({ activeSection, progress }) {
  return (
    <div
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        <div className="relative h-[280px] w-px bg-line">
          <div
            className="absolute left-0 top-0 w-px bg-brand-gradient-v transition-[height] duration-150"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        <div className="absolute top-0 flex h-[280px] flex-col justify-between">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                type="button"
                aria-hidden="true"
                tabIndex={-1}
                onClick={() => {
                  const section = document.getElementById(link.id)
                  if (section) section.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative -ml-[5px] flex items-center"
              >
                <span
                  className={`block h-[11px] w-[11px] rounded-full border transition-all ${
                    isActive
                      ? 'scale-110 border-sky bg-sky shadow-[0_0_10px_2px_rgba(153,202,213,0.55)]'
                      : 'border-line bg-ink-soft group-hover:border-sky'
                  }`}
                />
                <span
                  className={`eyebrow pointer-events-none absolute left-5 whitespace-nowrap text-[10px] transition-opacity ${
                    isActive ? 'text-sky opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                >
                  {link.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
