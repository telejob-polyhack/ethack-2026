import { Check, Download, Mail } from 'lucide-react'
import { SPONSOR_TIERS, EVENT } from '../data/content.js'

const TIER_STYLES = {
  premium: {
    card: 'border-paper-dim/30 bg-[#11181f] shadow-[0_0_0_1px_rgba(212,175,106,0.18),0_30px_60px_-30px_rgba(0,0,0,0.6)]',
    badge: 'bg-gold-gradient text-ink',
    heading: 'text-gold-soft',
    check: 'text-gold',
  },
  gold: {
    card: 'border-line bg-ink-soft',
    badge: 'bg-brand-gradient text-ink',
    heading: 'text-paper',
    check: 'text-sky',
  },
  community: {
    card: 'border-line/70 bg-ink-soft/40',
    badge: 'border border-line text-paper-dim',
    heading: 'text-paper',
    check: 'text-ember',
  },
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative border-b border-line bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-xs text-sky">Sponsors</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Put your company in front of 100 builders.
          </h2>
          <p className="mt-4 text-paper-dim">
            ETHack runs on sponsor support: food, prizes, swag, and the
            mentors who help teams ship. In exchange, you get direct access
            to a curated room of ETH talent for an entire weekend.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SPONSOR_TIERS.map((tier) => {
            const style = TIER_STYLES[tier.style]
            return (
              <div
                key={tier.id}
                className={`flex flex-col rounded-2xl border p-7 ${style.card}`}
              >
                <span
                  className={`eyebrow inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] ${style.badge}`}
                >
                  {tier.name}
                </span>
                <h3 className={`mt-4 font-display text-xl font-semibold ${style.heading}`}>
                  {tier.tagline}
                </h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-paper-dim">
                      <Check size={16} className={`mt-0.5 shrink-0 ${style.check}`} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-line py-2.5 font-display text-sm font-semibold text-paper transition-colors hover:border-sky hover:text-sky"
                >
                  <Mail size={15} />
                  Discuss this tier
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-ink-soft/50 p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-paper-dim">
            Want the full breakdown, with pricing and past sponsor results?
          </p>
          <a
            href={EVENT.sponsorDeckUrl}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-gradient px-5 py-2.5 font-display text-sm font-semibold text-ink"
          >
            <Download size={15} />
            Download sponsorship deck
          </a>
        </div>
      </div>
    </section>
  )
}
