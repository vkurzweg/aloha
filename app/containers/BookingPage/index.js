/*
 *
 * BookingPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import Venice from 'assets/images/venice_background.jpg';
import Palmtree from 'assets/icons/palmtree1.png';
import Footer from 'components/common/Footer';


export class BookingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="BookingPage"
          meta={[
            { name: 'description', content: 'Description of BookingPage' },
          ]}
        />
        <Nav />
        <div className="container">
          <div className="row" style={{ width: '100%' }}>

            <div className="col-sm-3" style={{ marginTop: '6%' }}>
              <img src={Venice} alt="walking with surfboards in Venice" style={{ padding: '2%', height: '500px' }} />
            </div>

            <div className="col-sm-8" style={{ float: 'right' }}>
              <h3 style={{ textAlign: 'center', color: '#7C4DFF', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '12%' }}>Rates & Packages</h3>
              <div style={{ fontSize: '16px', fontFamily: 'Josefin Sans', width: '75%', margin: '0 auto', textAlign: 'center', marginTop: '2%' }}>
                <p style={{ fontFamily: 'Josefin Sans' }}>All lessons last 90 minutes (water time)</p>
                <hr style={{ width: '50%', display: 'block', margin: '0 auto', marginTop: '2%', marginBottom: '2%' }} />
                <p style={{ fontFamily: 'Josefin Sans' }}>Surfboard & wetsuit included at no extra charge</p>
              </div>
              <h4 style={{ textAlign: 'center', backgroundColor: '#7C4DFF', color: '#FFC233', padding: '1%', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '2%', fontWeight: 'bold' }}>Beginner & Intermediate</h4>
              <div className="container" style={{ width: '100%', marginTop: '5%' }}>
                <div className="row">

                <div className="col-xs-6">
                  <h5 style={{ fontSize: '16px', color: '#7C4DFF', textAlign: 'center', letterSpacing: '5px', textTransform: 'uppercase', fontStyle: 'bold' }}>Group Lessons*</h5>
                  <table className="table" style={{ textAlign: 'center', marginTop: '5%', height: '100%' }}>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>1 person</td>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$85</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>2 people</td>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$170</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>3 people</td>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$255</td>
                      </tr>
                    </tbody>
                  </table>
                  <ul style={{ textAlign: 'left', fontSize: '14px', marginLeft: '10%', marginTop: '5%' }}>
                    <li>* 1 instructor for up to 4 people</li>
                    <li>We create the group if you don't have at least 3 people</li>
                    <li>Most popular option!</li>
                  </ul>
                </div>

                <div className="col-xs-6">
                  <h5 style={{ fontSize: '16px', color: '#7C4DFF', textAlign: 'center', letterSpacing: '5px', textTransform: 'uppercase', fontStyle: 'bold' }}>Private Lessons</h5>
                  <table className="table" style={{ width: '85%', textAlign: 'center', marginTop: '5%' }}>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>1 person</td>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$160</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>2 people</td>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$255</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>Family (5 max)</td>
                        <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$510</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                </div>
              </div>

              <h4 style={{ textAlign: 'center', backgroundColor: '#7C4DFF', color: '#FFC233', padding: '1%', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '5%', fontWeight: 'bold' }}>Packages</h4>
              <h5 style={{ fontSize: '16px', color: '#7C4DFF', textAlign: 'center', letterSpacing: '5px', textTransform: 'uppercase', fontStyle: 'bold', marginTop: '5%' }}>5-Lesson Package* <span style={{ borderRadius: '3px', backgroundColor: '#6FEAB5', color: 'white', textTransform: 'none', border: '1px solid #8AE5AB', padding: '1%', letterSpacing: '1px' }}><img src={Palmtree} alt="palmtree" style={{ height: '25px'}} />Best Value!</span></h5>
              <div style={{ width: '50%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%' }}>
                <table className="table" style={{ width: '100%', textAlign: 'center' }}>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: 'bold', fontSize: '16px' }}>5 standard group lessons</td>
                      <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$375</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul style={{ textAlign: 'left', fontSize: '14px', marginLeft: '7%', marginTop: '2%', width: '80%'}}>
                <li>* <b>9 - 10:30</b> Earliest session M-F</li>
                <li style={{ marginTop: '3%' }}><b>Spring/Summer (March - Sept)</b> Lessons in this package only available Monday - Friday</li>
                <li style={{ marginTop: '3%' }}>We try our best to work with your schedule. If we can't add another person to make your lesson into a group lesson within 24 hours, we will notify you that we need to reschedule.</li>
              </ul>
              <h5 style={{ fontSize: '16px', color: '#7C4DFF', textAlign: 'center', letterSpacing: '5px', textTransform: 'uppercase', fontStyle: 'bold', marginTop: '5%' }}>4-Lesson Package*</h5>
              <div style={{ width: '50%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%' }}>
                <table className="table" style={{ width: '100%', textAlign: 'center' }}>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: 'bold', fontSize: '16px' }}>3 standard group lessons & 1 private lesson</td>
                      <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$375</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul style={{ textAlign: 'left', fontSize: '14px', marginLeft: '7%', marginTop: '2%', width: '80%', marginBottom: '5%'}}>
                <li>* <b>Availablity</b> Same as 5-lesson package</li>
              </ul>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

BookingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BookingPage);
