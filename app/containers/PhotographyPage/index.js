/*
 *
 * GalleryPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { createStructuredSelector } from 'reselect';
// import makeSelectGalleryPage from './selectors';
import Nav from 'components/common/Nav';
import LightboxContainer from 'components/photography/LightboxContainer';
import Footer from 'components/common/Footer';
import Palm from 'assets/icons/palmtree_green1.png';


export class PhotographyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <Helmet
          title="PhotographyPage"
          meta={[
            { name: 'description', content: 'Description of GalleryPage' },
          ]}
        />
        <Nav />
        <img src={Palm} role="presentation" style={{ display: 'block', margin: '0 auto', marginTop: '6%', marginBottom: '1%', height: '40px' }} />
        <h3 style={{ textAlign: 'center', color: '#6FEAB5', letterSpacing: '5px', textTransform: 'uppercase' }}>Photography</h3>
        <div style={{ fontSize: '16px', fontFamily: 'Josefin Sans', width: '75%', margin: '0 auto', textAlign: 'center', marginTop: '2%' }}>
          <p style={{ fontFamily: 'Josefin Sans' }}>Add professional photography to your lesson</p>
          <div style={{ width: '50%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%' }}>
            <table className="table" style={{ width: '100%', textAlign: 'center' }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 'bold', fontSize: '16px' }}>3-5 shots</td>
                  <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$75</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', fontSize: '16px' }}>5-7 shots</td>
                  <td style={{ fontWeight: 'bold', fontSize: '16px' }}>$100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <LightboxContainer />
        <Footer />
      </div>
    );
  }
}

PhotographyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   GalleryPage: makeSelectGalleryPage(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PhotographyPage);
