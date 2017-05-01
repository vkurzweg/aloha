/**
*
* Meet
*
*/

import React from 'react';
// import styled from 'styled-components';
import Barrell from 'assets/images/slideshow_barrell2.jpg';

function Meet() {
  return (
    <div>
      <div style={{ height: '200px', backgroundImage: `url(${Barrell})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <p style={{ textAlign: 'center', marginBottom: '10%' }}>Test</p>
    </div>
  );
}

Meet.propTypes = {

};

export default Meet;
