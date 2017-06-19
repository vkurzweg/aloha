/**
*
* DingContent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import Button from './Button';
import { Link } from 'react-router';


function DingContent() {
  const ding = 'http://res.cloudinary.com/kurzweg/image/upload/v1497827985/ding.jpg';
  return (
    <div style={{ paddingTop: '7%', paddingBottom: '7%' }}>
      <div>
        <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', paddingTop: '2%', paddingBottom: '2%' }}>Fast & Fair Local Ding Repair</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Image cloudName="kurzweg" publicId="ding" width="400" quality="auto" responsive style={{ display: 'block', margin: '0 auto', width: '100%' }} />
          </div>
          <div className="col-sm-6">
              <ul style={{ paddingTop: '10%', width: '50%', margin: '0 auto', fontSize: '18px', fontFamily: 'Josefin Sans', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5%' }}>
                <li>Experienced</li>
                <li>Reliable</li>
              </ul>
              <p style={{ fontSize: '16px', width: '85%', textAlign: 'center', lineHeight: '1.75em', margin: '0 auto', marginBottom: '10%', marginTop: '5%' }}>We understand that no two dings are alike and pride ourselves on competitive rates and quality craftsmanship.</p>
              <div>
                <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/contact" ><Button>Contact Us</Button></Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DingContent.propTypes = {

};

// <div className="container" style={{ paddingTop: '7%', width: '100%' }}>
//   <div className="row" style={{ width: '95%', margin: '0 auto' }}>
//     <div className="col-sm-4">
//       <Image cloudName="kurzweg" publicId="cantbuyhappy" width="300" quality="auto" responsive style={{ display: 'block', margin: '0 auto' }} />
//     </div>
//     <div className="col-sm-4">
//       <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', paddingTop: '2%' }}>Custom Ding Repair</h3>
//       <div style={{ width: '50%', margin: '0 auto', textAlign: 'center', fontSize: '18px', fontFamily: 'Josefin Sans' }}>
//           <p>Fast + Fair</p>
//           <p>Experienced</p>
//           <p>Local + Reliable</p>
//         <Button>Contact Us</Button>
//       </div>
//     </div>
//     <div className="col-sm-4">
//       <Image cloudName="kurzweg" publicId="ding" width="200" quality="auto" responsive style={{ display: 'block', margin: '0 auto' }} />
//     </div>
//   </div>
// </div>

export default DingContent;
