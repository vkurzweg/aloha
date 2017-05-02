/**
*
* IntroCopy
*
*/

import React from 'react';
// import styled from 'styled-components';
import Waves from 'assets/icons/waves_yellow.png';
import Waves2 from 'assets/icons/waves_yellow2.png';
import CBS from 'assets/logos/CBS-los-angeles-logo2.png';
import HuffPo from 'assets/logos/Huffington-Post-Logo.png';
import LAMag from 'assets/logos/lamag.png';
import LAT from 'assets/logos/latimes-logo.png';
import Tele from 'assets/logos/telemundo.png';
import Stars from 'assets/icons/stars_yellow.png';
import { Link } from 'react-router';
import Chevron from 'assets/icons/chevron.png';

function Intro() {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <h2 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><img src={Waves2} role="presentation" style={{ padding: '2%' }} />Aloha Brothers Surf Lessons, est. 2011<img src={Waves} role="presentation" style={{ padding: '2%' }} /></h2>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', width: '70%', display: 'block', margin: '0 auto', marginTop: '5%', fontSize: '16px' }}>Whether you're a beginner looking to stand up for the first time or already a surfer looking for an experienced instructor to take your skills to the next level, we would love to help! People of all ages and sizes are welcome.</p>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <img src={Stars} alt="stars icon" style={{ display: 'block', margin: '0 auto', marginTop: '3%'}} />
          <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px' }}>500+ 5-star reviews</p>
        </div>
        <hr style={{ width: '50%', display: 'block', margin: '0 auto', color: '#E6E7E8', marginTop: '3%', marginBottom: '3%' }} />
        <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '-2%' }}>Featured in:</p>
        <div style={{ display: 'block', width: '100%', margin: '0 auto', textAlign: 'center' }}>
          <img src={LAT} style={{ padding: '3%' }} alt="la times" />
          <img src={CBS} style={{ padding: '3%' }} alt="cbs los angeles" />
          <img src={LAMag} style={{ padding: '3%' }} alt="la magazine" />
          <img src={HuffPo} style={{ padding: '3%' }} alt="huffington post" />
          <img src={Tele} style={{ padding: '3%' }} alt="telemundo" />
        </div>
        <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/press" ><h4 style={{ textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '2%', paddingBottom: '2%' }}>All press<img src={Chevron} role="presentation" /></h4></Link>
      </div>
    </div>
  );
}

Intro.propTypes = {

};

export default Intro;
