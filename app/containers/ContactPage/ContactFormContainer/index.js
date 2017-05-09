/*
 *
 * ContactFormContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class ContactFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-sm-6" style={{ marginTop: '15%' }}>
        <h4 style={{ textAlign: 'center', color: '#7C4DFF', padding: '2%', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '2%', fontWeight: 'bold' }}>Send us a message</h4>
          <form>
            <div className="control-group form-group">
              <div className="controls">
                <label htmlFor="name" >Full Name</label>
                <input type="text" className="form-control" required data-validation-required-message="Please enter your name." />
                <p className="help-block"></p>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label htmlFor="cell number">Cell Number</label>
                  <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label htmlFor="message" >Type of Lesson and # People Booking</label>
                  <textarea rows="10" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength="999" ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', backgroundColor: '#7C4DFF', color: '#FFC233', textTransform: 'uppercase', border: 'none', padding: '3%' }}>Send Message</button>
            </div>
          </form>
        </div>
    );
  }
}

ContactFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ContactFormContainer);
