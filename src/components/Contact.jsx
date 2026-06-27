import { useState } from 'react'
import { Mail, MapPin, Instagram, Linkedin, Send } from 'lucide-react'
import { CONTACT } from '../data/content.js'

// The form below is presentational. Wire the onSubmit handler up to a
// service like Formspree, Getform, or your own backend before launch.
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', topic: 'Applying as a hacker', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow text-xs text-sky">Contact</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
          Apply, sponsor, or just say hi.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="space-y-8">
            <div>
              <p className="eyebrow text-[11px] text-paper-dim">Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-2 flex items-center gap-2 font-display text-lg text-paper hover:text-sky"
              >
                <Mail size={18} className="text-sky" />
                {CONTACT.email}
              </a>
            </div>

            <div>
              <p className="eyebrow text-[11px] text-paper-dim">Address</p>
              <p className="mt-2 flex items-start gap-2 text-paper-dim">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sky" />
                {CONTACT.address}
              </p>
            </div>

            <div>
              <p className="eyebrow text-[11px] text-paper-dim">Follow along</p>
              <div className="mt-3 flex gap-3">
                <a
                  href={CONTACT.instagram}
                  className="rounded-full border border-line p-2.5 text-paper-dim transition-colors hover:border-sky hover:text-sky"
                  aria-label="ETHack on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={CONTACT.linkedin}
                  className="rounded-full border border-line p-2.5 text-paper-dim transition-colors hover:border-sky hover:text-sky"
                  aria-label="ETHack on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-ink-soft/50 p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <p className="font-display text-xl font-semibold text-paper">
                  Message sent.
                </p>
                <p className="mt-2 max-w-sm text-sm text-paper-dim">
                  Thanks for reaching out. We read every message and reply
                  from {CONTACT.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow text-[11px] text-paper-dim">Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-line bg-ink px-3.5 py-2.5 text-paper outline-none focus:border-sky"
                      placeholder="Jane Hacker"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-[11px] text-paper-dim">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-line bg-ink px-3.5 py-2.5 text-paper outline-none focus:border-sky"
                      placeholder="jane@university.ch"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="eyebrow text-[11px] text-paper-dim">I'm reaching out about</span>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-line bg-ink px-3.5 py-2.5 text-paper outline-none focus:border-sky"
                  >
                    <option>Applying as a hacker</option>
                    <option>Sponsorship</option>
                    <option>Mentoring or judging</option>
                    <option>Press</option>
                    <option>Something else</option>
                  </select>
                </label>

                <label className="block">
                  <span className="eyebrow text-[11px] text-paper-dim">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-line bg-ink px-3.5 py-2.5 text-paper outline-none focus:border-sky"
                    placeholder="Tell us a bit about why you're reaching out."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-display text-sm font-semibold text-ink"
                >
                  Send message
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
