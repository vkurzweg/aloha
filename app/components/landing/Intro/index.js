/**
*
* IntroCopy
*
*/

import React from 'react';
// import styled from 'styled-components';
import CBS from 'assets/logos/CBS-los-angeles-logo2.jpg';
import HuffPo from 'assets/logos/Huffington-Post-Logo.jpg';
import LAMag from 'assets/logos/lamag.jpg';
import LAT from 'assets/logos/latimes-logo.jpg';
import Tele from 'assets/logos/telemundo.jpg';
import Stars from 'assets/icons/stars_yellow.jpg';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import Logo from 'assets/logos/aloha_logo.jpg';
import Btn from 'components/landing/Btn';
import { Image } from 'cloudinary-react';


function Intro() {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <MediaQuery minWidth={849}>
        <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><Image className="item" cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '2%', width: '100px' }} />Aloha Brothers Surf Lessons, est. 2011<Image className="item" cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '2%', width: '100px' }} /></h3>
      </MediaQuery>
      <MediaQuery maxWidth={848}>
        <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><Image className="item" cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '1%', marginRight: '5%', width: '100px' }} />Est. 2011<Image className="item" cloudName="kurzweg" publicId="aloha_logo" responsive role="presentation" style={{ padding: '1%', marginLeft: '5%', width: '100px' }} /></h3>
      </MediaQuery>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', width: '80%', display: 'block', margin: '0 auto', marginTop: '5%', fontSize: '16px' }}>Whether you're a beginner looking to stand up for the first time or already a surfer looking for an experienced instructor to take your skills to the next level, we would love to help! People of all ages and sizes are welcome.</p>
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
        <div style={{ marginTop: '3%', paddingBottom: '5%'}}>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/press" ><Btn>All press</Btn></Link>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {

};

export default Intro;
