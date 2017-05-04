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
import Nav from 'components/common/Nav';
import LightboxContainer from 'components/photography/LightboxContainer';


export class PhotographyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="PhotographyPage"
          meta={[
            { name: 'description', content: 'Description of GalleryPage' },
          ]}
        />
        <Nav />
        <div style={{ marginTop: '15%' }}>
          <LightboxContainer />
        </div>
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
