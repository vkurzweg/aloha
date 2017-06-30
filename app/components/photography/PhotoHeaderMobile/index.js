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
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>1 person</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>20 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>$85*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>2 people</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>30 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>$60/person*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>3 people</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>40 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>$45/person*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>4 people</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>50 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>$37.50/person*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>Deluxe (1-5 people)</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>75 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px', width: '33%' }}>$175*</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '14px', textAlign: 'center' }}>*Add 15% if paying via PayPal (permit fees)</p>
        </div>
      </div>
    </div>
  );
}

PhotoHeader.propTypes = {

};

export default PhotoHeader;
