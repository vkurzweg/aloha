/**
*
* SuccessModal
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Modal, Button } from 'antd';

function SuccessModal(props) {
  return (
    <div>
      <Modal
        title="Message Sent!"
        visible={props.modalIsOpen}
        onOk={props.closeModal}
        footer={[
            <Button key="submit" type="primary" size="large" onClick={props.closeModal}>
              Dismiss
            </Button>,
          ]}
      >
        <p style={{ padding: '5%', fontSize: '16px' }}>Thanks for contacting us. <br /> We'll respond to your inquiry within 24 hours.</p>
      </Modal>
    </div>
  );
}

SuccessModal.propTypes = {

};

export default SuccessModal;
