import React, { useState, useEffect } from "react";
import ObjectCard from "./ObjectCard/ObjectCard";
import Timer from "./Timer";
import RoomCard from "./RoomCard/RoomCard";
import SubmissionModal from "./SubmissionModal";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { Trail, animated } from "react-spring/renderprops";
import Instructions from "./Instructions/Instructions";
import { withRouter, Redirect } from "react-router-dom";

import {
	ALL_CARDS,
	FINAL_ASNWER,
	LEVELS,
	START_CARDS,
	ROOM_DETAILS,
} from "../Data";

function MainGame(props) {
	const [activeCards, setActiveCards] = useState(
		START_CARDS.map((i) => ALL_CARDS[i])
	);
	const [show, setShow] = useState(false);
	const [roundAnswers, setroundAnswers] = useState(LEVELS);
	const [completed, setCompleted] = useState(false);
	const [secondElapsed, setSecondElapsed] = useState(1);
	const [endTime, setEndTime] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setSecondElapsed(secondElapsed + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [secondElapsed]);

	function verifyFinal(code) {
		if (code.toString() === FINAL_ASNWER.key) {
			alert("YOU WIN");
			setEndTime(true);
		} else {
			setSecondElapsed(secondElapsed + 180);
			alert("Wrong Answer 30 sec penalty");
		}
	}

	function verifyCards(number) {
		if (number.toString() === roundAnswers[0].key) {
			alert(roundAnswers[0].msg);
			setActiveCards(
				[
					...activeCards,
					...roundAnswers[0].reveled_cards.map((i) => ALL_CARDS[i]),
				].filter(
					(c) => roundAnswers[0].discarded_cards.indexOf(c.number) === -1
				)
			);

			roundAnswers.splice(0, 1);
			if (roundAnswers.length === 0) {
				setCompleted(true);
			}
			setroundAnswers(roundAnswers);
		} else {
			alert("Wrong Answer 30 sec penalty");
			setSecondElapsed(secondElapsed + 30);
		}
	}

	function hint() {
		if (typeof roundAnswers[0] !== "undefined") {
			alert(roundAnswers[0].hint);
		} else {
			alert(FINAL_ASNWER.hint);
		}
	}

	return (
		<>
			<div>
				<Trail
					items={ROOM_DETAILS}
					from={{ transform: "translate3d(-11100px,400px,500px)" }}
					to={{ transform: "translate3d(0px,20px,500px)" }}
				>
					{(ROOM_DETAILS) => (props) => (
						<div style={props} className="post">
							<Row>
								<Col md={2}>
									<Timer secondElapsed={secondElapsed}></Timer>
								</Col>
								<Col>
									<h3 style={{ fontFamily: "'Didact Gothic', sans-serif" }}>
										Using hints will result in 5 min penalty
									</h3>
								</Col>
								<Col md={3}>
									<Button
										onClick={() => {
											setSecondElapsed(secondElapsed + 300);
											hint();
										}}
										block
									>
										Hint
									</Button>
								</Col>
								<Col md={3}>
									<Button onClick={handleShow}>Instruction</Button>

									<Modal
										show={show}
										onHide={handleClose}
										size="lg"
										aria-labelledby="contained-modal-title-vcenter"
										centered
										style={{ textAlign: "center" }}
									>
										<Modal.Header closeButton>
											<Modal.Title
												style={{ fontFamily: "'Didact Gothic', sans-serif" }}
											>
												Instruction
											</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Instructions></Instructions>
										</Modal.Body>

										<Modal.Footer>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>
										</Modal.Footer>
									</Modal>
								</Col>
							</Row>
							<RoomCard
								completed={completed}
								details={ROOM_DETAILS}
								verifyFinal={verifyFinal}
							></RoomCard>
							<SubmissionModal
								completed={completed}
								verifyCards={verifyCards}
							></SubmissionModal>
						</div>
					)}
				</Trail>
				<Row style={{ paddingTop: "1rem" }}>
					<Trail
						items={activeCards}
						from={{ transform: "translate3d(11100px,400px,500px)" }}
						to={{ transform: "translate3d(0px,20px,500px)" }}
					>
						{(items) => (props) => (
							<Col md={3} style={{ paddingBottom: "3rem" }}>
								<animated.div style={props} className="h-100">
									<ObjectCard card={items}></ObjectCard>
								</animated.div>
							</Col>
						)}
					</Trail>
				</Row>
				);
				<Row style={{ paddingTop: "1rem" }}>
					<Trail
						items={activeCards}
						from={{ transform: "translate3d(11100px,400px,500px)" }}
						to={{ transform: "translate3d(0px,20px,500px)" }}
					>
						{(items) => (props) => (
							<Col md={3} style={{ paddingBottom: "3rem" }}>
								<animated.div style={props} className="h-100">
									<ObjectCard card={items}></ObjectCard>
								</animated.div>
							</Col>
						)}
					</Trail>
				</Row>
				{endTime ? (
					<Redirect
						to={{
							pathname: "/endgame",
							state: {
								s: secondElapsed,
							},
						}}
					/>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default withRouter(MainGame);
