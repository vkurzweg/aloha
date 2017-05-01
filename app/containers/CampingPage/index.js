/*
 *
 * CampingPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';


export class CampingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="CampingPage"
          meta={[
            { name: 'description', content: 'Description of CampingPage' },
          ]}
        />
        <Nav />
      </div>
    );
  }
}

CampingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CampingPage);
