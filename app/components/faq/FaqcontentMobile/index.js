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
import FAQ from 'data/Faq';


function Faqcontent() {
  const office = 'http://res.cloudinary.com/kurzweg/image/upload/v1494631994/office_tuvew1.png';
  const faq = FAQ;
  return (
    <div>
      <div style={{ marginLeft: '5%', marginRight: '5%', paddingTop: '20%', marginBottom: '3%' }}>
        <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '3%' }}>FAQ</h3>
        <Q>{faq[0].q}</Q>
        <A>{faq[0].a}</A>

        <Q>{faq[1].q}</Q>
        <A>{faq[1].a}</A>
      </div>
      <div>
        <Image cloudName="kurzweg" publicId="office_tuvew1" style={{ position: 'absolute', height: '175px', width: '100%' }} />
        <div style={{ display: 'block', width: '100%', margin: '0 auto', position: 'absolute', zIndex: '100' }}>
          <Q style={{ color: '#6FEAB5', fontSize: '28px', fontWeight: 'bold', paddingTop: '10%'}}>Questions?</Q>
          <Link to="/contact"><button className="btn btn-default" style={{ color: '#6FEAB5', border: '5px solid #6FEAB5', fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', margin: '0 auto', backgroundColor: 'transparent'}}>Contact Us</button></Link>
        </div>
      </div>
      <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '15%', marginBottom: '3%' }}>

        <Q>{faq[2].q}</Q>
        <A>{faq[2].a}</A>

        <Q>{faq[3].q}</Q>
        <A>{faq[3].a}</A>
        <Q>{faq[4].q}</Q>
        <A>{faq[4].a}</A>

        <Q>{faq[5].q}</Q>
        <A>{faq[5].a}</A>

        <Q>{faq[6].q}</Q>
        <A>{faq[6].a}</A>

        <Q>{faq[7].q}</Q>
        <A>{faq[7].a}</A>
      </div>
  </div>
  );
}

Faqcontent.propTypes = {

};

export default Faqcontent;
