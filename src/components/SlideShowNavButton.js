import React from 'react'
import { RightChevronSvg, LeftChevronSvg } from 'svgs'

export const SlideShowNavButton = ({ handleSlideShowNav, direction }) => {
  return (
    <button
      data-next-slide
      className='z-[5] h-11 w-11 rounded-full bg-black/20 fill-white active:bg-black md:h-11 md:w-11  md:hover:bg-black/40 md:hover:fill-white'
      onClick={() => {
        handleSlideShowNav(direction)
      }}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: direction === 'next' ? 'auto' : '0',
        right: direction === 'next' ? '0' : 'auto',
      }}
    >
      <div className='pointer-events-none'>
        {direction === 'next' ? <RightChevronSvg /> : <LeftChevronSvg />}
      </div>
    </button>
  )
}
