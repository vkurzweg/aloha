/**
*
* HeroText
*
*/

import React from 'react';
// import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router';
import Button from './Button';
import styled from 'styled-components';

const StyledImage = styled.div`
  background-image: url('http://res.cloudinary.com/kurzweg/image/upload/v1510814149/sunset_surf.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 520px;
  margin-top: -9%;
`;


function Hero() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };
  return (
    <div style={{ width: '100%', backgroundColor: 'black', top: '0' }}>
      <div style={{ zIndex: '10', dispay: 'block', margin: '0 auto', width: '100%', position: 'absolute' }}>
        <h4 style={{ fontFamily: 'Josefin Sans', textAlign: 'center', color: '#F3BB58', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold', marginTop: '86%', fontSize: '26px' }}>Venice Beach <br /> surf lessons</h4>
        <hr style={{ color: '#F3BB58', width: '33%', textAlign: 'center', marginTop: '-.5%' }} />
        <h4 style={{ fontFamily: 'Josefin Sans', textAlign: 'center', color: '#F3BB58', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold', fontSize: '28px', marginTop: '-2%' }}>$85+</h4>
        <Link to="/contact" style={{ textDecoration: 'none' }}><Button>Book a lesson</Button></Link>
      </div>
      <StyledImage />
    </div>
  );
}

Hero.propTypes = {

};

export default Hero;

// <h1 style={{ fontSize: '30px', fontFamily: 'Lobster', textAlign: 'center', color: '#FF80AB', letterSpacing: '2px' }}>Let's get you out there</h1>
  // <Slider {...settings}>
  //       <div style={{ width: '100%' }}>
  //         <Image cloudName="kurzweg" publicId="portugal1" width="250" responsive quality="auto" style={{ height: '200px', width: '100%', paddingTop: '6%', display: 'block', margin: '0 auto', marginTop: '8%' }} />
  //       </div>
  //       <div style={{ width: '100%' }}>
  //         <Image cloudName="kurzweg" publicId="portugal2" width="250" responsive quality="auto" style={{ height: '200px', width: '100%', paddingTop: '6%', display: 'block', margin: '0 auto', marginTop: '8%' }} />
  //       </div>
  //       <div style={{ width: '100%' }}>
  //         <Image cloudName="kurzweg" publicId="portugal3" width="250" responsive quality="auto" style={{ height: '200px', width: '100%', paddingTop: '6%', display: 'block', margin: '0 auto', marginTop: '8%' }} />
  //       </div>
  //     </Slider>
