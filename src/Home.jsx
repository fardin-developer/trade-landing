import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import AnounceMent from './component/AnounceMent';
import Cources from './component/Cources'
import Footer from './component/Footer';
import ImageSlider from 'react-simple-image-slider';

const images = [
  { url: 'https://picsum.photos/200/200' },
  { url: 'https://picsum.photos/200/200' },
  { url: 'https://picsum.photos/200/200' },

];

const Home = () => {
  return (
    <>

    
  
    <div style={{marginTop:"1px"}}>
      <SimpleImageSlider
        width="100vw" // Set the width to 100vw
        height="50vw"
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>

 <AnounceMent/>
 <Cources/>
 <Footer/>
    </>
  );
};

export default Home;
