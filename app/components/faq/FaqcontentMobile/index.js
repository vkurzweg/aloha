/**
*
* Faqcontent
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router';
import Q from './Q';
import A from './A';
import { Image } from 'cloudinary-react';



function Faqcontent() {
  const office = 'http://res.cloudinary.com/kurzweg/image/upload/v1494631994/office_tuvew1.png';
  return (
    <div>
      <div style={{ marginLeft: '5%', marginRight: '5%', paddingTop: '20%', marginBottom: '3%' }}>
        <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '3%' }}>FAQ</h3>
        <Q>Is there somewhere to change, and can I shower after the lesson?</Q>
        <A>Please show up wearing your swimsuits. There are public showers where we can rinse off after the lesson.</A>

        <Q>What should I bring?</Q>
        <A>A swimsuit to wear under your wetsuit, a towel, and sunblock if you'd like.</A>
      </div>
      <div>
        <Image cloudName="kurzweg" publicId="office_tuvew1" style={{ position: 'absolute', height: '175px', width: '100%' }} />
        <div style={{ display: 'block', width: '100%', margin: '0 auto', position: 'absolute', zIndex: '100' }}>
          <Q style={{ color: '#6FEAB5', fontSize: '28px', fontWeight: 'bold', paddingTop: '10%'}}>Questions?</Q>
          <Link to="/contact"><button className="btn btn-default" style={{ color: '#6FEAB5', border: '5px solid #6FEAB5', fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', margin: '0 auto', backgroundColor: 'transparent'}}>Contact Us</button></Link>
        </div>
      </div>
      <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '15%', marginBottom: '3%' }}>

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
  </div>
  );
}

Faqcontent.propTypes = {

};

export default Faqcontent;
