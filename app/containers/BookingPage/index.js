/*
 *
 * BookingPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavXL from 'components/common/NavXL';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import { Link } from 'react-router';
import { Image } from 'cloudinary-react';
import RatesTables from 'components/booking/RatesTables';
import RatesTablesXL from 'components/booking/RatesTablesXL';
import RatesTablesMobile from 'components/booking/RatesTablesMobile';
import MediaQuery from 'react-responsive';


export class BookingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const spinner = 'https://www.ihs.com/images/ajax-loader.gif';
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - Rates & Packages"
          meta={[
            { name: "description", content: "Book a group lesson for $85 per person, board and wetsuit included. Aloha Brothers also offers private surf lessons in Los Angeles/Venice and O'ahu." },
          ]}
        />
        <MediaQuery minWidth={1824}>
          <NavXL />
          <div className="container" style={{ width: '100%' }}>
            <div className="row" style={{ width: '100%', marginTop: '8%' }}>
              <div className="col-sm-3">
                <Image cloudName="kurzweg" publicId="backside_pop_crop" width="400" quality="auto" responsive style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Image cloudName="kurzweg" publicId="shoulder_shimmy" width="400" quality="auto" responsive style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Image cloudName="kurzweg" publicId="sami_ghoche" width="400" quality="auto" responsive style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Image cloudName="kurzweg" publicId="bali" width="400" quality="auto" responsive style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
              </div>
              <RatesTablesXL />
              <div className="col-sm-3">
                <Image cloudName="kurzweg" publicId="venice_background_oblfde" width="400" quality="auto" responsive alt="walking with surfboards in Venice" style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Link style={{ display: 'block' }} to="/gallery"><div style={{ border: 'none', borderRadius: '3px', backgroundColor: '#FF80AB', width: '100%', margin: '0 auto', padding: '10%'}}>
                  <Image cloudName="kurzweg" publicId="camera_white" role="presentation" style={{ display: 'block', margin: '0 auto' }} />
                  <p style={{ color: '#ECECEC', textAlign: 'center', fontSize: '20px', padding: '1%' }}>Add photography to your lesson from $85</p>
                </div></Link>
                <Image cloudName="kurzweg" publicId="crosstraining" width="400" quality="auto" responsive alt="skateboarding in Venice" style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Image cloudName="kurzweg" publicId="boards" width="400" quality="auto" responsive alt="skateboarding in Venice" style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={1823}>
          <Nav />
          <div className="container" style={{ width: '100%' }}>
            <div className="row" style={{ width: '100%', marginTop: '8%' }}>
              <div className="col-sm-3">
                <Image cloudName="kurzweg" publicId="backside_pop_crop" width="300" quality="auto" responsive style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Image cloudName="kurzweg" publicId="shoulder_shimmy" width="300" quality="auto" responsive style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Image cloudName="kurzweg" publicId="sami_ghoche" width="300" quality="auto" responsive style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Image cloudName="kurzweg" publicId="bali" width="300" quality="auto" responsive style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
              </div>
              <RatesTables />
              <div className="col-sm-3">
                <Image cloudName="kurzweg" publicId="venice_background_oblfde" width="300" quality="auto" responsive alt="walking with surfboards in Venice" style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Link style={{ display: 'block' }} to="/gallery"><div style={{ border: 'none', borderRadius: '3px', backgroundColor: '#FF80AB', width: '100%', margin: '0 auto', padding: '10%'}}>
                  <Image cloudName="kurzweg" publicId="camera_white" role="presentation" style={{ display: 'block', margin: '0 auto' }} />
                  <p style={{ color: '#ECECEC', textAlign: 'center', fontSize: '16px', padding: '1%' }}>Add photography to your lesson from $85</p>
                </div></Link>
                <Image cloudName="kurzweg" publicId="crosstraining" width="300" quality="auto" responsive alt="skateboarding in Venice" style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Image cloudName="kurzweg" publicId="boards" width="300" quality="auto" responsive alt="skateboarding in Venice" style={{ padding: '2%', width: '100%', background: `#ECECEC url(${spinner}) center no-repeat` }} />
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <NavMobile />
          <RatesTablesMobile />
        </MediaQuery>

        <Footer />
      </div>
    );
  }
}

BookingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BookingPage);
