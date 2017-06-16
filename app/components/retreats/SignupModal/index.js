/**
*
* SignupModal
*
*/

import React from 'react';
// import styled from 'styled-components';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '20px',
  },
};


function SignupModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Retreat Waiting List"
      >
        <div style={{ width: '90%', margin: '0 auto' }}>
         <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmbOutee2SHBuyoMzrSr_dG6z46QH0rY7TmV4muK-sdxy9lg/viewform?embedded=true" style={{ width: '100%' }} width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
      </Modal>
    </div>
  );
}

SignupModal.propTypes = {

};

export default SignupModal;
