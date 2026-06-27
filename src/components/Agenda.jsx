import { AGENDA } from '../data/content.js'

export default function Agenda() {
  return (
    <section id="agenda" className="relative border-b border-line bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-xs text-sky">Agenda</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
            24 hours, two days, one deadline.
          </h2>
          <p className="mt-4 text-paper-dim">
            A rough shape of the weekend. Exact times may shift slightly,
            we'll confirm a final schedule with selected participants.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {AGENDA.map((day) => (
            <div key={day.day}>
              <div className="mb-7 flex items-baseline gap-3">
                <h3 className="font-display text-xl font-semibold text-paper">
                  {day.day}
                </h3>
                <span className="font-mono text-xs text-paper-dim">{day.date}</span>
              </div>

              <ol className="relative border-l border-line pl-6">
                {day.items.map((item) => (
                  <li key={item.time} className="relative pb-7 last:pb-0">
                    <span
                      className={`absolute -left-[29px] top-1 block h-3 w-3 rounded-full border-2 border-ink ${
                        item.emphasis ? 'bg-ember' : 'bg-steel'
                      }`}
                    />
                    <span className="font-mono text-xs text-sky">{item.time}</span>
                    <p
                      className={`mt-1 font-body text-sm sm:text-base ${
                        item.emphasis ? 'font-semibold text-paper' : 'text-paper-dim'
                      }`}
                    >
                      {item.title}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
