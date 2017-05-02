/**
*
* PressContent
*
*/

import React from 'react';
// import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel';
import Dutch from 'assets/images/dutch_press.jpg';
import FrenchCan from 'assets/images/frenchcan_press.jpg';
import Voyage from 'assets/images/voyagela.png';
import Group from 'assets/images/group_camera2.jpg';
import Camera from 'assets/icons/camera.png';
import LAT from 'assets/logos/latimes-logo.png';
import LAM from 'assets/logos/lamag.png';
import CBS from 'assets/logos/CBS-los-angeles-logo2.png';
import Huffpo from 'assets/logos/Huffington-Post-Logo.png';
import Telemundo from 'assets/logos/telemundo.png';
import Stoke from 'assets/logos/stokeshare.png';


function PressContent() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6" style={{ marginTop: '3%' }}>
          <Slider {...settings}>
            <div style={{ width: '50%' }}>
              <img src={Dutch} alt="Aloha Brothers on Dutch television" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '5%',  paddingBottom: '1%' }} />
            </div>
            <div style={{ width: '50%' }}>
              <img src={FrenchCan} alt="Aloha Brothers on Canadian television" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%' }} />
            </div>
            <div style={{ width: '50%' }}>
              <img src={Voyage} alt="Profile of owner Nick in Voyage LA" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%' }} />
            </div>
            <div style={{ width: '50%' }}>
              <img src={Group} alt="Filming a surf lesson in Venice, CA" style={{ height: '400px', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%' }} />
            </div>
          </Slider>
        </div>
        <div className="col-sm-6" style={{ marginTop: '15%' }}>
          <img style={{ display: 'block', margin: '0 auto', width: '30px' }} src={Camera} />
          <h3 style={{ textAlign: 'center', color: '#FF80AB', letterSpacing: '5px', textTransform: 'uppercase', padding: '1%' }}>Press</h3>
          <p style={{ textAlign: 'center', marginTop: '5%', fontSize: '16px' }}>Media inquiries: Nick Fowler at nickfowler9@gmail.com or 323-316-8108</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <a href="http://www.latimes.com/health/la-he-getting-out-surfing-20150919-story.html" target="blank">
            <div style={{ display: 'inline-flex', marginTop: '4%' }}>
              <img src={LAT} role="presentation" />
              <div style={{ marginLeft: '2%' }}>
                <h4 style={{ color: '#7C4DFF', fontSize: '18px', fontWeight: 'bold', marginBottom: '1%' }}>'Some surfing tips to help newbies hang ten'</h4>
                <p style={{ color: 'black' }}>"It requires a ton of cardio," said Nick Fowler, of Venice-based Aloha Brothers Surf Lessons. "It's aerobic, anaerobic, and then some..."</p>
              </div>
            </div>
          </a>
          <a href="http://losangeles.cbslocal.com/top-lists/best-surfing-and-stand-up-paddleboard-classes-in-la/" target="blank">
            <div style={{ display: 'inline-flex', marginTop: '4%' }}>
              <img src={CBS} role="presentation" style={{ height: '50px'}} />
              <div style={{ marginLeft: '2%' }}>
                <h4 style={{ color: '#7C4DFF', fontSize: '18px', fontWeight: 'bold', marginBottom: '1%' }}>'Best Surfing And Stand Up Paddleboard Classes In LA'</h4>
                <p style={{ color: 'black' }}>Aspiring wave riders of all age and ability levels appreciate Aloha Brothers’ encouraging teaching style. Not only does Nick help you understand what you’re doing wrong, he is sure to let you know what you’re doing right...</p>
              </div>
            </div>
          </a>
          <a href="https://stokeshare.com/blog/surf-school-la-8-righteous-surf-lessons-in-los-angeles/#facebook" target="blank">
            <div style={{ display: 'inline-flex', marginTop: '4%' }}>
              <div style={{ marginLeft: '2%' }}>
                <h4 style={{ color: '#7C4DFF', fontSize: '18px', fontWeight: 'bold', marginBottom: '1%' }}>'Surf School LA: 8 Righteous Surf Lessons in Los Angeles'</h4>
                <p style={{ color: 'black' }}>The Aloha Bros offer beginner surf lessons, where you’ll learn how to pop up correctly, understand positioning in the lineup, basic ocean safety, proper paddling, and how to ride the waves for starters...</p>
              </div>
            </div>
          </a>
          <a href="http://vacationidea.com/california/best-romantic-things-to-do-in-los-angeles.html#slide21" target="blank">
            <div style={{ display: 'inline-flex', marginTop: '4%' }}>
              <div style={{ marginLeft: '2%' }}>
                <h4 style={{ color: '#7C4DFF', fontSize: '18px', fontWeight: 'bold', marginBottom: '1%' }}>'Best Romantic Things to Do in Los Angeles'</h4>
                <p style={{ color: 'black' }}>Learn how to surf LA-style with Aloha Brothers. Run by Nick Fowler and his team of surfing gurus...</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="http://www.lamag.com/lasocialspecialadvertising/los-angeles-magazines-readers-choice-travel-awards/" target="blank">
            <div style={{ display: 'inline-flex', marginTop: '4%' }}>
              <img src={LAM} role="presentation" style={{ height: '40px'}} />
              <div style={{ marginLeft: '2%' }}>
                <h4 style={{ color: '#7C4DFF', fontSize: '18px', fontWeight: 'bold', marginBottom: '1%' }}>'Reader's Choice Travel Awards'</h4>
                <p style={{ color: 'black' }}>Nominated for Best Outdoor Activity</p>
              </div>
            </div>
          </a>
          <a href="http://www.huffingtonpost.com/2013/11/25/la-gift-guide-2013_n_4263867.html" target="blank">
            <div style={{ display: 'inline-flex', marginTop: '4%' }}>
              <img src={Huffpo} role="presentation" style={{ height: '40px'}} />
              <div style={{ marginLeft: '2%' }}>
                <h4 style={{ color: '#7C4DFF', fontSize: '18px', fontWeight: 'bold', marginBottom: '1%' }}>'Skip the Stuff. Give Fun Instead!'</h4>
                <p style={{ color: 'black' }}>Buy you and your sweetie a couple of surfing lessons with companies like Venice’s Aloha Brothers Surf Lessons...</p>
              </div>
            </div>
          </a>
          <a href="https://thepointsguy.com/2014/10/destination-venice-beach-ca-surf-shop-dine-in-style/" target="blank">
            <div style={{ display: 'inline-flex', marginTop: '4%' }}>
              <div style={{ marginLeft: '2%' }}>
                <h4 style={{ color: '#7C4DFF', fontSize: '18px', fontWeight: 'bold', marginBottom: '1%' }}>'Venice Beach, CA: Surf, Shop & Dine in Style'</h4>
                <p style={{ color: 'black' }}>Venice and surfing go hand in hand and if you’re a newbie, consider surf lessons with Nick Fowler at Aloha Brothers Surf Lessons. You’ll be on your feet riding a wave in no time....</p>
              </div>
            </div>
          </a>
          <a href="http://yoganonymous.com/the-yogis-guide-to-los-angeles-california" target="blank">
            <div style={{ display: 'inline-flex', marginTop: '4%' }}>
              <div style={{ marginLeft: '2%' }}>
                <h4 style={{ color: '#7C4DFF', fontSize: '18px', fontWeight: 'bold', marginBottom: '1%' }}>'The Yogi's Guide to Los Angeles, California'</h4>
                <p style={{ color: 'black' }}>Aloha Brothers Surf Lessons are some of the best on the Coast. The instructors have loads of experience helping surfers of various levels...</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

PressContent.propTypes = {

};

export default PressContent;
