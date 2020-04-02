import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function SubmissionModal(props) {
	const [show, setShow] = useState(false);
	const verifyCards = props.verifyCards;

	const [number, setNumber] = useState();
	//const [secondNumber, setSecondNumber] = useState();
	const [finalNumber, setFinalNumber] = useState();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function onFirstNumberChange(e) {
		setNumber(parseInt(e.target.value));
	}

	// function onSecondNumberChange(e) {
	// 	setSecondNumber(parseInt(e.target.value));
	// }

	function onFinalNumberChange(e) {
		setFinalNumber(parseInt(e.target.value));
	}

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Enter Answer
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
				<Modal.Body>
					<input
						onChange={onFirstNumberChange}
						style={{ width: "20rem" }}
						id="answer"
						type="number"
						placeholder="Enter answer to check"
					/>
					<br />
					{/* <input
						onChange={onSecondNumberChange}
						style={{ width: "20rem" }}
						id="answer"
						type="number"
						placeholder="Enter second number to check"
					/> */}
					<h1>OR</h1>
					<br />
					<input
						onChange={onFinalNumberChange}
						style={{ width: "20rem" }}
						id="answer"
						type="number"
						placeholder="Enter final number to check"
					/>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							verifyCards(number, finalNumber);
							setShow(false);
						}}
					>
						check
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
