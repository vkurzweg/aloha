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
import { browserHistory } from 'react-router';
import { Image } from 'cloudinary-react';


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

  &:hover {
    color: #FF80AB;
    text-decoration: none;
  }
`;

const items = [
  {
    name: 'Rates & Booking',
    url: '/rates',
  }, {
    name: 'FAQ',
    url: '/faq',
  }, {
    name: 'Photography',
    url: '/gallery',
  }, {
    name: 'Instructors - California',
    url: '/instructors',
  }, {
    name: 'Instructors - Hawaii',
    url: '/instructors-hawaii',
  }, {
    name: 'Ding Repair',
    url: '/dingrepair',
  }, {
    name: 'Retreats',
    url: '/retreats',
  }, {
    name: 'Press',
    url: '/press',
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
      <div style={{ display: 'inline-flex', marginLeft: '-5%', width: '50%' }}>
        <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.yelp.com/biz/aloha-brothers-surf-lessons-venice" target="blank"><Image cloudName="kurzweg" publicId="yelp-min" responsive alt="yelp icon" /></a>
        <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.tripadvisor.com/Attraction_Review-g32655-d6592254-Reviews-Aloha_Brothers_Surf_Lessons-Los_Angeles_California.html" target="blank"><Image cloudName="kurzweg" publicId="tripadvisor-min" responsive alt="tripadvisor icon" style={{ paddingLeft: '15px' }} /></a>
        <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="" target="blank"><Image cloudName="kurzweg" publicId="google" responsive alt="google icon" style={{ paddingLeft: '15px' }} /></a>
        <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.thumbtack.com/ca/venice/surf-lessons/surf-instructor" target="blank"><Image cloudName="kurzweg" publicId="thumbtack-min" responsive alt="thumbtack icon" style={{ paddingLeft: '15px' }} /></a>
        <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.facebook.com/AlohaBrothersSurfLessons" target="blank"><Image cloudName="kurzweg" publicId="facebook-min" responsive alt="facebook icon" style={{ paddingLeft: '15px' }} /></a>
        <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="https://www.instagram.com/nickfowler9/" target="blank"><Image cloudName="kurzweg" publicId="instagram-min" responsive alt="instagram icon" style={{ paddingLeft: '15px' }} /></a>
      </div>
      );
    const brand = <A href="/">Aloha Brothers Surf Lessons</A>;
    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0' }}>
          <StyledAppBar
            title={brand}
            titleStyle={{ textDecoration: 'none' }}
            iconElementLeft={<Image cloudName="kurzweg" publicId="menu" responsive alt="menu icon" />}
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


// {
//     name: 'Ding Repair',
//     url: '/dingrepair',
//   },  {
//     name: 'Retreats',
//     url: '/retreats',
//   }, {
//     name: 'Camping',
//     url: '/camping',
//   },
