/*
 *
 * DingRepairPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import Happy from 'assets/images/cantbuyhappy.jpg';
import Surf from 'assets/icons/surfboards_pink.png';


export class DingRepairPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="DingRepairPage"
          meta={[
            { name: 'description', content: 'Description of DingRepairPage' },
          ]}
        />
        <Nav />
        <div style={{ display: 'inline-flex', marginTop: '10%' }}>
          <div>
            <img src={Happy} alt="surf marquee" style={{ paddingTop: '5%', paddingLeft: '5%', width: '75%' }} />
          </div>
          <div>
            <img src={Surf} role="presentation" style={{ display: 'block', margin: '0 auto' }} />
            <h3 style={{ textAlign: 'center', color: '#FF80AB', letterSpacing: '5px', textTransform: 'uppercase' }}>Aloha Brothers Ding Repair</h3>
          </div>
        </div>
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
