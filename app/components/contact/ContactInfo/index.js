/**
*
* ContactInfo
*
*/

import React from 'react';
// import styled from 'styled-components';
import Gopro from 'assets/images/gopro.jpg';


function ContactInfo() {
  return (
    <div className="col-sm-6" style={{ marginTop: '7%' }}>
      <img src={Gopro} alt="Gopro view of inside a wave" style={{ display: 'block', margin: '0 auto', width: '80%' }} />
      <div>
        <div style={{ textAlign: 'center', marginTop: '5%', color: '#7C4DFF' }}>
          <h3>Aloha Brothers Surf Lessons</h3>
          <h4>Venice, CA</h4>
        </div>
        <div style={{ fontSize: '16px', marginLeft: '10%'}}>
          <p><span className="glyphicon glyphicon-phone" style={{ fontSize: '18px', padding: '1%' }}></span>(323) 316-8108</p>
          <p><span className="glyphicon glyphicon-envelope" style={{ fontSize: '18px', padding: '1%' }}></span>nickfowler9@gmail.com</p>
          <p><span className="glyphicon glyphicon-time" style={{ fontSize: '18px', padding: '1%' }}></span>Monday - Friday: 7:00 AM to 5:00 PM</p>
        </div>
        <h3 style={{ textAlign: 'center', marginTop: '5%', color: '#7C4DFF' }} >Surf Gear & Rentals</h3>
        <div style={{ fontSize: '16px', marginLeft: '10%'}}>
          <p><b>Rider Shack</b></p>
          <p>13211 W Washington Blvd <br /> Los Angeles, CA 90066</p>
        </div>
        <div style={{ fontSize: '16px', marginLeft: '10%', marginTop: '2%' }}>
          <p><b>Mollusk</b></p>
          <p>1600 Pacific Ave <br /> Venice, CA 90291</p>
        </div>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {

};

export default ContactInfo;
