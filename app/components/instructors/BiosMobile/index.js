/**
*
* Bios
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import Subhead from './Subhead';
import Header from './Header';


function Bios() {
  return (
    <div className="container" style={{ paddingTop: '15%' }}>
      <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '2%' }}>Surf Instructors</h3>
      <Header>Nick</Header>
      <div className="row">
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="nick_watershot" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '3%', margin: '0 auto' }}>Born and raised in Hawaii, Nick was pushed into his first wave by former world surfing champion Fred Hemmings when he was around 5 or 6, and has been in love with the ocean ever since.  Nick studied at UC Santa Cruz because of the school's proximity to quality surf. Nick also studied linguistics in Chile because the country is known for its long, empty waves.</p>
          <p style={{ fontSize: '16px', paddingTop: '2%', margin: '0 auto', width: '80%' }}>Nick took a year off and lived in Tahiti in order to improve his French, and surf powerful Polynesian barrels. He <a href="http://westlalanguagetutor.com/" target="blank">also teaches languages</a> because he can't bear to miss good waves working a 9-5 job. Fluent in <span style={{ color: '#7C4DFF' }}>Spanish</span>, <span style={{ color: '#FF80AB' }}>French</span> and <span style={{ color: '#108EE9' }}>Portuguese</span>, and conversational in <span style={{ color: '#FF9800' }}>Indonesian</span>, Nick frequently gives surf lessons in these languages.</p>
          <p style={{ fontSize: '16px', paddingTop: '2%', margin: '0 auto', width: '80%' }}>Nick surfs daily and has taught countless friends and friends of friends and their friends too over the years. He almost always manages to get them up and riding the very first time they go out.</p>
        </div>
      </div>
      <Header>Matt</Header>
      <div className="row">
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="matt" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '5%', margin: '0 auto' }}>A Southern California native with over 25 years of ocean experience, Matt has the skills to take beginners to the next level. Matt's background includes completion of the Junior Lifeguards training program, CPR certification, and a degree in Environmental Studies from the University of California, Santa Cruz. Therefore, his approach to surf instruction is based not only on proper technique but also with a strong emphasis on safety and ocean awareness. Matt's experience and passion for surfing make him the perfect candidate for clients of all ages and sizes!</p>
        </div>
      </div>
      <Header>Taylor</Header>
      <div className="row">
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="taylor_crop" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '5%', margin: '0 auto' }}>Taylor grew up surfing in North Carolina and Hawaii. One day when he was 11 years, in the sweltering summer heat on a NC coast, he took out his Dads old 1970's Natural Progression surfboard to see if he could catch any waves -- the rest is history. He loves to see people's reactions and joy as they ride their first waves, experiencing the unique - and unmatched - adrenaline of the sport.</p>
        </div>
      </div>
      <Header>David</Header>
      <div className="row">
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="david" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '5%', margin: '0 auto' }}>"Surfing is the ultimate exposure to nature and the funnest, healthiest thing I ever want to do. Imagine yourself standing on the shoulder of a giant observing the world constantly changing. It feels like I've accomplished the most important thing of each day. To be at peace with myself."</p>
        </div>
      </div>
      <Header>Dustin</Header>
      <div className="row" style={{ marginBottom: '5%' }}>
        <div className="col-sm-5">
          <Image cloudName="kurzweg" publicId="dustin" responsive style={{ width: '100%', marginTop: '5%' }} />
        </div>
        <div className="col-sm-7">
          <p style={{ fontSize: '16px', width: '80%', paddingTop: '5%', margin: '0 auto' }}>"Well, I couldn't really imagine spending more than a day away from the beach..."</p>
        </div>
      </div>
    </div>
  );
}

Bios.propTypes = {

};

export default Bios;