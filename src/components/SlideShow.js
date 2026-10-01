import { Pagination, Slide } from 'components'
import { useState, useRef, useLayoutEffect } from 'react'
import { SlideShowNavButton } from './SlideShowNavButton'

export const SlideShow = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const containerRef = useRef(null)
  const [frameWidth, setFrameWidth] = useState(null)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => {
      const w = el.clientWidth
      if (w > 0) setFrameWidth(Math.max(w - 16, 200))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

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

  const activeImage = images[activeSlide]

  return (
    <div
      ref={containerRef}
      className='relative mx-auto w-full max-w-md rounded-lg'
      style={{
        width: frameWidth ? `${frameWidth}px` : '100%',
        minHeight: frameWidth ? `${frameWidth}px` : '16rem',
      }}
    >
      <div className='relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800/50'>
        {activeImage ? <Slide image={activeImage} /> : null}

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
      </div>
      <Pagination
        activeSlide={activeSlide}
        total={images.length}
        setActiveSlide={setActiveSlide}
      />
    </div>
  )
}
