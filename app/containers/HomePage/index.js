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
import { connect } from 'react-redux';
import Nav from 'components/common/Nav';
import { push } from 'react-router-redux';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(e, url) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>
        <Nav
          onClick={this.handleNav}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    moveLocation: (url) => dispatch(push(url)),
  }
};

export default connect(null, mapDispatchToProps)(HomePage);

