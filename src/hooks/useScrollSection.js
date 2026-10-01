import { useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'projects', 'skills']

function getScrollOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(
    '--header-height'
  )
  const header = parseFloat(raw)
  return (Number.isFinite(header) ? header : 136) + 16
}

/** Stable scroll-spy: active section = last block whose top has passed the offset line. */
export function useScrollSection(setCurrentSection) {
  useEffect(() => {
    let ticking = false

    const update = () => {
      const line = window.scrollY + getScrollOffset()
      let active = 'hero'

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (line >= top) active = id
      }

      setCurrentSection(active)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        update()
        ticking = false
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [setCurrentSection])
}
