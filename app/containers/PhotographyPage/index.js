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
      </div>
    );
  }
}

GalleryPage.propTypes = {
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
