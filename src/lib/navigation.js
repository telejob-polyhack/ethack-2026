// Shared helper for in-page nav links. Scrolls to the target section and
// updates the URL — but for "home" specifically, it clears the hash
// entirely instead of leaving "#home" in the address bar.
export function goToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({ behavior: 'smooth' })

  const base = window.location.pathname + window.location.search
  const url = id === 'home' ? base : `${base}#${id}`
  window.history.pushState(null, '', url)
}