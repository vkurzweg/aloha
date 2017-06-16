/**
*
* RatesTables
*
*/

import React from 'react';
// import styled from 'styled-components';
import Header from './Header';
import Subhead from './Subhead';
import TD from './TD';
import { Link } from 'react-router';
import { Image } from 'cloudinary-react';



function RatesTables() {
  return (
    <div className="col-sm-6">

     <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '2%', fontSize: '30px' }}>Rates & Packages</h3>
     <div style={{ fontSize: '16px', fontFamily: 'Josefin Sans', width: '75%', margin: '0 auto', textAlign: 'center', marginTop: '2%' }}>
       <p style={{ fontFamily: 'Josefin Sans', fontSize: '20px' }}>All lessons last 90 minutes</p>
       <hr style={{ width: '50%', display: 'block', margin: '0 auto', marginTop: '2%', marginBottom: '2%' }} />
       <p style={{ fontFamily: 'Josefin Sans', fontSize: '20px' }}>Surfboard & wetsuit included at no extra charge</p>
       <Link to="/contact"><button className="btn btn-default" style={{ backgroundColor: '#FF80AB', color: 'white', width: '12em', display: 'block', margin: '0 auto', fontSize: '28px', border: 'none', marginTop: '5%', marginBottom: '7%'}}>Book a lesson or package</button></Link>
     </div>

     <Header>Beginner & Intermediate</Header>
     <div className="container" style={{ width: '100%', marginTop: '5%' }}>
       <div className="row">

       <div className="col-sm-6">
         <Subhead>Group Lessons*</Subhead>
         <table className="table" style={{ textAlign: 'center', marginTop: '5%', height: '100%' }}>
           <tbody>
             <tr>
               <TD>1 person</TD>
               <TD>$85</TD>
             </tr>
             <tr>
               <TD>2 people</TD>
               <TD>$170</TD>
             </tr>
             <tr>
               <TD>3 people</TD>
               <TD>$255</TD>
             </tr>
             <tr>
               <TD>4 people</TD>
               <TD>$340</TD>
             </tr>
           </tbody>
         </table>
         <ul style={{ textAlign: 'left', fontSize: '20px', marginLeft: '10%', marginTop: '5%', listStyleType: 'none' }}>
           <li>* 1 instructor for up to 4 people</li>
           <li>We create the group if you don't have at least 3 people</li>
           <li>Most popular option!</li>
         </ul>
       </div>

       <div className="col-sm-6">
         <Subhead>Private Lessons</Subhead>
         <table className="table" style={{ width: '85%', textAlign: 'center', marginTop: '5%' }}>
           <tbody>
             <tr>
               <TD>1 person</TD>
               <TD>$160</TD>
             </tr>
             <tr>
               <TD>2 people</TD>
               <TD>$255</TD>
             </tr>
             <tr>
               <TD>Family (5 max)</TD>
               <TD>$510</TD>
             </tr>
           </tbody>
         </table>
       </div>

       </div>
     </div>

     <Header>Packages</Header>
     <Subhead>5-Lesson Package* <span style={{ borderRadius: '3px', backgroundColor: '#6FEAB5', color: 'white', textTransform: 'none', border: '1px solid #8AE5AB', padding: '1%', letterSpacing: '1px' }}><Image cloudName="kurzweg" publicId="palmtree1" alt="palmtree" style={{ height: '25px'}} />Best Value!</span></Subhead>
     <div style={{ width: '50%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%' }}>
       <table className="table" style={{ width: '100%', textAlign: 'center' }}>
         <tbody>
           <tr>
             <TD>5 standard group lessons</TD>
             <TD>$375</TD>
           </tr>
         </tbody>
       </table>
     </div>
     <ul style={{ textAlign: 'left', fontSize: '20px', marginLeft: '7%', marginTop: '2%', width: '80%', listStyleType: 'none' }}>
       <li>* <b>9 - 10:30</b> Earliest session M-F</li>
       <li style={{ marginTop: '3%' }}><b>Spring/Summer (March - Sept)</b> Lessons in this package only available Monday - Friday</li>
       <li style={{ marginTop: '3%' }}>We try our best to work with your schedule. If we can't add another person to make your lesson into a group lesson within 24 hours, we will notify you that we need to reschedule.</li>
     </ul>
     <Subhead>4-Lesson Package*</Subhead>
     <div style={{ width: '50%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%' }}>
       <table className="table" style={{ width: '100%', textAlign: 'center' }}>
         <tbody>
           <tr>
             <TD>3 standard group lessons & 1 private lesson</TD>
             <TD>$375</TD>
           </tr>
         </tbody>
       </table>
     </div>
     <ul style={{ textAlign: 'left', fontSize: '20px', marginLeft: '7%', marginTop: '2%', width: '80%', marginBottom: '5%'}}>
       <li>* <b>Availablity</b> Same as 5-lesson package</li>
     </ul>

     <Header>Gift Certificates</Header>
     <div style={{ marginLeft: '5%', padding: '2%' }}>
       <p style={{ fontFamily: 'Josefin Sans', fontSize: '20px' }}>You send the payment for number of lessons and we send you the printable file.</p>
       <p style={{ fontFamily: 'Josefin Sans', fontSize: '20px' }}>All gift certificates are non-transferable, non-refundable, and expire in a year.</p>
       <p style={{ fontFamily: 'Josefin Sans', fontSize: '20px' }}>Follow the instructions below, which are catered to the desktop version of PayPal.</p>
     </div>
     <ol style={{ padding: '2%', marginLeft: '10%', listStyleType: 'decimal', fontSize: '20px' }}>
       <li>Go to paypal.com</li>
       <li>Click Send</li>
       <li>Enter nickfowler9@gmail.com with the amount (see rates above)</li>
       <li>Click Continue</li>
       <li>Select Friends or Family --- SUPER IMPORTANT!!!! </li>
       <li>You will be asked to provide 3% of the total if processed incorrectly.</li>
       <li>Sign in to PayPal or create an account</li>
       <li>Email us and tell us that you purchased a gift certificate, the amount, and for whom at nickfowler9@gmail.com</li>
       <li>We email you the gift certificate :-)</li>
     </ol>
   </div>
  );
}

RatesTables.propTypes = {

};

export default RatesTables;
