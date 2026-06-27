import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '../data/content.js'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="relative border-b border-line bg-ink py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <p className="eyebrow text-xs text-sky">FAQs</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
          Good to know before you apply.
        </h2>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-paper sm:text-lg">
                    {faq.question}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-sky transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                  style={{ display: 'grid' }}
                >
                  <p className="overflow-hidden pb-5 pr-8 text-sm leading-relaxed text-paper-dim sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
