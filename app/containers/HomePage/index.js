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
import NavMobile from 'components/common/NavMobile';
import Hero from 'components/landing/Hero';
import HeroMobile from 'components/landing/HeroMobile';
import Intro from 'components/landing/Intro';
import Meet from 'components/landing/Meet';
import Rates from 'components/landing/Rates';
import Barrell from 'assets/images/slideshow_barrell2.jpg';
// import Office from 'assets/images/office.png';
import Footer from 'components/common/Footer';
import MediaQuery from 'react-responsive';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ top: '0' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - Venice Beach, CA"
          meta={[
            { name: 'description', content: '' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <Hero />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <HeroMobile />
        </MediaQuery>
        <Intro />
        <div style={{ height: '300px', backgroundImage: `url(${Barrell})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Rates />
        <Meet />
        <Footer />
      </div>
    );
  }
}


// <div style={{ height: '300px', backgroundImage: `url(${Office})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />

