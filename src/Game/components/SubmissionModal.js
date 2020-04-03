import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function SubmissionModal(props) {
  const [show, setShow] = useState(false);
  const verifyCards = props.verifyCards;

  const [number, setNumber] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onFirstNumberChange(e) {
    setNumber(parseInt(e.target.value));
  }

  return (
    <>
      {props.completed === false ? (
        <div style={{ marginBottom: "10 rem" }}>
          <Button variant="success" onClick={handleShow} size="lg" block>
            Enter Number
          </Button>
        </div>
      ) : null}

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "'Merienda One', cursive" }}>
            Check Deck
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            onChange={onFirstNumberChange}
            style={{ width: "20rem" }}
            id="answer"
            placeholder="Enter answer to check"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              verifyCards(number);
              setShow(false);
            }}
          >
            Check
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
