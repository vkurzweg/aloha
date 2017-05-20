/*
 *
 * InstructorsHawaiiPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import BiosHawaii from 'components/instructors/BiosHawaii';
import BiosHawaiiMobile from 'components/instructors/BiosHawaiiMobile';


export class InstructorsHawaiiPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="InstructorsHawaiiPage"
          meta={[
            { name: 'description', content: 'Description of InstructorsHawaiiPage' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <BiosHawaii />
          <Footer />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <BiosHawaiiMobile />
          <Footer />
        </MediaQuery>
      </div>
    );
  }
}

InstructorsHawaiiPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(InstructorsHawaiiPage);
