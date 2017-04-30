/**
*
* IntroCopy
*
*/

import React from 'react';
// import styled from 'styled-components';
import Waves from 'assets/icons/waves_white.png';
import Waves2 from 'assets/icons/waves_white2.png';

function Intro() {
  return (
    <div className="container">
      <div className="row">
        <h2 style={{ textAlign: 'center', color: '#FAFAFA', letterSpacing: '5px', textTransform: 'uppercase', backgroundColor: '#512DA8' }}><img src={Waves2} role="presentation" style={{ padding: '2%' }} />L.A.'s most popular surf school<img src={Waves} role="presentation" style={{ padding: '2%' }}/></h2>
        <div className="col-sm-4">

        </div>
        <div className="col-sm-4">

        </div>
        <div className="col-sm-4">
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {

};

export default Intro;
