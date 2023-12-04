import { Pagination, Slide } from 'components'
import { useState } from 'react'
import { SlideShowNavButton } from './SlideShowNavButton'
import { useWindowSize } from 'hooks/useWindowSize'

export const SlideShow = ({ images, cardWidth }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const { width, isWindowSmall } = useWindowSize()

  const handleSlideShowNav = (direction) => {
    if (direction === 'next') {
      if (activeSlide === images.length - 1) return setActiveSlide(0)
      setActiveSlide((prev) => prev + 1)
    }

    if (direction === 'prev') {
      if (activeSlide === 0) return setActiveSlide(images.length - 1)
      setActiveSlide((prev) => prev - 1)
    }
  }

  const slideShowWidth = `w-[${cardWidth}]`

  const adjustedWidth = isWindowSmall ? width - 64 : width - 128

  return (
    <div
      className={`relative flex flex-row items-center justify-between rounded-lg`}
      style={{
        width: adjustedWidth,
        margin: '.5em',
        marginTop: '0',
        marginBottom: '0',
        padding: '0',
      }}
    >
      {images.map((image, index) => (
        <Slide
          cardWidth={cardWidth}
          key={index}
          image={image === images[activeSlide] ? image : null}
        />
      ))}

      {images.length > 1 && (
        <>
          <SlideShowNavButton
            handleSlideShowNav={handleSlideShowNav}
            direction='prev'
          />
          <SlideShowNavButton
            handleSlideShowNav={handleSlideShowNav}
            direction='next'
          />
        </>
      )}
      <Pagination
        activeSlide={activeSlide}
        total={images.length}
        setActiveSlide={setActiveSlide}
      />
    </div>
  )
}
