/**
*
* Nav
*
*/

import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'assets/icons/menu.png';
import Yelp from 'assets/icons/yelp.png';
import Tripadvisor from 'assets/icons/tripadvisor.png';
import Thumbtack from 'assets/icons/thumbtack.png';
import Facebook from 'assets/icons/facebook.png';
import Instagram from 'assets/icons/instagram.png';
import { browserHistory } from 'react-router';

const StyledAppBar = styled(AppBar)`
  width: 100%;
  background: #2bf7d0;
  background: -moz-linear-gradient(left, #2bf7d0 0%, #8ae5ab 95%);
  background: -webkit-linear-gradient(left, #2bf7d0 0%,#8ae5ab 95%);
  background: linear-gradient(to right, #2bf7d0 0%,#8ae5ab 95%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2bf7d0', endColorstr='#8ae5ab',GradientType=1 );
`;

const StyledDrawer = styled(Drawer)`
  background: #2bf7d0;
  background: -moz-linear-gradient(left, #2bf7d0 0%, #8ae5ab 95%);
  background: -webkit-linear-gradient(left, #2bf7d0 0%,#8ae5ab 95%);
  background: linear-gradient(to right, #2bf7d0 0%,#8ae5ab 95%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2bf7d0', endColorstr='#8ae5ab',GradientType=1 );
`;

const A = styled.a`
  font-family: 'Lobster', sans-serif;
  text-decoration: none;
  font-size: 28px;
  color: black;
`;

const items = [
  {
    name: 'Rates & Booking',
    url: '/booking',
  }, {
    name: 'Instructors',
    url: '/instructors',
  }, {
    name: 'FAQ',
    url: '/faq',
  }, {
    name: 'Photography',
    url: '/photography',
  }, {
    name: 'Ding Repair',
    url: '/dingrepair',
  }, {
    name: 'Press',
    url: '/press',
  }, {
    name: 'Retreats',
    url: '/retreats',
  }, {
    name: 'Camping',
    url: '/camping',
  }, {
    name: 'Contact',
    url: '/contact',
  },
];

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose(url) {
    this.setState({ open: false });
    browserHistory.push(url);
  }

  render() {
    const icons = (
      <div style={{ display: 'inline-flex', marginLeft: '-35%', width: '90%' }}>
        <a href="https://www.yelp.com/biz/aloha-brothers-surf-lessons-venice" target="blank"><img src={Yelp} alt="yelp icon" /></a>
        <a href="https://www.tripadvisor.com/Attraction_Review-g32655-d6592254-Reviews-Aloha_Brothers_Surf_Lessons-Los_Angeles_California.html" target="blank"><img src={Tripadvisor} alt="tripadvisor icon" style={{ paddingLeft: '15%' }} /></a>
        <a href="https://www.thumbtack.com/ca/venice/surf-lessons/surf-instructor" target="blank"><img src={Thumbtack} alt="thumbtack icon" style={{ paddingLeft: '15%' }} /></a>
        <a href="https://www.facebook.com/AlohaBrothersSurfLessons" target="blank"><img src={Facebook} alt="facebook icon" style={{ paddingLeft: '15%' }} /></a>
        <a href="https://www.instagram.com/nickfowler9/" target="blank"><img src={Instagram} alt="instagram icon" style={{ paddingLeft: '15%' }} /></a>
      </div>
      );
    const brand = <A href="/">Aloha Brothers Surf Lessons</A>;
    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0' }}>
          <StyledAppBar
            title={brand}
            titleStyle={{ textDecoration: 'none' }}
            iconElementLeft={<img src={Menu} alt="menu icon" />}
            iconStyleLeft={{ padding: '1.3%' }}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={icons}
            iconStyleRight={{ marginTop: '2%', marginRight: '1.5%' }}
          />
          <StyledDrawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
          >
            {items.map((item, idx) => {
              return (
                <MenuItem key={idx} onTouchTap={this.handleClose.bind(null, item.url)}>{item.name}</MenuItem>
              );
            })}
          </StyledDrawer>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;
