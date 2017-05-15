/**
*
* HeroText
*
*/

import React from 'react';
// import styled from 'styled-components';
import Button from './Button';


function Hero() {
  return (
    <div style={{ width: '100%', backgroundColor: 'black', top: '0' }}>
      <div style={{ zIndex: '10', dispay: 'block', margin: '0 auto', width: '100%', position: 'absolute', marginTop: '17%' }}>
        <h1 style={{ fontSize: '30px', fontFamily: 'Lobster', textAlign: 'center', color: '#FF80AB', letterSpacing: '2px' }}>Get out there</h1>
        <h4 style={{ fontFamily: 'Josefin Sans', textAlign: 'center', color: '#4BF1C3', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold', marginTop: '3%' }}>Venice Beach surf lessons starting at $85</h4>
        <Button>Book a lesson</Button>
      </div>
      <video style={{ backgroundColor: 'black', zIndex: '1', height: '100%', width: '100%', float: 'left', top: '0', padding: 'none' }} loop autoPlay>
        <source src="http://res.cloudinary.com/kurzweg/video/upload/v1494632548/surf_stock.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

Hero.propTypes = {

};

export default Hero;
