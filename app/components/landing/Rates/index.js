/**
*
* Rates
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import LessonKid from 'assets/images/cuteness_overload.jpg';
import Duo from 'assets/images/duo2.jpg';
import FlatButton from 'material-ui/FlatButton';
import Surf from 'assets/icons/surfboards_purple.png';
import Chevron from 'assets/icons/chevron.png';
import Camera from 'assets/icons/camera.png';
import { Link } from 'react-router';

function Rates() {
  return (
    <div style={{ display: 'block', width: '100%', margin: '0 auto' }}>
      <div className="container" style={{ backgroundColor: '#FF80AB', width: '100%' }}>
        <div className="row">
          <div className="col-sm-5">
            <h4 style={{ marginTop: '5%', padding: '2%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>All lessons last 90 minutes (water time)</h4>
          </div>
          <div className="col-sm-2">
            <img src={Surf} alt="surfboards" style={{ display: 'block', margin: '0 auto', marginTop: '3%' }} />
          </div>
          <div className="col-sm-5">
            <h4 style={{ marginTop: '5%', padding: '2%', textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px' }}>Surfboard & wetsuit included</h4>
          </div>
        </div>
      </div>

      <div className="container" style={{ backgroundColor: '#ECECEC', width: '100%' }}>
        <div className="row" style={{ marginTop: '5%' }}>
          <div className="col-sm-6" style={{ position: 'relative', height: '0', paddingBottom: '58%' }}>
            <Card style={{ display: 'block', margin: '0 auto', position: 'absolute', height: '100%', width: '80%' }}>
              <CardMedia>
                <img src={LessonKid} style={{ width: '100%' }} />
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
        <div className="col-sm-6" style={{ position: 'relative', height: '0', paddingBottom: '58%' }}>
          <Card style={{ position: 'absolute', display: 'block', margin: '0 auto', height: '100%', width: '80%' }}>
            <CardMedia>
              <img src={Duo} style={{ width: '100%' }} />
            </CardMedia>
            <CardTitle title="Private Lesson (2 ppl)" subtitle="$255"/>
            <CardText style={{ textAlign: 'center' }}>
              1 instructor for 2 people
              <hr style={{ marginTop: '2%', marginBottom: '2%' }} />
              Perfect for couples or children and their parents!
            </CardText>
          </Card>
        </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#ECECEC', paddingTop: '5%' }}>
        <Link to="/photography"><div style={{ border: '2px solid #FF80AB', width: '30%', margin: '0 auto', padding: '2%' }}>
          <img src={Camera} alt="surf photography" style={{ display: 'block', margin: '0 auto' }} />
          <p style={{ color: '#FF80AB', textAlign: 'center', fontSize: '16px', padding: '1%' }}>Add photography to your lesson for $75</p>
        </div></Link>
        <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to="/booking" ><h4 style={{ textAlign: 'center', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '3%', paddingBottom: '3%' }}>All rates & packages<img src={Chevron} role="presentation" /></h4></Link>
      </div>
    </div>
  );
}

Rates.propTypes = {

};

export default Rates;
