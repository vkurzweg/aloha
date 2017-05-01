/*
 *
 * DingRepairPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';


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
