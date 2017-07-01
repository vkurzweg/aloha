/*
 *
 * ContactFormContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import { toJS } from 'immutable';

export class CareerFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-sm-6" style={{ marginTop: '10%' }}>
        <h4 style={{ textAlign: 'center', color: '#7C4DFF', padding: '2%', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 'bold' }}>Careers</h4>
          <form onSubmit={this.props.handleSubmit} >
            <div className="control-group form-group">
              <div className="controls">
                <label htmlFor="name" >Full Name</label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  className="form-control"
                  required data-validation-required-message="Please enter your name."
                />
                <p className="help-block"></p>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label htmlFor="cell number">Cell Number</label>
                  <Field
                    name="cellNumber"
                    component="input"
                    type="tel"
                    className="form-control"
                    required data-validation-required-message="Please enter your phone number."
                  />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label htmlFor="email">Email Address</label>
                  <Field
                    name="email"
                    component="input"
                    type="email"
                    className="form-control"
                    required data-validation-required-message="Please enter your email address."
                  />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label htmlFor="message" >Tell us a little about yourself, including number of years surfing and special certifications</label>
                  <Field
                    name="message"
                    component="textarea"
                    rows="10" cols="100"
                    className="form-control"
                    required data-validation-required-message="Please enter your message" maxLength="999"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', backgroundColor: '#FF80AB', color: 'black', textTransform: 'uppercase', border: 'none', padding: '3%' }}>Send Message</button>
            </div>
          </form>
        </div>
    );
  }
}

CareerFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  createMessage: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

CareerFormContainer = reduxForm({
  form: 'career',
})(CareerFormContainer);

export default connect(null, mapDispatchToProps)(CareerFormContainer);
