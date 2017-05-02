/*
 *
 * PressPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import MediaQuery from 'react-responsive';
import PressContent from 'components/press/PressContent';

export class PressPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="PressPage"
          meta={[
            { name: 'description', content: 'Description of PressPage' },
          ]}
        />
        <Nav />
        <PressContent />
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


