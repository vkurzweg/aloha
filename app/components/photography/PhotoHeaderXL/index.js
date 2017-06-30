/**
*
* PhotoHeaderXl
*
*/

import React from 'react';
// import styled from 'styled-components';


function PhotoHeaderXl() {
  return (
    <div>
      <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', paddingTop: '8%', fontSize: '28px' }}>Photography</h3>
      <div style={{ fontSize: '16px', fontFamily: 'Josefin Sans', width: '75%', margin: '0 auto', textAlign: 'center', marginTop: '2%' }}>
        <p style={{ fontFamily: 'Josefin Sans', fontSize: '18px' }}><b>Add professional photography to your lesson</b></p>
        <ul style={{ width: '50%', display: 'block', margin: '0 auto', textAlign: 'left' }}>
          <li style={{ fontFamily: 'Josefin Sans' }}>Your best images, edited & exported in high-quality JPG format</li>
          <li style={{ fontFamily: 'Josefin Sans' }}>Email delivery 1-3 days after lesson</li>
        </ul>
        <div style={{ width: '50%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%' }}>
          <table className="table" style={{ width: '100%', textAlign: 'center' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>1 person</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>20 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$85*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>2 people</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>30 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$60 per person*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>3 people</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>40 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$45 per person*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>4 people</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>50 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$37.50 per person*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>Deluxe (1-5 people)</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>75 images</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$175*</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>*Add 15% if paying via PayPal (permit fees)</td>
                <td />
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

PhotoHeaderXl.propTypes = {

};

export default PhotoHeaderXl;
