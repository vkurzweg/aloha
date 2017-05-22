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
    <div className="container" style={{ paddingTop: '15%' }}>
      <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '2%' }}>Surf Instructors - O'ahu</h3>
      <Header>Jeff</Header>
      <div className="row" style={{ marginBottom: '5%' }}>
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="jeff" width="300" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '3%', margin: '0 auto' }}>Jeff has been surfing on O'ahu for 27 years and knows the island and all her surf spots. Through his teenage years he surfed competitively. He has always had a great love for the ocean and surfing has been a great source of joy for him in his life. Jeff has the experience, wave knowledge and ability to get you up and riding.</p>
        </div>
      </div>
      <Header>Kawai</Header>
      <div className="row" style={{ marginBottom: '5%' }}>
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="kawai" width="300" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '5%', margin: '0 auto' }}>Hailing from Hawaiian surf royalty (Kawai's uncles are the legendary Michael and Derek Ho, and his cousins are Mason and Coco), Kawai moved from his native Kauai to O'ahu when he was a teen and quickly became a standout fixture at Pipeline, the most famous wave on earth. Comfortable in all from big to small, Kawai loves helping total beginners to advanced surfers improve.</p>
        </div>
      </div>
    </div>
  );
}

Bios.propTypes = {

};

export default Bios;
