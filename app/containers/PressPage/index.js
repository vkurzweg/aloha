/*
 *
 * PressPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavXL from 'components/common/NavXL';
import NavMobile from 'components/common/NavMobile';
import MediaQuery from 'react-responsive';
import PressContent from 'components/press/PressContent';
import PressContentXL from 'components/press/PressContentXL';
import PressContentMobile from 'components/press/PressContentMobile';
import Footer from 'components/common/Footer';

export class PressPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - Press"
          meta={[
            { name: 'description', content: 'Located in Venice, CA, Aloha Brothers has been featured in the Los Angeles Times, Huffington Post, and international media outlets.' },
          ]}
        />
        <MediaQuery minWidth={1824}>
          <NavXL />
          <PressContentXL />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1823}>
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


