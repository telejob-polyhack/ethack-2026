import { Link } from 'react-router-dom'
import { EDITION_2026, TEAM_2026 } from '../data/edition2026.js'
import Sponsors2026 from '../components/Sponsors2026.jsx'
import Team from '../components/Team.jsx'
import EventPhotos from './EventPhotos.jsx'

export default function Edition2026() {
  return (
    <>
      <section className="relative border-b border-line bg-ink pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link to="/" className="font-mono text-xs uppercase tracking-wide text-sky hover:text-paper">
            ← Back to ETHack
          </Link>
          <p className="eyebrow mt-10 text-xs text-sky">The 2026 edition</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-paper sm:text-6xl">
            {EDITION_2026.name}
          </h1>
          <p className="mt-5 font-mono text-sm text-sky">
            {EDITION_2026.date} · {EDITION_2026.location}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-dim">
            The 2026 theme was "{EDITION_2026.theme}". Relive the moments, meet the team,
            and celebrate the sponsors who made it possible.
          </p>
          <nav aria-label="2026 edition sections" className="mt-8 flex flex-wrap gap-3">
            {[['sponsors', 'Sponsors'], ['photos', 'Event photos'], ['team', 'Organizing team']].map(([id, label]) => (
              <a key={id} href={'#' + id} className="rounded-full border border-line px-5 py-2.5 font-display text-sm text-paper transition-colors hover:border-sky hover:text-sky">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <Sponsors2026 />
      <EventPhotos />
      <Team members={TEAM_2026} archived />
    </>
  )
}
