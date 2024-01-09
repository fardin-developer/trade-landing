// ImageSlider.js

import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import "./imageSlider.css"


const ImageSlider = ({ images }) => {
    const images = [
        { url: 'https://picsum.photos/200/200' },
        { url: 'https://picsum.photos/200/200' },
        { url: 'https://picsum.photos/200/200' },
      ];
  return (
    <div style={{ marginTop: '1px' }}>
      <SimpleImageSlider
        width="100vw"
        height="50vw"
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default ImageSlider;
