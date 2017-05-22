/**
*
* PressContent
*
*/

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel';
import Article from './Article';
import Headline from './Headline';
import Body from './Body';
import { Image } from 'cloudinary-react';


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
    <div className="container" style={{ width: '80%', paddingBottom: '6%' }}>
      <div className="row" style={{ width: '100%' }}>
        <div style={{ marginTop: '8%' }}>
          <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', padding: '1%', fontSize: '30px' }}>Press</h3>
          <p style={{ fontStyle: 'italic', textAlign: 'center', fontSize: '18px' }}>For media inquiries, contact Nick Fowler at nickfowler9@gmail.com or 323-316-8108</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <Image className="item" cloudName="kurzweg" publicId="frenchcan_press" width="400" alt="Aloha Brothers on Canadian television" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
          <Image className="item" cloudName="kurzweg" publicId="dutch_press" width="400" alt="Aloha Brothers on Dutch television" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '5%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
        </div>
        <div className="col-sm-6">
          <a href="http://www.latimes.com/health/la-he-getting-out-surfing-20150919-story.html" target="blank">
            <Article>
              <Image cloudName="kurzweg" publicId="latimes-logo" responsive style={{ height: '50px', marginTop: '12%' }} />
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Some surfing tips to help newbies hang ten'</Headline>
                <Body>"It requires a ton of cardio," said Nick Fowler, of Venice-based Aloha Brothers Surf Lessons. "If you surf two to three times a week, you can pretty much eat like a pregnant elephant with triplets and you'll never gain weight."</Body>
              </div>
            </Article>
          </a>
          <a href="http://losangeles.cbslocal.com/top-lists/best-surfing-and-stand-up-paddleboard-classes-in-la/" target="blank">
            <Article>
              <div style={{ marginLeft: '2%' }}>
                <Headline>'Best Surfing And Stand Up Paddleboard Classes In LA'</Headline>
                <Body>Aspiring wave riders of all age and ability levels appreciate Aloha Brothers’ encouraging teaching style. Not only does Nick help you understand what you’re doing wrong, he is sure to let you know what you’re doing right...</Body>
              </div>
              <Image cloudName="kurzweg" publicId="CBS-los-angeles-logo2" responsive role="presentation" style={{ height: '50px', marginTop: '8%' }} />
            </Article>
          </a>
          <a href="http://www.lamag.com/lasocialspecialadvertising/los-angeles-magazines-readers-choice-travel-awards/" target="blank">
            <Article>
              <Image cloudName="kurzweg" publicId="lamag" role="presentation" style={{ height: '35px', marginTop: '5%' }} />
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
              <Image cloudName="kurzweg" publicId="Huffington-Post-Logo" role="presentation" style={{ height: '40px'}} />
            </Article>
          </a>
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
          <a href="http://yoganonymous.com/the-yogis-guide-to-los-angeles-california" target="blank">
            <Article>
              <div style={{ marginLeft: '2%' }}>
                <Headline>'The Yogi's Guide to Los Angeles, California'</Headline>
                <Body>Aloha Brothers Surf Lessons are some of the best on the Coast. The instructors have loads of experience helping surfers of various levels...</Body>
              </div>
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
        </div>
        <div className="col-sm-3">
          <Image className="item" cloudName="kurzweg" publicId="voyagela" width="400" alt="Profile of owner Nick in Voyage LA" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
          <Image className="item" cloudName="kurzweg" publicId="group_camera2" width="400" alt="Filming a surf lesson in Venice, CA" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
        </div>
      </div>
    </div>
  );
}

PressContent.propTypes = {

};

export default PressContent;
