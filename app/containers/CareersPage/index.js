/*
 *
 * CareersPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { selectCareers, selectApplication } from './selectors';
import { createApplication, openModal, closeModal } from './actions';
import MediaQuery from 'react-responsive';
import Nav from 'components/common/Nav';
import NavXL from 'components/common/NavXL';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import { Image } from 'cloudinary-react';
import CareerFormContainer from './CareerFormContainer';
import CareerInfo from 'components/careers/CareerInfo';
import CareerModal from 'components/careers/CareerModal';



export class CareersPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('clicked')
    e.preventDefault()
    this.props.createApplication();
  }

  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - Careers"
          meta={[
            { name: 'description', content: 'Are you reliable? Do you rip at surfing? Become an Aloha Brothers surf instructor!' },
          ]}
        />
        <MediaQuery minWidth={768} maxWidth={1823}>
          <Nav />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <div style={{ height: '3em' }}></div>
        </MediaQuery>
        <MediaQuery maxWidth={1823}>
          <div className="container">
            <div className="row">
              <CareerFormContainer
                handleSubmit={this.handleSubmit}
                modalIsOpen={this.props.modalIsOpen}
                openModal={this.props.openModal}
                closeModal={this.props.closeModal}
              />
              <CareerInfo />
              <CareerModal
                isOpen={this.props.modalIsOpen}
                closeModal={this.props.closeModal}
              />
            </div>
          </div>
        </MediaQuery>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const careersState = selectCareers(state);
  const modalIsOpen = careersState.get('modalIsOpen');
  return {
    modalIsOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createApplication: () => dispatch(createApplication()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CareersPage);

// <MediaQuery minWidth={1824}>
//   <NavXL />
//   <div className="container" style={{ width: '90%' }}>
//     <div className="row" style={{ paddingTop: '5%' }}>
//       <div className="col-sm-4">
//         <Image className="item" cloudName="kurzweg" publicId="portugal1" width="400" alt="Aloha Brothers on Canadian television" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
//       </div>
//       <div className="col-sm-4">
//         <Image className="item" cloudName="kurzweg" publicId="portugal2" width="400" alt="Aloha Brothers on Dutch television" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '5%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
//       </div>
//       <div className="col-sm-4">
//         <Image className="item" cloudName="kurzweg" publicId="portugal3" width="400" alt="Aloha Brothers on Dutch television" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '5%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
//       </div>
//     </div>
//     <div className="row">
//       <CareerFormContainerXL
//         handleSubmit={this.handleSubmit}
//         modalIsOpen={this.props.modalIsOpen}
//         openModal={this.props.openModal}
//         closeModal={this.props.closeModal}
//       />
//       <CareerInfoXL />
//       <CareerModal
//         isOpen={this.props.modalIsOpen}
//         closeModal={this.props.closeModal}
//       />
//     </div>
//   </div>
// </MediaQuery>
