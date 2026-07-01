import { ArrowRight } from 'lucide-react'
import { EVENT, STATS } from '../data/content.js'

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[480px] w-[480px]"
        style={{
          background: 'radial-gradient(circle, rgba(77,129,167,0.20) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[380px] w-[380px]"
        style={{
          background: 'radial-gradient(circle, rgba(215,122,87,0.10) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow text-xs text-sky">
              {EVENT.location} · {EVENT.dateLong}
            </p>

            <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-paper text-balance sm:text-6xl lg:text-[4.2rem]">
              Hack for{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                good.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-balance font-body text-base leading-relaxed text-paper-dim sm:text-lg">
              Hackathons are invention marathons: programmers, designers,
              builders, and creative minds learning, building, and sharing
              ideas over one intense weekend. ETHack brings 100 students to
              ETH Zürich to turn ideas into prototypes that address real
              problems in technology, sustainability, society, and beyond.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={EVENT.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-display text-sm font-semibold text-ink shadow-lg shadow-steel/25 transition-transform hover:scale-[1.03]"
              >
                Apply to hack
                <ArrowRight size={16} />
              </a>
              <a
                href="#sponsors"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:border-sky hover:text-sky"
              >
                Become a sponsor
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-l border-line pl-4">
                  <dt className="font-display text-3xl font-semibold text-paper">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 font-mono text-[11px] uppercase tracking-wide text-paper-dim">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden justify-self-center lg:flex">
            <div className="w-72 animate-floatSlow sm:w-80">
              <img
                src="/logo_white.png"
                alt="ETHack 2026"
                className="h-auto w-full drop-shadow-[0_0_60px_rgba(77,129,167,0.35)]"
              />
            </div>
          </div>
        </div>

        <div className="mt-24" id="about-theme">
          <p className="eyebrow text-xs text-ember">The theme</p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-paper sm:text-3xl">
            Under "hack for good," every team tackles a real problem.
          </h2>
          <p className="mt-4 max-w-2xl text-paper-dim">
            Over one weekend, teams turn ideas into working prototypes,
            collaborate across disciplines, and present to a jury that
            awards prizes to the most promising and impactful creations.
          </p>
        </div>
      </div>
    </section>
  )
}