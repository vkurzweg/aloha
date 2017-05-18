/**
*
* Bios
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import Subhead from './Subhead';


function Bios() {
  return (
    <div className="container" style={{ paddingTop: '7%' }}>
      <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '2%' }}>Surf Instructors</h3>
      <Subhead>Nick Fowler</Subhead>
      <div className="row" style={{ marginLeft: '10%' }}>
        <div className="col-sm-3">
          <Image cloudName="kurzweg" publicId="nick_watershot" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '5%', margin: '0 auto' }}>Born and raised in Hawaii, Nick was pushed into his first wave by former world surfing champion Fred Hemmings when he was around 5 or 6, and has been in love with the ocean ever since.  Nick surfs daily and has taught countless friends and friends of friends and their friends too over the years. He almost always manages to get them up and riding the very first time they go out.</p>
          <p style={{ fontSize: '16px', paddingTop: '2%', margin: '0 auto', width: '80%' }}>Fluent in <span style={{ color: '#7C4DFF' }}>Spanish</span>, <span style={{ color: '#FF80AB' }}>French</span> and <span style={{ color: '#108EE9' }}>Portuguese</span>, and conversational in <span style={{ color: '#FF9800' }}>Indonesian</span>, Nick frequently gives surf lessons in these languages.</p>
        </div>
      </div>
    </div>
  );
}

Bios.propTypes = {

};

export default Bios;
