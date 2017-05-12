/**
*
* SuccessModal
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Modal } from 'antd';

function SuccessModal(props) {
  return (
    <div>
      <Modal title="Message Sent!" visible={props.modalIsOpen}
        onOk={props.closeModal} footer={null}
      >
        <p>Aloha, thanks for contacting us. Someone will be in touch with you shortly.</p>
      </Modal>
    </div>
  );
}

SuccessModal.propTypes = {

};

export default SuccessModal;
