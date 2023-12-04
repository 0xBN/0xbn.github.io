import React from 'react'

import { SlideShow } from 'components'

export const Carousel = ({ images, cardWidth }) => {
  if (images.length === 0) return

  const oldSettings = `md:max-w-[400px]`
  const newSettings = cardWidth

  const slideshowWidth = cardWidth === 'md:max-w-5xl' ? '64rem' : '48rem'

  return (
    <div
      className={`flex aspect-square flex-row ${false && oldSettings} ${
        true && newSettings
      }`}
    >
      <SlideShow images={images} cardWidth={slideshowWidth} />
    </div>
  )
}
