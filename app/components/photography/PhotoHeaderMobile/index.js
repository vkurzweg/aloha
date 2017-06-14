/**
*
* PhotoHeader
*
*/

import React from 'react';
// import styled from 'styled-components';


function PhotoHeader() {
  return (
    <div>
      <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', paddingTop: '8%' }}>Photography</h3>
      <div style={{ fontSize: '16px', fontFamily: 'Josefin Sans', margin: '0 auto', textAlign: 'center', marginTop: '2%' }}>
        <p style={{ fontFamily: 'Josefin Sans', fontSize: '18px' }}><b>Add professional photography to your lesson</b></p>
        <ul style={{ width: '80%', display: 'block', margin: '0 auto', textAlign: 'left' }}>
          <li style={{ fontFamily: 'Josefin Sans' }}>Your best images, edited & exported in high-quality JPG format</li>
          <li style={{ fontFamily: 'Josefin Sans' }}>Email delivery 1-3 days after lesson</li>
        </ul>
        <div style={{ width: '90%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '4%' }}>
          <table className="table" style={{ width: '95%', textAlign: 'center' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>Student Package *</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>15 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$75 cash / $85 PayPal</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>Value Package</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>30 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$110 cash / $120 PayPal</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>Extra Value Package</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>50 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$160 cash / $170 PayPal</td>
              </tr>
            </tbody>
          </table>
            <p style={{ fontFamily: 'Josefin Sans', marginTop: '2%', textAlign: 'left', marginLeft: '5%' }}>* Must show valid student ID</p>
        </div>
      </div>
    </div>
  );
}

PhotoHeader.propTypes = {

};

export default PhotoHeader;
