/**
*
* HeroText
*
*/

import React from 'react';
// import styled from 'styled-components';
import Button from './Button';
import Slider from 'react-slick';
import 'slick-carousel';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router';



function Hero() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };
  return (
    <div style={{ width: '100%', backgroundColor: 'black', top: '0' }}>
      <div style={{ zIndex: '10', dispay: 'block', margin: '0 auto', width: '100%', position: 'absolute', marginTop: '17%' }}>
        <h1 style={{ fontSize: '30px', fontFamily: 'Lobster', textAlign: 'center', color: '#FF80AB', letterSpacing: '2px' }}>Let's get you out there</h1>
        <h4 style={{ fontFamily: 'Josefin Sans', textAlign: 'center', color: '#ECECEC', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold', marginTop: '3%' }}>Venice Beach surf lessons starting at $85</h4>
        <Link to="/contact"><Button>Book a lesson</Button></Link>
      </div>
      <Slider {...settings}>
        <div style={{ width: '100%' }}>
          <Image cloudName="kurzweg" publicId="portugal1" width="250" responsive quality="auto" style={{ height: '200px', width: '100%', paddingTop: '6%', display: 'block', margin: '0 auto', marginTop: '8%' }} />
        </div>
        <div style={{ width: '100%' }}>
          <Image cloudName="kurzweg" publicId="portugal2" width="250" responsive quality="auto" style={{ height: '200px', width: '100%', paddingTop: '6%', display: 'block', margin: '0 auto', marginTop: '8%' }} />
        </div>
        <div style={{ width: '100%' }}>
          <Image cloudName="kurzweg" publicId="portugal3" width="250" responsive quality="auto" style={{ height: '200px', width: '100%', paddingTop: '6%', display: 'block', margin: '0 auto', marginTop: '8%' }} />
        </div>
      </Slider>
    </div>
  );
}

Hero.propTypes = {

};

export default Hero;
