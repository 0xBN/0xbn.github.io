import React from 'react';

import { SlideShow } from 'components';

export const Carousel = ({ images, cardWidth }) => {
  if (images.length === 0) return;

  console.log(cardWidth);

  const oldSettings = `md:max-w-[400px]`;
  const newSettings = cardWidth;
  // const newSettings = `md:w-[64rem]`;
  // 3xl = 48rem
  // 5xl = 64rem

  return (
    <div
      className={`flex aspect-square flex-row p-2 ${
        false && oldSettings
      } max-w-5xl ${true && newSettings}`}
    >
      <SlideShow
        images={images}
        cardWidth={`${cardWidth === 'md:max-w-5xl' ? '64rem' : '48rem'}`}
      />
    </div>
  );
};
