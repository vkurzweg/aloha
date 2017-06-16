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
    <div style={{ backgroundColor: '#ECECEC' }}>
      <MediaQuery minWidth={849}>
        <h3 style={{ marginTop: '0', textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><Image cloudName="kurzweg" publicId="aloha_logo" width="100" quality="auto" responsive style={{ padding: '2%', width: '100px' }} />Aloha Brothers Surf Lessons, est. 2011<Image className="item" cloudName="kurzweg" publicId="aloha_logo" width="100" responsive quality="auto" style={{ padding: '2%', width: '100px' }} /></h3>
      </MediaQuery>
      <MediaQuery maxWidth={848}>
        <h3 style={{ marginTop: '0', textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><Image cloudName="kurzweg" publicId="aloha_logo" width="100" quality="auto" responsive style={{ padding: '2%', marginRight: '5%', width: '50px', marginBottom: '1%' }} />Est. 2011<Image className="item" cloudName="kurzweg" publicId="aloha_logo" width="100" responsive quality="auto" role="presentation" style={{ padding: '2%', marginLeft: '5%', width: '50px', marginBottom: '1%' }} /></h3>
      </MediaQuery>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <Image cloudName="kurzweg" publicId="stars_yellow-min" width="100" quality="auto" responsive alt="stars icon" style={{ display: 'block', margin: '0 auto', marginTop: '3%'}} />
          <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px' }}>500+ 5-star reviews</p>
        </div>
        <div style={{ display: 'block', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginTop: '5%', marginBottom: '2%' }}>
            <a style={{ marginLeft: '-10px', display: 'inline-block' }} href="https://www.yelp.com/biz/aloha-brothers-surf-lessons-venice" target="blank"><Image cloudName="kurzweg" publicId="yelp-min" width="50" quality="auto" responsive alt="yelp icon" style={{ paddingLeft: '15px' }} /></a>
            <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.tripadvisor.com/Attraction_Review-g32655-d6592254-Reviews-Aloha_Brothers_Surf_Lessons-Los_Angeles_California.html" target="blank"><Image cloudName="kurzweg" publicId="tripadvisor-min" width="50" quality="auto" responsive alt="tripadvisor icon" style={{ paddingLeft: '15px' }} /></a>
            <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="" target="blank"><Image cloudName="kurzweg" publicId="google" responsive alt="google icon" style={{ paddingLeft: '15px' }} /></a>
            <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.thumbtack.com/ca/venice/surf-lessons/surf-instructor" target="blank"><Image cloudName="kurzweg" publicId="thumbtack-min" width="50" quality="auto" responsive alt="thumbtack icon" style={{ paddingLeft: '15px' }} /></a>
            <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.facebook.com/AlohaBrothersSurfLessons" target="blank"><Image cloudName="kurzweg" publicId="facebook-min" width="50" quality="auto" responsive alt="facebook icon" style={{ paddingLeft: '15px' }} /></a>
            <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.instagram.com/nickfowler9/" target="blank"><Image cloudName="kurzweg" publicId="instagram-min" width="50" quality="auto" responsive alt="instagram icon" style={{ paddingLeft: '15px' }} /></a>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: '3%' }}>
            <div className="col-xs-3">
              <Image cloudName="kurzweg" publicId="palmtree_green1-min" width="100" responsive role="presentation" style={{ marginTop: '35%', marginLeft: '-20%' }} />
            </div>
            <div className="col-xs-8">
              <p style={{ marginTop: '5%', textAlign: 'justify', width: '100%', display: 'block', margin: '0 auto', marginBottom: '5%', fontSize: '16px' }}>Whether you're a beginner looking to stand up for the first time or already a surfer looking to take your skills to the next level, we would love to help! People of all ages and sizes are welcome.</p>
            </div>
          </div>
        </div>

        <div className="container" style={{ backgroundColor: '#FF80AB', width: '100%' }}>
          <div className="row">
            <div className="col-sm-6">
              <h5 style={{ marginTop: '5%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>All lessons last 90 minutes</h5>
            </div>
            <div className="col-sm-6">
              <h5 style={{ marginBottom: '5%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>Surfboard & wetsuit included</h5>
            </div>
          </div>
        </div>

        <hr style={{ width: '50%', display: 'block', margin: '0 auto', color: '#E6E7E8', marginTop: '3%', marginBottom: '3%' }} />
        <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '-2%' }}>Featured in:</p>
        <div style={{ display: 'block', width: '100%', margin: '0 auto', textAlign: 'center' }}>
          <Image cloudName="kurzweg" publicId="latimes-logo-min" responsive style={{ padding: '3%' }} alt="la times" />
          <Image cloudName="kurzweg" publicId="CBS-los-angeles-logo2-min" width="80" responsive style={{ padding: '3%' }} alt="cbs los angeles" />
          <Image cloudName="kurzweg" publicId="lamag-min" width="100" responsive style={{ padding: '3%' }} alt="la magazine" />
          <Image cloudName="kurzweg" publicId="Huffington-Post-Logo-min" width="100" responsive style={{ padding: '3%' }} alt="huffington post" />
          <Image cloudName="kurzweg" publicId="telemundo-min" width="100" responsive style={{ padding: '3%' }} alt="telemundo" />
        </div>
        <div style={{ marginTop: '3%', paddingBottom: '5%' }}>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/press" ><Btn>More press</Btn></Link>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {

};

export default Intro;
