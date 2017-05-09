/*
 *
 * ContactPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import { selectContact } from './selectors';
import { createMessage, setName, setEmail, setNumber, setBody } from './actions';
import ContactFormContainer from './ContactFormContainer';


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
              setName={this.props.setName}
              setEmail={this.props.setEmail}
              setNumber={this.props.setNumber}
              setBody={this.props.setBody}
              createMessage={this.props.createMessage}
              isCreateFailed={this.props.isCreateFailed}
              userName={this.props.userName}
            />

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
  const userName = contactState.get('name');
  return {
    isCreateFailed,
    userName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: (name) => dispatch(setName(name)),
    setEmail: (email) => dispatch(setEmail(email)),
    setNumber: (number) => dispatch(setNumber(number)),
    setBody: (body) => dispatch(setBody(body)),
    createMessage: () => dispatch(createMessage()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
