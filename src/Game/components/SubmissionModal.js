import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function SubmissionModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Check Deck</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter number to check</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            check
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
