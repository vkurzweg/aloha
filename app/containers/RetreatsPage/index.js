/*
 *
 * RetreatsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';


export class RetreatsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="RetreatsPage"
          meta={[
            { name: 'description', content: 'Description of RetreatsPage' },
          ]}
        />
        <Nav />
      </div>
    );
  }
}

RetreatsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(RetreatsPage);
