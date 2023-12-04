import React from 'react'

import { SlideShow } from 'components'

export const Carousel = ({ images }) => {
  if (images.length === 0) return

  return (
    <div className={`flex aspect-square flex-row`}>
      <SlideShow images={images} />
    </div>
  )
}
