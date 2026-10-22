export default function Sponsors2026() {
  return (
    <section id="sponsors" className="border-b border-line bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow text-xs text-sky">2026 Sponsors</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
          Thank you for making ETHack 2026 possible.
        </h2>
        <p className="mt-4 max-w-2xl text-paper-dim">
          Our sponsors supported a weekend of learning, building, and hacking for good.
        </p>
        {/* 2026 sponsors */}
        <div className="mt-14">
          {/* Platinum sponsors */}
          <div>
            <p className="eyebrow text-xs text-paper-dim">
              Platinum Sponsors
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex h-40 w-full items-center justify-center rounded-2xl border border-paper-dim/30 bg-white px-8 py-4 sm:w-[640px]">
                <img
                  src="/2026/sponsors/citadel.png"
                  alt="Citadel"
                  className="h-auto w-full max-w-[540px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Other sponsors */}
          <div className="mt-12">
            <p className="eyebrow text-xs text-paper-dim">
              Other Sponsors
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex min-h-28 w-full items-center justify-center rounded-2xl border border-line bg-white p-6 sm:w-64">
                <img
                  src="/2026/sponsors/focus_water.svg"
                  alt="Focus Water"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>

              <div className="flex min-h-28 w-full items-center justify-center rounded-2xl border border-line bg-white p-6 sm:w-64">
                <img
                  src="/2026/sponsors/alba.png"
                  alt="ALBA"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
