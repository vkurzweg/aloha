/**
*
* IntroCopy
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import Btn from 'components/landing/Btn';
import { Image } from 'cloudinary-react';

const Div = styled.div`
  padding: 2%;
  background: -moz-linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* ff3.6+ */
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(124,77,255,1)), color-stop(100%, rgba(179,188,245,1))); /* safari4+,chrome */
  background: -webkit-linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* opera 11.10+ */
  background: -ms-linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* ie10+ */
  background: linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* w3c */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#B3BCF5', endColorstr='#7C4DFF',GradientType=1 ); /* ie6-9 */  `;


function Intro() {
  return (
    <div style={{ backgroundColor: '#ECECEC', marginTop: '-20%' }}>
      <Div>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <Image cloudName="kurzweg" publicId="stars_yellow-min" responsive alt="stars icon" style={{ display: 'block', margin: '0 auto', marginTop: '1%'}} />
          <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px' }}>700+ 5-star reviews</p>
        </div>
        <p style={{ textAlign: 'center', width: '80%', display: 'block', margin: '0 auto', paddingBottom: '10%', fontSize: '22px', padding: '2%' }}>Whether you're a beginner looking to stand up for the first time or already a surfer looking for an experienced instructor to take your skills to the next level, we would love to help! People of all ages and sizes are welcome.</p>
      </Div>
      <div className="container" style={{ backgroundColor: '#FF80AB', width: '100%', padding: '0' }}>
        <div className="row">
          <div className="col-sm-6" >
            <h4 style={{ marginTop: '1%', padding: '3%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>All lessons last 90 minutes</h4>
          </div>
          <div className="col-sm-6" >
            <h4 style={{ marginTop: '1%', padding: '3%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>Surfboard & wetsuit included</h4>
          </div>
        </div>
      </div>
      <div>
        <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '-2%', paddingTop: '3%' }}>Featured in:</p>
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

// <MediaQuery minWidth={849}>
//   <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><Image cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '2%', width: '100px' }} />Aloha Brothers Surf Lessons, est. 2011<Image cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '2%', width: '100px' }} /></h3>
// </MediaQuery>
// <MediaQuery maxWidth={848}>
//   <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><Image cloudName="kurzweg" publicId="aloha_logo" responsive style={{ padding: '1%', marginRight: '5%', width: '100px' }} />Est. 2011<Image cloudName="kurzweg" publicId="aloha_logo" responsive role="presentation" style={{ padding: '1%', marginLeft: '5%', width: '100px' }} /></h3>
// </MediaQuery>
