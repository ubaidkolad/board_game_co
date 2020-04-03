import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function SubmissionModal(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	//const handleShow = () => setShow(true);

	console.log(props.modal);

	if (props.modal === true) {
		setShow(true);
		alert("aagaya yaha bhi");
	}

	return (
		<>
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
				<Modal.Body>okok</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Check</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
