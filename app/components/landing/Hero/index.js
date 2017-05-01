/**
*
* HeroText
*
*/

import React from 'react';
// import styled from 'styled-components';
import Palm1 from 'assets/icons/palmtree_yellow1.png';
import Palm2 from 'assets/icons/palmtree_yellow2.png';
import Surf from 'assets/surf_stock.mp4';
import Button from './Button';


function Hero() {
  return (
    <div style={{ width: '100%', backgroundColor: 'black', top: '0' }}>
      <div style={{ zIndex: '10', dispay: 'block', margin: '0 auto', width: '100%', position: 'absolute', marginTop: '12%' }}>
        <h1 style={{ fontSize: '40px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#FFC233', textTransform: 'uppercase', letterSpacing: '5px' }}><img src={Palm1} role="presentation" /> Surf in Venice Beach <img src={Palm2} role="presentation" /></h1>
        <h3 style={{ marginTop: '-2%', fontSize: '24px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#FFC233', textTransform: 'uppercase', letterSpacing: '3px' }}>Lessons starting at $85</h3>
        <Button className="btn btn-default">Get Out There</Button>
      </div>
      <video style={{ backgroundColor: 'black', zIndex: '1', height: '30%', width: '100%', float: 'left', top: '0', padding: 'none' }} loop autoPlay>
        <source src={Surf} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

Hero.propTypes = {

};

export default Hero;
