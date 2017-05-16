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


function Rates() {
  return (
    <div style={{ display: 'block', width: '100%', margin: '0 auto' }}>
      <div className="container" style={{ backgroundColor: '#FF80AB', width: '100%' }}>
        <div className="row">
          <div className="col-sm-6" >
            <h4 style={{ marginTop: '1%', padding: '3%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>All lessons last 90 minutes (water time)</h4>
          </div>
          <div className="col-sm-6" >
            <h4 style={{ marginTop: '1%', padding: '3%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>Surfboard & wetsuit included</h4>
          </div>
        </div>
      </div>

      <div className="container" style={{ backgroundColor: '#ECECEC', width: '100%' }}>
        <div className="row" style={{ marginTop: '5%' }}>
          <div className="col-sm-6" style={{ display: 'block', margin: '0 auto', position: 'relative', height: '0', paddingBottom: '50%' }}>
            <Card style={{ display: 'block', margin: '0 auto', position: 'absolute', width: '60%', marginLeft: '25%' }}>
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
          </div>
        <div className="col-sm-6" style={{ display: 'block', margin: '0 auto', position: 'relative', height: '0', paddingBottom: '50%' }}>
          <Card style={{ position: 'absolute', display: 'block', margin: '0 auto', width: '60%' }}>
            <CardMedia>
              <Image className="item" cloudName="kurzweg" publicId="duo2_hlvkfo" width="auto" responsive />
            </CardMedia>
            <CardTitle title="Private Lesson (2 ppl)" subtitle="$255"/>
            <CardText style={{ textAlign: 'center', marginBottom: '4%' }}>
              1 instructor for 2 people
              <hr style={{ marginTop: '2%', marginBottom: '2%' }} />
              Perfect for couples or children and their parents!
            </CardText>
          </Card>
        </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Link to="/photography"><div style={{ border: '2px solid #FF80AB', width: '30%', margin: '0 auto', padding: '2%' }}>
          <Image cloudName="kurzweg" publicId="camera" width="auto" responsive alt="surf photography" style={{ display: 'block', margin: '0 auto' }} />
          <p style={{ color: '#FF80AB', textAlign: 'center', fontSize: '16px', padding: '1%' }}>Add photography to your lesson for $75</p>
        </div></Link>
        <div style={{ marginTop: '3%', marginBottom: '5%' }}>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/booking" ><Btn>All rates & packages</Btn></Link>
        </div>
      </div>
    </div>
  );
}

Rates.propTypes = {

};

export default Rates;
