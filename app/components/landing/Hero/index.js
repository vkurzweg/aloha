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
      <div style={{ zIndex: '10', dispay: 'block', margin: '0 auto', width: '100%', position: 'absolute', marginTop: '30%', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '64px', fontFamily: 'Lobster', textAlign: 'center', color: '#FF80AB', letterSpacing: '3px', marginBottom: '2%' }}>Let's get you out there</h1>
        <h2 style={{ fontSize: '44px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#7EEDC6', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>Venice Beach <br /> surf lessons</h2>
        <hr style={{ borderColor: '#7EEDC6', fontWeight: 'bold', height: '3px', width: '15%', textAlign: 'center', marginTop: '-.5%' }} />
        <h2 style={{ fontSize: '44px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#7EEDC6', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>$85+</h2>
        <Link to="/contact" style={{ textDecoration: 'none' }}><Button>Sign Up</Button></Link>
      </div>
      <video style={{ backgroundColor: 'black', zIndex: '1', marginTop: '5%', width: '100%', float: 'left', top: '0', padding: 'none', minHeight: '650px' }} loop autoPlay>
        <source src="http://res.cloudinary.com/kurzweg/video/upload/v1494632548/surf_stock.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

Hero.propTypes = {

};

export default Hero;

