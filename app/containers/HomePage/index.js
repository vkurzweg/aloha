/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavXL from 'components/common/NavXL';
import NavMobile from 'components/common/NavMobile';
import Hero from 'components/landing/Hero';
import HeroXL from 'components/landing/HeroXL';
import HeroMobile from 'components/landing/HeroMobile';
import Intro from 'components/landing/Intro';
import IntroXL from 'components/landing/IntroXL';
import IntroMobile from 'components/landing/IntroMobile';
import Meet from 'components/landing/Meet';
import Rates from 'components/landing/Rates';
import RatesXL from 'components/landing/RatesXL';
import RatesMobile from 'components/landing/RatesMobile';
// import Office from 'assets/images/office.png';
import Footer from 'components/common/Footer';
import MediaQuery from 'react-responsive';
import { Image } from 'cloudinary-react';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  const barrell = 'http://res.cloudinary.com/kurzweg/image/upload/v1495568182/slideshow_barrell2.jpg';
  const crosswalk = 'http://res.cloudinary.com/kurzweg/image/upload/v1495568177/crosswalk.jpg';
    return (
      <div style={{ top: '0' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - Venice Beach, CA"
          meta={[
            { name: "description", content: "Aloha Brothers Surf Lessons, #1 Surf School in Southern CA!" },
          ]}
        />
        <MediaQuery minWidth={1824}>
          <NavXL />
          <HeroXL />
          <IntroXL />
          <div style={{ height: '425px', backgroundImage: `url(${crosswalk})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <RatesXL />
          <div style={{ height: '425px', backgroundImage: `url(${barrell})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={1823}>
          <Nav />
          <Hero />
          <Intro />
          <div style={{ height: '300px', backgroundImage: `url(${crosswalk})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </MediaQuery>
        <MediaQuery minWidth={957} maxWidth={1823}>
          <Rates />
          <div style={{ height: '300px', backgroundImage: `url(${barrell})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <HeroMobile />
          <IntroMobile />
          <Image cloudName="kurzweg" publicId="crosswalk" width="300" responsive alt="walking to a surf lesson in Venice, CA" style={{ height: '225px', width: '100%' }} />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={956}>
          <RatesMobile />
          <div style={{ height: '300px', backgroundImage: `url(${barrell})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <RatesMobile />
          <Image cloudName="kurzweg" publicId="slideshow_barrell2" width="300" responsive alt="Aloha Brothers owner Nick Fowler surfing" style={{ height: '200px', width: '100%' }} />
        </MediaQuery>
        <Meet />
        <Footer />
      </div>
    );
  }
}


// <div style={{ height: '300px', backgroundImage: `url(${Office})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />

