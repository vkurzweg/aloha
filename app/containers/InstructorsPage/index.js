/*
 *
 * InstructorsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import Bios from 'components/instructors/Bios';


export class InstructorsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="InstructorsPage"
          meta={[
            { name: 'description', content: 'Description of InstructorsPage' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <Bios />
          <Footer />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
        </MediaQuery>
      </div>
    );
  }
}

InstructorsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(InstructorsPage);
