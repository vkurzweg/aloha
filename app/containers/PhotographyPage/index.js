/*
 *
 * GalleryPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { createStructuredSelector } from 'reselect';
// import makeSelectGalleryPage from './selectors';
import MediaQuery from 'react-responsive';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import LightboxContainer from 'components/photography/LightboxContainer';
import LightboxContainerMobile from 'components/photography/LightboxContainerMobile';
import Footer from 'components/common/Footer';


export class PhotographyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="PhotographyPage"
          meta={[
            { name: 'description', content: 'Description of GalleryPage' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <div style={{ height: '50px' }}></div>
        </MediaQuery>
        <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', paddingTop: '8%' }}>Photography</h3>
        <div style={{ fontSize: '16px', fontFamily: 'Josefin Sans', width: '75%', margin: '0 auto', textAlign: 'center', marginTop: '2%' }}>
          <p style={{ fontFamily: 'Josefin Sans' }}>Add professional photography to your lesson</p>
          <div style={{ width: '50%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%' }}>
            <table className="table" style={{ width: '100%', textAlign: 'center' }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 'bold', fontSize: '16px' }}>50 shots (no editing)</td>
                  <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$75</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', fontSize: '16px' }}>5 edited shots</td>
                  <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <MediaQuery minWidth={768}>
          <LightboxContainer />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <LightboxContainerMobile />
        </MediaQuery>
        <Footer />
      </div>
    );
  }
}

PhotographyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   GalleryPage: makeSelectGalleryPage(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PhotographyPage);
