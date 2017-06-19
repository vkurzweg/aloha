/*
 *
 * DingRepairPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import NavXL from 'components/common/NavXL';
import DingContent from 'components/ding/DingContent';
// import Happy from 'assets/images/cantbuyhappy.jpg';


export class DingRepairPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Board Ding Repair - Los Angeles"
          meta={[
            { name: 'description', content: 'Fast and fair custom ding repair by experienced surfers in Venice Beach.' },
          ]}
        />
        <MediaQuery minWidth={1824}>
          <NavXL />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1823}>
          <Nav />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <div style={{ height: '2em' }}></div>
        </MediaQuery>
        <DingContent />
      </div>
    );
  }
}

DingRepairPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DingRepairPage);

// <img src={Happy} alt="surf marquee" style={{ paddingTop: '5%', paddingLeft: '5%', width: '75%' }} />
