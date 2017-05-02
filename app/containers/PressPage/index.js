/*
 *
 * PressPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import Slider from 'react-slick';
import 'slick-carousel';
import MediaQuery from 'react-responsive';
import Dutch from 'assets/images/dutch_press.jpg';
import FrenchCan from 'assets/images/frenchcan_press.jpg';
import Voyage from 'assets/images/voyagela.png';
import Group from 'assets/images/group_camera2.jpg';
import Camera from 'assets/icons/camera.png';

export class PressPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
    };
    return (
      <div>
        <Helmet
          title="PressPage"
          meta={[
            { name: 'description', content: 'Description of PressPage' },
          ]}
        />
        <Nav />
        <MediaQuery minWidth={768}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6" style={{ marginTop: '5%' }}>
                <Slider {...settings}>
                  <div style={{ width: '50%' }}>
                    <img src={Dutch} alt="Aloha Brothers on Dutch television" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '5%',  paddingBottom: '1%' }} />
                  </div>
                  <div style={{ width: '50%' }}>
                    <img src={FrenchCan} alt="Aloha Brothers on Canadian television" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%' }} />
                  </div>
                  <div style={{ width: '50%' }}>
                    <img src={Voyage} alt="Profile of owner Nick in Voyage LA" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%' }} />
                  </div>
                  <div style={{ width: '50%' }}>
                    <img src={Group} alt="Filming a surf lesson in Venice, CA" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%' }} />
                  </div>
                </Slider>
              </div>
              <div className="col-sm-6" style={{ marginTop: '10%' }}>
                  <img style={{ display: 'block', margin: '0 auto', width: '30px' }} src={Camera} />
                  <h3 style={{ textAlign: 'center', color: '#FF80AB', letterSpacing: '5px', textTransform: 'uppercase', padding: '1%' }}>Press</h3>
                  <p style={{ textAlign: 'center', marginTop: '5%' }}>For media inquiries, please contact Nick Fowler at nickfowler9@gmail.com or 323-316-8108. </p>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

PressPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PressPage);


