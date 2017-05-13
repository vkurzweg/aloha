/**
*
* Meet
*
*/

import React from 'react';
// import styled from 'styled-components';
import Waves from 'assets/icons/waves_pink.png';
import Waves2 from 'assets/icons/waves_pink2.png';
import { Link } from 'react-router';
import Chevron from 'assets/icons/chevron.png';
import { Image } from 'cloudinary-react';


function Meet() {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <h2 style={{ textAlign: 'center', color: '#FF80AB', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#7C4DFF' }}><img src={Waves2} role="presentation" style={{ padding: '2%' }} />Meet the Owner<img src={Waves} role="presentation" style={{ padding: '2%' }} /></h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Image className="item" cloudName="kurzweg" publicId="nick_q82h51" width="auto" responsive style={{ paddingTop: '5%'}} />
          </div>
          <div className="col-sm-6" style={{ paddingRight: '3%' }}>
            <p style={{ fontSize: '16px', width: '80%', paddingTop: '5%', margin: '0 auto' }}>Born and raised in Hawaii, Nick was pushed into his first wave by former world surfing champion Fred Hemmings when he was around 5 or 6, and has been in love with the ocean ever since.  Nick surfs daily and has taught countless friends and friends of friends and their friends too over the years. He almost always manages to get them up and riding the very first time they go out.</p>
            <p style={{ fontSize: '16px', paddingTop: '2%', margin: '0 auto', width: '80%' }}>Fluent in <span style={{ color: '#7C4DFF' }}>Spanish</span>, <span style={{ color: '#FF80AB' }}>French</span> and <span style={{ color: '#108EE9' }}>Portuguese</span>, and conversational in <span style={{ color: '#FF9800' }}>Indonesian</span>, Nick frequently gives surf lessons in these languages.</p>
          </div>
        </div>
      </div>
      <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/instructors" ><h4 style={{ textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '3%', paddingBottom: '3%' }}>All Surf Instructors<img src={Chevron} role="presentation" /></h4></Link>
    </div>
  );
}

Meet.propTypes = {

};

export default Meet;
