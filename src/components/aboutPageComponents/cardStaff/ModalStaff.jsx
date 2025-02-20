import React from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { PrimaryButton } from "../../common/PrimaryButton";
// import { ButtonStaff } from "./CardStaff";

const StyledModal = styled(Modal)`
  .modal-header {
    justify-content: space-between;
  }
  .modal-header .btn-close {
    margin: 0;
    /* color: var(--main-color) !important; */
    color: red !important;
  }
  .modal-footer{
    justify-content: flex-start;
  }
`;

function ModalStaff(props) {
  let data = props.data;
  return (
    <>
      <StyledModal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <PrimaryText>{data.name}</PrimaryText>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SecondaryText>{data.job}</SecondaryText>
          <SecondaryText>{data.more}</SecondaryText>
        </Modal.Body>
        <Modal.Footer>
          <PrimaryButton onClick={props.onHide}>إغلاق</PrimaryButton>
        </Modal.Footer>
      </StyledModal>
    </>
  );
}

export default ModalStaff;
