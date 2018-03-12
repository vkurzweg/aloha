/**
*
* Rates
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import Btn from 'components/landing/Btn';
import { Image } from 'cloudinary-react';


function Rates(props) {
  let color = '#ECECEC';
  props.hover ? color = '#7C4DFF' : color;
  let src = 'camera_white';
  props.hover ? src = 'camera_purple' : src;
  return (
    <div style={{ display: 'block', width: '100%', margin: '0 auto' }}>

      <div className="container" style={{ backgroundColor: '#ECECEC', width: '100%' }}>
        <div className="row" style={{ marginTop: '2%' }}>
          <div className="col-sm-6" style={{ display: 'block', margin: '0 auto', marginBottom: '2%' }}>
            <Card style={{ display: 'block', margin: '0 auto', width: '60%', marginLeft: '25%' }}>
              <CardMedia>
                <Image className="item" cloudName="kurzweg" publicId="cuteness_overload" width="400" quality="auto" responsive />
              </CardMedia>
              <CardTitle title="Standard Group Lesson" subtitle="$85/person" />
              <CardText style={{ textAlign: 'center', fontSize: '18px', color: '#757575', fontFamily: 'Josefin Sans' }}>
                1 instructor for up to 4 people
                <hr style={{ marginTop: '2%', marginBottom: '2%' }} />
                We create the group if you don't have at least 3 people
              </CardText>
            </Card>
          </div>
        <div className="col-sm-6" style={{ display: 'block', margin: '0 auto', marginBottom: '2%' }}>
          <Card style={{ display: 'block', margin: '0 auto', width: '60%' }}>
            <CardMedia>
              <Image className="item" cloudName="kurzweg" publicId="duo2_ktikxn" width="400" quality="auto" responsive />
            </CardMedia>
            <CardTitle title="Private Lesson (2 ppl)" subtitle="$255"/>
            <CardText style={{ textAlign: 'center', fontSize: '18px', color: '#757575', fontFamily: 'Josefin Sans' }}>
              1 instructor for 2 people
              <hr style={{ marginTop: '2%', marginBottom: '2%' }} />
              Perfect for couples or children and their parents!
            </CardText>
          </Card>
        </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Link to="/gallery" style={{ textDecoration: 'none' }}><div onMouseEnter={props.toggleColor} onMouseLeave={props.toggleColor} style={{ border: 'none', borderRadius: '3px', backgroundColor: '#FF80AB', width: '30%', margin: '0 auto', padding: '2%' }}>
          <Image cloudName="kurzweg" publicId={src} width="auto" responsive alt="surf photography" style={{ display: 'block', margin: '0 auto' }} />
          <p style={{ color, textAlign: 'center', fontSize: '22px', padding: '1%' }}>Add photography to your lesson<br /> $85+</p>
        </div></Link>
        <div style={{ marginTop: '3%', paddingBottom: '5%' }}>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/rates" ><Btn>All rates & packages</Btn></Link>
        </div>
      </div>
    </div>
  );
}

Rates.propTypes = {

};

export default Rates;
