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


// const muiTheme = getMuiTheme({
//   appPalette: {
//     primary1Color: 'grey900',
//   }
// });

const StyledAppBar = styled(AppBar)`
  width: 100%;
  background: #2bf7d0;
  background: -moz-linear-gradient(left, #2bf7d0 0%, #8ae5ab 95%);
  background: -webkit-linear-gradient(left, #2bf7d0 0%,#8ae5ab 95%);
  background: linear-gradient(to right, #2bf7d0 0%,#8ae5ab 95%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2bf7d0', endColorstr='#8ae5ab',GradientType=1 );
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
    name: 'Gallery',
    url: '/gallery',
  }, {
    name: 'Press',
    url: '/press',
  }, {
    name: 'Retreats',
    url: '/retreats',
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
    this.setState({open: !this.state.open})
  }

  handleClose(url, e) {
    console.log(url, this.props.onClick)
    this.setState({open: false});
    this.props.onClick(url);
  }

  render() {
    let display = 'none';
    (this.state.showMenu) ? display = 'block' : display = 'none';
    const icons = (
      <div style={{ display: 'inline-flex', marginLeft: '-40%', width: '90%' }}>
        <img src={Yelp} alt="yelp icon" />
        <img src={Tripadvisor} alt="tripadvisor icon" style={{ paddingLeft: '15%' }} />
        <img src={Thumbtack} alt="thumbtack icon" style={{ paddingLeft: '15%' }} />
        <img src={Facebook} alt="facebook icon" style={{ paddingLeft: '15%' }} />
        <img src={Instagram} alt="instagram icon" style={{ paddingLeft: '15%' }} />
      </div>
      );
    const brand = <a href="/" style={{ textTransform: 'uppercase', fontSize: '16px', color: 'black', textDecoration: 'none' }}>Aloha Brothers Surf Lessons</a>;
    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', zIndex: '10' }}>
          <StyledAppBar
            title={brand}
            titleStyle={{ textDecoration: 'none' }}
            iconElementLeft={<img src={Menu} alt="menu icon" />}
            iconStyleLeft={{ padding: '1.3%' }}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={icons}
            iconStyleRight={{ marginTop: '2%', marginRight: '1.5%' }}
          />
          <Drawer
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
          </Drawer>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;
