/**
*
* Meet
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router';
import { Image } from 'cloudinary-react';
import Btn from 'components/landing/Btn';

function Meet() {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <h3 style={{ textAlign: 'center', color: '#FFC233', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF', padding: '2%' }}>Meet the Owner</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Image className="item" cloudName="kurzweg" publicId="nick" width="400" quality="auto" responsive style={{ paddingTop: '5%'}} />
          </div>
          <div className="col-sm-6" style={{ paddingRight: '3%' }}>
            <p style={{ fontSize: '18px', width: '80%', paddingTop: '5%', margin: '0 auto' }}>Born and raised in Hawaii, Nick was pushed into his first wave by former world surfing champion Fred Hemmings when he was around 5 or 6, and has been in love with the ocean ever since.  Nick surfs daily and has taught countless friends and friends of friends and their friends too over the years. He almost always manages to get them up and riding the very first time they go out.</p>
            <p style={{ fontSize: '18px', paddingTop: '2%', margin: '0 auto', width: '80%' }}>Fluent in <span style={{ color: '#7C4DFF' }}>Spanish</span>, <span style={{ color: '#FF80AB' }}>French</span>, <span style={{ color: '#108EE9' }}>Portuguese</span>, and conversational in <span style={{ color: '#FF9800' }}>Indonesian</span>, Nick frequently gives surf lessons in these languages.</p>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: '5%', marginTop: '3%' }}>
        <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/instructors" ><Btn>All Surf Instructors</Btn></Link>
      </div>
    </div>
  );
}

Meet.propTypes = {

};

export default Meet;
