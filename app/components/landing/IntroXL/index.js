/**
*
* IntroCopy
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router';
import Btn from 'components/landing/Btn';
import { Image } from 'cloudinary-react';


function Intro() {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF', fontSize: '38px', marginTop: '-10%' }}><Image cloudName="kurzweg" publicId="aloha-logo" responsive style={{ padding: '1.5%' }} />Aloha Brothers Surf Lessons, est. 2011<Image cloudName="kurzweg" publicId="aloha-logo" responsive style={{ padding: '1.5%' }} /></h3>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <Image cloudName="kurzweg" publicId="stars_yellow-min" responsive alt="stars icon" style={{ display: 'block', margin: '0 auto'}} />
          <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '20px' }}>700+ 5-star reviews</p>
        </div>
        <p style={{ textAlign: 'center', width: '80%', display: 'block', margin: '0 auto', marginTop: '1%', fontSize: '26px' }}>Whether you're a beginner looking to stand up for the first time or already a surfer looking for an experienced instructor to take your skills to the next level, we would love to help! People of all ages and sizes are welcome.</p>
        <hr style={{ width: '50%', display: 'block', margin: '0 auto', color: '#E6E7E8', marginTop: '1%', marginBottom: '1%' }} />
        <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '-2%', fontSize: '20px' }}>Featured in:</p>
        <div style={{ display: 'block', width: '100%', margin: '0 auto', textAlign: 'center', marginTop: '1%' }}>
          <Image cloudName="kurzweg" publicId="latimes-logo-min" responsive style={{ padding: '3%' }} alt="la times" />
          <Image cloudName="kurzweg" publicId="CBS-los-angeles-logo2-min" responsive style={{ padding: '3%' }} alt="cbs los angeles" />
          <Image cloudName="kurzweg" publicId="lamag-min" style={{ padding: '3%' }} alt="la magazine" />
          <Image cloudName="kurzweg" publicId="Huffington-Post-Logo-min" style={{ padding: '3%' }} alt="huffington post" />
          <Image cloudName="kurzweg" publicId="telemundo-min" style={{ padding: '3%' }} alt="telemundo" />
        </div>
        <div style={{ paddingBottom: '2%'}}>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/press" ><Btn>More press</Btn></Link>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {

};

export default Intro;
