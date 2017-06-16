/**
*
* IntroCopy
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import Btn from 'components/landing/Btn';
import { Image } from 'cloudinary-react';


function Intro() {
  return (
    <div style={{ backgroundColor: '#ECECEC', marginTop: '-20%' }}>
      <MediaQuery minWidth={849}>
        <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><Image cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '2%', width: '100px' }} />Aloha Brothers Surf Lessons, est. 2011<Image cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '2%', width: '100px' }} /></h3>
      </MediaQuery>
      <MediaQuery maxWidth={848}>
        <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><Image cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '1%', marginRight: '5%', width: '100px' }} />Est. 2011<Image cloudName="kurzweg" publicId="aloha_logo" responsive role="presentation" style={{ padding: '1%', marginLeft: '5%', width: '100px' }} /></h3>
      </MediaQuery>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <Image cloudName="kurzweg" publicId="stars_yellow-min" responsive alt="stars icon" style={{ display: 'block', margin: '0 auto', marginTop: '1%'}} />
          <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px' }}>500+ 5-star reviews</p>
        </div>
        <p style={{ textAlign: 'center', width: '80%', display: 'block', margin: '0 auto', marginTop: '2%', fontSize: '16px' }}>Whether you're a beginner looking to stand up for the first time or already a surfer looking for an experienced instructor to take your skills to the next level, we would love to help! People of all ages and sizes are welcome.</p>
        <hr style={{ width: '50%', display: 'block', margin: '0 auto', color: '#E6E7E8', marginTop: '1%', marginBottom: '1%' }} />
        <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '-2%' }}>Featured in:</p>
        <div style={{ display: 'block', width: '100%', margin: '0 auto', textAlign: 'center' }}>
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
