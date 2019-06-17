import React, { useState } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const Carousel = props => {
  const [index, setIndex] = useState(0);

  const { images } = props;
  return (
    <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage src={image} />
      ))}
    </Gallery>
  );
};

export default Carousel;
