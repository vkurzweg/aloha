/*
 *
 * BookingPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import { Link } from 'react-router';
import { Image } from 'cloudinary-react';
import RatesTables from 'components/booking/RatesTables';
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
        <MediaQuery minWidth={768}>
          <Nav />
          <div className="container" style={{ width: '100%' }}>
            <div className="row" style={{ width: '100%', marginTop: '8%' }}>
              <RatesTables />
              <div className="col-sm-3">
                <Image cloudName="kurzweg" publicId="venice_background_oblfde" width="auto" responsive alt="walking with surfboards in Venice" style={{ padding: '2%', height: '500px', background: `#ECECEC url(${spinner}) center no-repeat` }} />
                <Link style={{ display: 'block' }} to="/photography"><div style={{ width: '100%', margin: '0 auto', padding: '10%'}}>
                  <Image cloudName="kurzweg" publicId="camera" role="presentation" style={{ display: 'block', margin: '0 auto' }} />
                  <p style={{ color: '#FF80AB', textAlign: 'center', fontSize: '16px', padding: '1%' }}>Add photography to your lesson for $75</p>
                </div></Link>
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
