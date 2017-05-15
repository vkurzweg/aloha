/**
*
* Rates
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Surf from 'assets/icons/surfboards_purple.png';
import Camera from 'assets/icons/camera.png';
import { Link } from 'react-router';
import Btn from 'components/landing/Btn';
import { Image } from 'cloudinary-react';


function Rates() {
  return (
    <div style={{ display: 'block', width: '100%', margin: '0 auto' }}>

      <div className="container" style={{ backgroundColor: '#ECECEC', width: '100%', paddingTop: '5%' }}>
            <Card style={{ display: 'block', margin: '0 auto', height: '100%', width: '80%' }}>
              <CardMedia>
              <Image className="item" cloudName="kurzweg" publicId="cuteness_overload_kkto2i" width="auto" responsive />
              </CardMedia>
              <CardTitle title="Standard Group Lesson" subtitle="$85/person" />
              <CardText style={{ textAlign: 'center' }}>
                1 instructor for up to 4 people
                <hr style={{ marginTop: '2%', marginBottom: '2%' }} />
                We create the group if you don't have at least 3 people
                <hr style={{ marginTop: '2%', marginBottom: '2%' }} />
                Most popular option!
              </CardText>
            </Card>
      <div style={{ backgroundColor: '#ECECEC', paddingTop: '5%' }}>
        <Link to="/photography"><div style={{ margin: '0 auto', padding: '2%' }}>
          <img src={Camera} alt="surf photography" style={{ display: 'block', margin: '0 auto' }} />
          <p style={{ color: '#FF80AB', textAlign: 'center', fontSize: '16px', padding: '1%' }}>Add photography to your lesson for $75</p>
        </div></Link>
        <div style={{ marginBottom: '5%', marginTop: '3%' }}>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/booking" ><Btn>All rates & packages</Btn></Link>
        </div>
      </div>
      </div>
    </div>
  );
}

Rates.propTypes = {

};

export default Rates;
