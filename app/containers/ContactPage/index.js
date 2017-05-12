/*
 *
 * ContactPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import { selectContact, selectForm } from './selectors';
import { createMessage, openModal, closeModal } from './actions';
import ContactFormContainer from './ContactFormContainer';
import ContactInfo from 'components/contact/ContactInfo';
import SuccessModal from 'components/contact/SuccessModal';


export class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ContactPage"
          meta={[
            { name: 'description', content: 'Description of ContactPage' },
          ]}
        />
        <Nav />
        <div className="container">
          <div className="row">
            <ContactFormContainer
              isModalOpen={this.props.isModalOpen}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
              createMessage={this.props.createMessage}
              isCreateFailed={this.props.isCreateFailed}
            />
            <ContactInfo />
            <SuccessModal />
          </div>
        </div>
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
