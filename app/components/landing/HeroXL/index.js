/**
*
* HeroText
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router';
import Button from './Button';


function Hero() {
  return (
    <div style={{ width: '100%', backgroundColor: 'black', top: '0' }}>
      <div style={{ zIndex: '10', dispay: 'block', margin: '0 auto', width: '100%', position: 'absolute', marginTop: '25%' }}>
        <h1 style={{ fontSize: '82px', fontFamily: 'Lobster', textAlign: 'center', color: '#FF80AB', letterSpacing: '3px', marginBottom: '2%' }}>Let's get you out there</h1>
        <h3 style={{ fontSize: '48px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#6FEAB5', textTransform: 'uppercase', letterSpacing: '3px' }}>Venice Beach surf lessons <br /> starting at $85</h3>
        <Link to="/contact" style={{ textDecoration: 'none' }}><Button>Book a lesson</Button></Link>
      </div>
      <video style={{ backgroundColor: 'black', zIndex: '1', height: '25%', width: '100%', float: 'left', top: '0', padding: 'none' }} loop autoPlay>
        <source src="http://res.cloudinary.com/kurzweg/video/upload/v1494632548/surf_stock.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

Hero.propTypes = {

};

export default Hero;
