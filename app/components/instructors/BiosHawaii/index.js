/**
*
* Bios
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import Header from './Header';


function Bios() {
  return (
    <div className="container" style={{ paddingTop: '7%' }}>
      <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '2%' }}>Surf Instructors - O'ahu</h3>
      <Header>Jeff</Header>
      <div className="row" style={{ marginLeft: '10%' }}>
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="jeff" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '3%', margin: '0 auto' }}>Jeff has been surfing on O'ahu for 27 years and knows the island and all her surf spots. Through his teenage years he surfed competitively. He has always had a great love for the ocean and surfing has been a great source of joy for him in his life. Jeff has the experience, wave knowledge and ability to get you up and riding.</p>
        </div>
      </div>
      <Header>Kawai</Header>
      <div className="row" style={{ marginLeft: '10%', marginBottom: '5%' }}>
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="kawai" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '5%', margin: '0 auto' }}></p>
        </div>
      </div>
    </div>
  );
}

Bios.propTypes = {

};

export default Bios;
