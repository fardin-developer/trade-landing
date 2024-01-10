import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import AnounceMent from './component/AnounceMent';
import Cources from './component/Cources'
import Footer from './component/Footer';
import ImageSlider from './component/ImageSlider';

const images = [
  { url: 'https://picsum.photos/200/200' },
  { url: 'https://picsum.photos/200/200' },
  { url: 'https://picsum.photos/200/200' },

];

const Home = () => {
  return (
    <>



      <ImageSlider />

      <AnounceMent />
      <Cources />
      <Footer />
    </>
  );
};

export default Home;
