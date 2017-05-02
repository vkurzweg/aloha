/**
*
* Meet
*
*/

import React from 'react';
// import styled from 'styled-components';
import Waves from 'assets/icons/waves_pink.png';
import Waves2 from 'assets/icons/waves_pink2.png';
import Snap from 'assets/images/frontside_snap.png';
import { Link } from 'react-router';
import Chevron from 'assets/icons/chevron.png';


function Meet() {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#FF80AB', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#4BF1C3' }}><img src={Waves2} role="presentation" style={{ padding: '2%' }} />Meet Nick<img src={Waves} role="presentation" style={{ padding: '2%' }} /></h2>
      <div style={{ display: 'inline-flex' }}>
        <img src={Snap} alt="surfing in venice, ca" style={{ width: '50%', marginLeft: '5%' }} />
        <p style={{ padding: '5%' }}>Nick was pushed into his first wave by former world surfing champion Fred Hemmings when he was around 5 or 6, and has been in love with the ocean ever since. Fluent in Spanish, French, and Portuguese, Nick frequently gives surf lessons in these languages. Nick surfs daily and has taught countless friends and friends of friends and their friends too over the years. He almost always manages to get them up and riding the very first time they go out.</p>
      </div>
      <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/instructors" ><h4 style={{ textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '3%' }}>All Surf Instructors<img src={Chevron} role="presentation" /></h4></Link>
    </div>
  );
}

Meet.propTypes = {

};

export default Meet;
