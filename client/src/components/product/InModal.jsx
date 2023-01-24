import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";

const InModal = ({ show, handleClose,handleAppend }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Limit ingredients</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure about adding this ingredient? This increases the price of
        the bowl by 20%.!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAppend}>
          Yes, add it
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InModal;
