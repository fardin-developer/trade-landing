import React, { useEffect, useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: 'https://picsum.photos/200/200?random=1' },
  { url: 'https://picsum.photos/200/200?random=2' },
  { url: 'https://picsum.photos/200/200?random=3' },
];

const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is less than a certain value (for mobile)
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ marginTop: '1px' }}>
      <SimpleImageSlider
        width="100vw"
        height={isMobile ? '55vh' : '40vw'}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default ImageSlider;
