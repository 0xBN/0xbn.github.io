import React from 'react'
import { SvgAndLabel } from 'components'
import { scrollAnimation, noScrollAnimation } from 'utils'

export const Button = ({ label, svg, link, newTab, smoothScroll }) => {
  const handleClick = () => {
    if (newTab) {
      window.open(link)
    } else if (smoothScroll) {
      smoothScroll ? scrollAnimation(link) : noScrollAnimation(link)
    } else {
      window.location.href = link
    }
  }

  return (
    <button
      onClick={handleClick}
      className='flex rounded-md  bg-slate-300 px-2 py-1 font-bold hover:bg-slate-100 dark:bg-slate-800 dark:text-white md:px-2  md:py-1 md:text-3xl dark:md:hover:bg-slate-600'
    >
      <SvgAndLabel
        customSize='w-5 md:w-8'
        customAlignment='flex w-full items-center justify-center gap-2'
        label={label}
        svg={svg}
      />
    </button>
  )
}
