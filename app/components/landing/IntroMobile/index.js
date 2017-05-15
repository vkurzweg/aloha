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
import MediaQuery from 'react-responsive';
import Yelp from 'assets/icons/yelp.png';
import Tripadvisor from 'assets/icons/tripadvisor.png';
import Thumbtack from 'assets/icons/thumbtack.png';
import Facebook from 'assets/icons/facebook.png';
import Instagram from 'assets/icons/instagram.png';
import Palm from 'assets/icons/palmtree_green1.png';
import Palm2 from 'assets/icons/palmtree_green2.png';
import Logo from 'assets/logos/aloha_logo.png';
import Btn from 'components/landing/Btn';


function Intro() {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <MediaQuery minWidth={849}>
        <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><img src={Logo} role="presentation" style={{ padding: '2%', width: '40px' }} />Aloha Brothers Surf Lessons, est. 2011<img src={Logo} role="presentation" style={{ padding: '2%', width: '40px' }} /></h3>
      </MediaQuery>
      <MediaQuery maxWidth={848}>
        <h4 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><img src={Logo} role="presentation" style={{ padding: '1%', marginRight: '5%', width: '40px' }} />Est. 2011<img src={Logo} role="presentation" style={{ padding: '1%', marginLeft: '5%', width: '40px' }} /></h4>
      </MediaQuery>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <img src={Stars} alt="stars icon" style={{ display: 'block', margin: '0 auto', marginTop: '3%'}} />
          <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px' }}>500+ 5-star reviews</p>
        </div>
        <div style={{ display: 'block', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', textAlign: 'center', width: '70%', marginTop: '5%', marginBottom: '2%' }}>
            <a style={{ paddingLeft: '15%', display: 'inline-block' }} href="https://www.yelp.com/biz/aloha-brothers-surf-lessons-venice" target="blank"><img src={Yelp} alt="yelp icon" /></a>
            <a style={{ paddingLeft: '15%', display: 'inline-block' }} href="https://www.tripadvisor.com/Attraction_Review-g32655-d6592254-Reviews-Aloha_Brothers_Surf_Lessons-Los_Angeles_California.html" target="blank"><img src={Tripadvisor} alt="tripadvisor icon" style={{ paddingLeft: '15%' }} /></a>
            <a style={{ paddingLeft: '15%', display: 'inline-block' }} href="https://www.thumbtack.com/ca/venice/surf-lessons/surf-instructor" target="blank"><img src={Thumbtack} alt="thumbtack icon" style={{ paddingLeft: '15%' }} /></a>
            <a style={{ paddingLeft: '15%', display: 'inline-block' }} href="https://www.facebook.com/AlohaBrothersSurfLessons" target="blank"><img src={Facebook} alt="facebook icon" style={{ paddingLeft: '15%' }} /></a>
            <a style={{ paddingLeft: '15%', display: 'inline-block' }} href="https://www.instagram.com/nickfowler9/" target="blank"><img src={Instagram} alt="instagram icon" style={{ paddingLeft: '15%' }} /></a>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: '3%' }}>
            <div className="col-xs-3">
              <img src={Palm} role="presentation" style={{ marginTop: '60%' }} />
            </div>
            <div className="col-xs-8">
              <p style={{ marginTop: '5%', textAlign: 'justify', width: '100%', display: 'block', margin: '0 auto', marginBottom: '5%', fontSize: '16px' }}>Whether you're a beginner looking to stand up for the first time or already a surfer looking to take your skills to the next level, we would love to help! People of all ages and sizes are welcome.</p>
            </div>
          </div>
        </div>

        <div className="container" style={{ backgroundColor: '#FF80AB', width: '100%' }}>
          <div className="row">
            <div className="col-sm-6">
              <h5 style={{ marginTop: '5%', padding: '2%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>All lessons last 90 minutes</h5>
            </div>
            <div className="col-sm-6">
              <h5 style={{ marginBottom: '5%', padding: '2%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>Surfboard & wetsuit included</h5>
            </div>
          </div>
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
        <div style={{ marginTop: '3%', paddingBottom: '5%' }}>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/press" ><Btn>All press</Btn></Link>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {

};

export default Intro;
