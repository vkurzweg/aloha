/**
*
* PressContent
*
*/

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel';
import Dutch from 'assets/images/dutch_press.jpg';
import FrenchCan from 'assets/images/frenchcan_press.jpg';
import Voyage from 'assets/images/voyagela.png';
import Group from 'assets/images/group_camera2.jpg';
import LAT from 'assets/logos/latimes-logo.png';
import LAM from 'assets/logos/lamag.png';
import CBS from 'assets/logos/CBS-los-angeles-logo2.png';
import Huffpo from 'assets/logos/Huffington-Post-Logo.png';
import Article from './Article';
import Headline from './Headline';
import Body from './Body';

const A = styled.a`
 &:hover, &:active, &:focus {
   color: #FF80AB;
}
`;

function PressContent() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };
  return (
    <div className="container">
      <div className="row" style={{ width: '100%' }}>
        <div style={{ marginTop: '10%' }}>
          <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', padding: '1%' }}>Press</h3>
          <p style={{ fontStyle: 'italic', textAlign: 'center', fontSize: '16px' }}>For media inquiries, contact Nick Fowler at nickfowler9@gmail.com or 323-316-8108</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Slider {...settings}>
            <div style={{ width: '50%' }}>
              <img src={FrenchCan} alt="Aloha Brothers on Canadian television" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
            </div>
            <div style={{ width: '50%' }}>
              <img src={Dutch} alt="Aloha Brothers on Dutch television" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '5%',  paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
            </div>
            <div style={{ width: '50%' }}>
              <img src={Voyage} alt="Profile of owner Nick in Voyage LA" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
            </div>
            <div style={{ width: '50%' }}>
              <img src={Group} alt="Filming a surf lesson in Venice, CA" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
            </div>
          </Slider>
          <A href="https://stokeshare.com/blog/surf-school-la-8-righteous-surf-lessons-in-los-angeles/#facebook" target="blank">
            <Article>
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Surf School LA: 8 Righteous Surf Lessons in Los Angeles'</Headline>
                <Body>The Aloha Bros offer beginner surf lessons, where you’ll learn how to pop up correctly, understand positioning in the lineup, basic ocean safety, proper paddling, and how to ride the waves for starters...</Body>
              </div>
            </Article>
          </A>
          <A href="http://vacationidea.com/california/best-romantic-things-to-do-in-los-angeles.html#slide21" target="blank">
            <Article>
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Best Romantic Things to Do in Los Angeles'</Headline>
                <Body>Learn how to surf LA-style with Aloha Brothers. Run by Nick Fowler and his team of surfing gurus...</Body>
              </div>
            </Article>
          </A>
        </div>
        <div className="col-sm-6" style={{ marginBottom: '5%' }}>
          <a href="http://www.latimes.com/health/la-he-getting-out-surfing-20150919-story.html" target="blank">
            <Article>
              <img src={LAT} role="presentation" style={{ height: '50px', marginTop: '5%' }} />
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Some surfing tips to help newbies hang ten'</Headline>
                <Body>"It requires a ton of cardio," said Nick Fowler, of Venice-based Aloha Brothers Surf Lessons. "It's aerobic, anaerobic, and then some..."</Body>
              </div>
            </Article>
          </a>
          <a href="http://losangeles.cbslocal.com/top-lists/best-surfing-and-stand-up-paddleboard-classes-in-la/" target="blank">
            <Article>
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Best Surfing And Stand Up Paddleboard Classes In LA'</Headline>
                <Body>Aspiring wave riders of all age and ability levels appreciate Aloha Brothers’ encouraging teaching style. Not only does Nick help you understand what you’re doing wrong, he is sure to let you know what you’re doing right...</Body>
              </div>
              <img src={CBS} role="presentation" style={{ height: '50px', marginTop: '8%' }} />
            </Article>
          </a>
          <a href="http://www.lamag.com/lasocialspecialadvertising/los-angeles-magazines-readers-choice-travel-awards/" target="blank">
            <Article>
              <img src={LAM} role="presentation" style={{ height: '35px', marginTop: '5%' }} />
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Reader's Choice Travel Awards'</Headline>
                <Body>Nominated for Best Outdoor Activity</Body>
              </div>
            </Article>
          </a>
          <a href="http://www.huffingtonpost.com/2013/11/25/la-gift-guide-2013_n_4263867.html" target="blank">
            <Article>
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Skip the Stuff. Give Fun Instead!'</Headline>
                <Body>Buy you and your sweetie a couple of surfing lessons with companies like Venice’s Aloha Brothers Surf Lessons...</Body>
              </div>
              <img src={Huffpo} role="presentation" style={{ height: '40px'}} />
            </Article>
          </a>
          <a href="https://thepointsguy.com/2014/10/destination-venice-beach-ca-surf-shop-dine-in-style/" target="blank">
            <Article>
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Venice Beach, CA: Surf, Shop & Dine in Style'</Headline>
                <Body>Venice and surfing go hand in hand and if you’re a newbie, consider surf lessons with Nick Fowler at Aloha Brothers Surf Lessons. You’ll be on your feet riding a wave in no time....</Body>
              </div>
            </Article>
          </a>
          <a href="http://yoganonymous.com/the-yogis-guide-to-los-angeles-california" target="blank">
            <Article>
              <div style={{ marginLeft: '2%' }}>
                <Headline>'The Yogi's Guide to Los Angeles, California'</Headline>
                <Body>Aloha Brothers Surf Lessons are some of the best on the Coast. The instructors have loads of experience helping surfers of various levels...</Body>
              </div>
            </Article>
          </a>
        </div>
      </div>
    </div>
  );
}

PressContent.propTypes = {

};

export default PressContent;
