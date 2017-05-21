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
import BiosMobile from 'components/instructors/BiosMobile';


export class InstructorsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Instructors - Venice, CA"
          meta={[
            { name: 'description', content: 'Our friendly and experienced surf instructors have received hundreds of 5-star reviews. Group lessons starting at $85.' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <Bios />
          <Footer />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <BiosMobile />
          <Footer />
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
