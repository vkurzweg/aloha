/*
 *
 * Faqpage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import Footer from 'components/common/Footer';
import Office from 'assets/images/office.png';
import Q from './Q';
import A from './A';


export class Faqpage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Faqpage"
          meta={[
            { name: 'description', content: 'Description of Faqpage' },
          ]}
        />
        <Nav />
        <div style={{ height: '350px', backgroundImage: `url(${Office})`, backgroundAttachment: 'fixed', backgroundPosition: 'center' }}></div>
        <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
          <Q>Is there somewhere to change, and can I shower after the lesson?</Q>
          <A>Please show up wearing your swimsuits. If you would like to rinse off, please bring a large plastic container with your own water due to drought restrictions. Note that the city is turning off public showers at state beaches starting July 15, 2015.</A>

          <Q>What should I bring?</Q>
          <A>A swimsuit to wear under your wetsuit, a towel, and sunblock if you'd like.</A>

          <Q>Does my child need a life vest?</Q>
          <A>No need to bring a life vest. We take good care of all our clients. If you Instagram, check out our hashtag, #alohabrothersurflessons, or our Facebook. You will see some pictures of our youngest students, who are 3 and 4 years old.</A>

          <Q>How far in advance do I have to book?</Q>
          <A>It depends what you're looking for. If you have specific requests, such as intermediate lessons or lessons in Spanish, French, and Portuguese, you might not be able to book your lesson with a short notice. A week in advance is ideal. However, if you want standard group lessons with quality instructors, call us anytime! We will do our best to accommodate your needs
          To book, email NickFowler9@gmail.com or call 323-316-8108</A>

          <Q>How many lessons should I take?</Q>
          <A>1-3 lessons to have some fun and learn the basics. We recommend 5-6 classes to become really comfortable on the board and gain the ability to learn how to learn. The more time you put in, the better you will become. A 5-lesson package is available for $375.</A>

          <Q>How cold is the water? Do we need to wear a wetsuit?</Q>
          <A>During fall and winter the water temp is in the 60's, you would want to wear a wetsuit. In the summer (June - August) the water is in the 70's, a wetsuit is optional. Either way, the wetsuit is provided so it is up to you :)</A>

          <Q>Can I bring my own board and/or wetsuit?</Q>
          <A>By all means!</A>

          <Q>Do you rent surfboards and wetsuits?</Q>
          <A>Yes, but only for the lesson. Unfortunately, we do not rent the equipment if you would like to use them after the lesson. For rentals, please visit Rider Shack or Mollusk.</A>
        </div>

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
