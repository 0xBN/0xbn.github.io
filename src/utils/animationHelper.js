let duration = 'duration-700'
let transition = 'transition-all'
let opacityStart = 'opacity-0'
let opacityEnd = 'opacity-100'
let ease = 'ease-in-out'

const heroDelayHelper = {
  0: `delay-[0ms]`,
  1: `delay-[200ms]`,
  2: `delay-[400ms]`,
  3: `delay-[500ms]`,
  4: `delay-[700ms]`,
  5: `delay-[800ms]`,
  6: `delay-[900ms]`,
  7: `delay-[1100ms]`,
  8: `delay-[1200ms]`,
  9: `delay-[1300ms]`,
  10: `delay-[2000ms]`,
  11: `delay-[2200ms]`,
}

export const slideRightAnimation = (condition, delayPosition) => {
  let delay = heroDelayHelper[delayPosition]

  return condition
    ? `${opacityStart} ${transition} ${delay} ${duration} -translate-x-10 ${ease}`
    : `${opacityEnd} ${transition} ${delay} ${duration} translate-x-0 ${ease}`
}

export const opacityAnimation = (condition, delayPosition) => {
  let delay = heroDelayHelper[delayPosition]

  return condition
    ? `${delay} ${duration} ${opacityStart} ${ease} ${transition}`
    : `${delay} ${duration} ${opacityEnd} ${ease} ${transition}`
}

export const slideDownAnimation = (condition, delayPosition) => {
  let delay = heroDelayHelper[delayPosition]

  return condition
    ? `${opacityStart} ${transition} ${delay} ${duration} -translate-y-10 ${ease}`
    : `${opacityEnd} ${transition} ${delay} ${duration} translate-y-0 ${ease}`
}

export const scrollAnimation = (hash) => {
  const id = hash?.startsWith('#') ? hash.slice(1) : hash
  const target = document.getElementById(id)
  if (!target) return

  const headerOffset = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--header-height'
    )
  )
  const offset = Number.isFinite(headerOffset) ? headerOffset + 12 : 144

  const top = target.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

export const noScrollAnimation = (link, newTab = false) => {
  if (newTab) {
    window.open(link)
  } else {
    window.location.href = link
  }
}

export const animateSectionOptionsIn = {
  y: 0,
  opacity: 1,
  transition: {
    type: 'spring',
    duration: 1,
    bounce: 0.3,
  },
}

export const animateSectionOptionsOut = {
  y: '10vh',
  opacity: 0,
}

export const animateHeaderOptions = (i) => ({
  opacity: 1,
  y: 0,
  ease: 'easeInOut',
  transition: {
    delay: i * 0.2,
    duration: 1,
    type: 'spring',
    bounce: 0.25,
  },
})

export const animateHeroButtonsOptions = (i) => ({
  opacity: 1,
  x: 0,
  ease: 'easeInOut',
  transition: {
    delay: i * 0.2 + 1,
    duration: 1,
    type: 'spring',
    bounce: 0.25,
  },
})

export const animateHeroTextOptions = (i) => ({
  opacity: 1,
  y: 0,
  ease: 'easeInOut',
  transition: {
    delay: i * 0.05 + 0.5,
    duration: 1,
    type: 'spring',
    bounce: 0.25,
  },
})
