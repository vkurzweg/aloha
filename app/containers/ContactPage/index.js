/*
 *
 * ContactPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import ContactInfo from 'components/contact/ContactInfo';
import SuccessModal from 'components/contact/SuccessModal';
import { selectContact, selectForm } from './selectors';
import { createMessage, openModal, closeModal } from './actions';
import ContactFormContainer from './ContactFormContainer';
import Footer from 'components/common/Footer';


export class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createMessage();
  }

  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - Venice & O'ahu - Contact Us"
          meta={[
            { name: "description", content: "All levels, ages, and sizes welcome! Fill out our contact form or send us an email to book a surf lesson in Southern California or O'ahu, Hawaii." },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <div style={{ height: '3em' }}></div>
        </MediaQuery>
        <div className="container">
          <div className="row">
            <ContactFormContainer
              handleSubmit={this.handleSubmit}
              modalIsOpen={this.props.modalIsOpen}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
              isCreateFailed={this.props.isCreateFailed}
            />
            <ContactInfo />
            <SuccessModal
              modalIsOpen={this.props.modalIsOpen}
              closeModal={this.props.closeModal}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ContactPage.propTypes = {
};

function mapStateToProps(state) {
  const contactState = selectContact(state);
  const isCreateFailed = contactState.get('isCreateFailed');
  const modalIsOpen = contactState.get('modalIsOpen');
  return {
    isCreateFailed,
    modalIsOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createMessage: () => dispatch(createMessage()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
