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
import NavXL from 'components/common/NavXL';
import NavMobile from 'components/common/NavMobile';
import LightboxContainer from 'components/photography/LightboxContainer';
import LightboxContainerMobile from 'components/photography/LightboxContainerMobile';
import Footer from 'components/common/Footer';
import PhotoHeader from 'components/photography/PhotoHeader';
import PhotoHeaderXL from 'components/photography/PhotoHeaderXL';


export class PhotographyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - Photography"
          meta={[
            { name: 'description', content: 'Add professional photography to your surf lesson or package! Click to check out our gallery.' },
          ]}
        />
        <MediaQuery minWidth={1824}>
          <NavXL />
          <PhotoHeaderXL />
          <LightboxContainer />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1823}>
          <Nav />
          <PhotoHeader />
          <LightboxContainer />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <div style={{ height: '50px' }}></div>
          <PhotoHeader />
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
