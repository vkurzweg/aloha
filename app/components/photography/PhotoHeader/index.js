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
      <div style={{ fontSize: '16px', fontFamily: 'Josefin Sans', width: '75%', margin: '0 auto', textAlign: 'center', marginTop: '2%' }}>
        <p style={{ fontFamily: 'Josefin Sans' }}>Add professional photography to your lesson</p>
        <div style={{ width: '50%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%' }}>
          <table className="table" style={{ width: '100%', textAlign: 'center' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>50 shots</td>
                <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$75 cash / $85 PayPal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

PhotoHeader.propTypes = {

};

export default PhotoHeader;
