/*
 *
 * PressPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import MediaQuery from 'react-responsive';
import PressContent from 'components/press/PressContent';
import PressContentMobile from 'components/press/PressContentMobile';
import Footer from 'components/common/Footer';

export class PressPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="PressPage"
          meta={[
            { name: 'description', content: 'Description of PressPage' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <PressContent />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <PressContentMobile />
        </MediaQuery>
        <Footer />
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


