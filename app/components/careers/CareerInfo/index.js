/**
*
* ContactInfo
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function ContactInfo() {
  return (
    <div className="col-sm-6" style={{ marginTop: '12%' }}>
      <Image className="item" cloudName="kurzweg" publicId="aloha_money" width="auto" alt="Money spelling aloha" style={{ display: 'block', margin: '0 auto', width: '80%' }} />
      <div>
        <div style={{ textAlign: 'center', marginTop: '5%', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <h4>Aloha Brothers Surf Instructors</h4>
          <h5 style={{ marginTop: '2%' }}>Venice, CA</h5>
        </div>
        <div style={{ fontSize: '14px', marginLeft: '10%' }}>
          <p>Are you responsible? Do you rip at surfing? Do you have a sparkling personality? Have you ever gotten a bad review on Yelp/TripAdvisor/Facebook/Google?</p>
          <p>If your answers were 'yes', 'yes', 'yes', and 'no', you very well may have a bright bright future as an Aloha Brother or Sister!</p>
        </div>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {

};

export default ContactInfo;
