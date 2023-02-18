import { Pagination, Slide } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { SlideShowNavButton } from './SlideShowNavButton';

export const SlideShow = ({ images, cardWidth }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(images.length);

  const handleSlideShowNav = (direction) => {
    if (direction === 'next') {
      if (activeSlide === images.length - 1) return setActiveSlide(0);
      setActiveSlide((prev) => prev + 1);
    }

    if (direction === 'prev') {
      if (activeSlide === 0) return setActiveSlide(images.length - 1);
      setActiveSlide((prev) => prev - 1);
    }
  };

  return (
    <div className='relative flex w-full flex-row items-center justify-between '>
      {images.map((image) => (
        <Slide
          cardWidth={cardWidth}
          key={nanoid()}
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
  );
};
