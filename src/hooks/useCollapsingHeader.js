import { useEffect, useRef, useState } from 'react'

const STRIPE_EASE = 'cubic-bezier(0.32, 0.72, 0, 1)'

/** Scroll down → compact; scroll up or near top → expanded */
export function useCollapsingHeader({
  topThreshold = 48,
  directionDelta = 6,
} = {}) {
  const [compact, setCompact] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const y = window.scrollY

        if (y <= topThreshold) {
          setCompact(false)
        } else if (y > lastY.current + directionDelta) {
          setCompact(true)
        } else if (y < lastY.current - directionDelta) {
          setCompact(false)
        }

        lastY.current = y
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [topThreshold, directionDelta])

  return { compact, ease: STRIPE_EASE }
}
