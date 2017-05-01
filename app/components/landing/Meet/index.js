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
      <div style={{ height: '300px', backgroundImage: `url(${Barrell})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </div>
  );
}

Meet.propTypes = {

};

export default Meet;
