/*
 *
 * RetreatsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import { openModal, closeModal } from './actions';
import { selectRetreats } from './selectors';
import Nav from 'components/common/Nav';
import NavXL from 'components/common/NavXL';
import NavMobile from 'components/common/NavMobile';
import RetreatsContent from 'components/retreats/RetreatsContent';
import SignupModal from 'components/retreats/SignupModal';
import Footer from 'components/common/Footer';


export class RetreatsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicked')
    this.props.openModal();
  }

  render() {
    return (
      <div>
        <Helmet
          title="Aloha Brothers Surf & Language Retreats"
          meta={[
            { name: 'description', content: 'Learn more about Aloha Brothers surf retreats and sign up for our waiting list.' },
          ]}
        />
        <MediaQuery minWidth={1824}>
          <NavXL />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1823}>
          <Nav />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <div style={{ height: '2em' }}></div>
        </MediaQuery>
        <RetreatsContent
          modalIsOpen={this.props.modalIsOpen}
          handleClick={this.handleClick}
          closeModal={this.props.closeModal}
        />
        <SignupModal
          isOpen={this.props.modalIsOpen}
          closeModal={this.props.closeModal}
        />
        <Footer />
      </div>
    );
  }
}

RetreatsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const retreatsState = selectRetreats(state);
  const modalIsOpen = retreatsState.get('modalIsOpen');
  return {
    modalIsOpen,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RetreatsPage);
