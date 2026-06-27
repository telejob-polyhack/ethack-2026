import { TEAM } from '../data/content.js'

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Team() {
  return (
    <section id="team" className="relative border-b border-line bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-xs text-sky">Team</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Run by students, for students.
          </h2>
          <p className="mt-4 text-paper-dim">
            ETHack is organized entirely by a volunteer student team at ETH
            Zürich.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <div key={`${member.name}-${i}`} className="group text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-gradient font-display text-xl font-semibold text-ink transition-transform group-hover:scale-105 sm:h-28 sm:w-28">
                {initials(member.name) || 'ET'}
              </div>
              <p className="mt-4 font-display text-sm font-semibold text-paper sm:text-base">
                {member.name}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-paper-dim">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
