/*
 *
 * Faqpage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import Faqcontent from 'components/faq/Faqcontent';
import FaqcontentMobile from 'components/faq/FaqcontentMobile';

export class Faqpage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - FAQs"
          meta={[
            { name: "description", content: "One of the top-rated surf schools in Southern California, located in Venice Beach. Find out what to expect at your first surf lesson from Aloha Brothers." },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <Faqcontent />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <FaqcontentMobile />
        </MediaQuery>

        <Footer />
      </div>
    );
  }
}

Faqpage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Faqpage);
