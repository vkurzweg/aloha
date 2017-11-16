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
  font-size: 26px;
  color: black;

  &:hover {
    color: #FF80AB;
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
    const brand = <A href="http://www.alohabrothers.surf" target="blank" style={{ fontFamily: 'Lobster' }}>Aloha Brothers Surf Lessons <Image cloudName="kurzweg" publicId="aloha_logo" quality="auto" width="35" responsive  /></A>;
    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0' }}>
          <StyledAppBar
            title={brand}
            titleStyle={{ textDecoration: 'none', marginTop: '-2%', textAlign: 'center' }}
            iconElementLeft={<Image cloudName="kurzweg" publicId="menu" responsive alt="menu icon" style={{ padding: '1%' }} />}
            iconStyleLeft={{ padding: '1%' }}
            onLeftIconButtonTouchTap={this.handleToggle}
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
            <A href="http://www.dingdelight.surf" target="blank" style={{ fontFamily: 'Lobster Two', textAlign: 'center', marginLeft: '8%', color: '#7C4DFF' }} >ding delight</A>
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

// const StyledAppBar = styled(AppBar)`

// background: -moz-linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* ff3.6+ */
// background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(124,77,255,1)), color-stop(100%, rgba(179,188,245,1))); /* safari4+,chrome */
// background: -webkit-linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* safari5.1+,chrome10+ */
// background: -o-linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* opera 11.10+ */
// background: -ms-linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* ie10+ */
// background: linear-gradient(45deg, rgba(124,77,255,1) 0%, rgba(179,188,245,1) 100%); /* w3c */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#B3BCF5', endColorstr='#7C4DFF',GradientType=1 ); /* ie6-9 */  `;



// const brand = <A href="/">Aloha Brothers Surf Lessons</A>;

