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
import FAQ from 'data/Faq';


function Faqcontent() {
  const office = 'http://res.cloudinary.com/kurzweg/image/upload/v1494631994/office_tuvew1.png';
  const faq = FAQ;
  return (
    <div>
      <div style={{ marginLeft: '5%', marginRight: '5%', paddingTop: '7%', marginBottom: '3%' }}>
        <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '30px' }}>FAQ</h3>
        <Q>{faq[0].q}</Q>
        <A>{faq[0].a}</A>

        <Q>{faq[1].q}</Q>
        <A>{faq[1].a}</A>

        <Q>{faq[2].q}</Q>
        <A>{faq[2].a}</A>

        <Q>{faq[3].q}</Q>
        <A>{faq[3].a}</A>
      </div>
      <div style={{ height: '375px', backgroundImage: `url(${office})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Q style={{ color: '#FF80AB', fontSize: '32px', fontWeight: 'bold', paddingTop: '5%'}}>Questions?</Q>
        <Link to="/contact"><button className="btn btn-default" style={{ color: '#FF80AB', border: '5px solid #FF80AB', fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', margin: '0 auto', backgroundColor: 'transparent'}}>Contact Us</button></Link>
      </div>
      <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%', marginBottom: '3%' }}>
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
