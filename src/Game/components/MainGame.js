import React, { useState } from "react";
import ObjectCard from "./ObjectCard/ObjectCard";
import Timer from "./Timer";
import RoomCard from "./RoomCard/RoomCard";
import SubmissionModal from "./SubmissionModal";
import { Row, Col } from "react-bootstrap";
import { ALL_CARDS, FINAL_ASNWER, LEVELS, START_CARDS } from "../Data";

export default function MainGame() {
	const roomDetails = {
		name: "Office",
		description:
			"In this adventure, you are a top ranked detective. You are extremely close to solving a high-class murder case. A tip leads you to the office space of a suspect. The clue that you want to gather might be the last missing puzzle piece to connect the dots. Without any prior preparation you rush to the suspect’s office. Its late in the night, so you have managed to sneak in without being noticed by the cameras and security guards. You enter the office room AND slam, the door shut on its own. You try to open it again but it won’t open. Seem like you have fallen into a trap. You have limited time to escape the room. GOOD LUCK. ",
		imgURL: "office.jpg"
	};

	const [activeCards, setActiveCards] = useState(
		START_CARDS.map(i => ALL_CARDS[i])
	);
	const [penalty, setPenalty] = useState(false);
	const [roundAnswers, setroundAnswers] = useState(LEVELS);

	function verifyCards(number, finalNumber) {
		if (finalNumber !== undefined) {
			if (FINAL_ASNWER === finalNumber.toString()) {
				alert("You WIN");
			} else {
				alert("You loose");
			}
		} else {
			if (number.toString() === roundAnswers[0].key) {
				setActiveCards([
					...activeCards,
					...roundAnswers[0].reveled_cards.map(i => ALL_CARDS[i])
				]);
				roundAnswers.splice(0, 1);
				setroundAnswers(roundAnswers);
			} else {
				setPenalty(true);
			}
		}
	}

	function discard(cardNumber) {
		console.log(cardNumber);
		console.log(activeCards);
		for (let i = 0; i < activeCards.length; i++) {
			if (activeCards[i].number === cardNumber) {
				activeCards.splice(i, 1);
			}
		}
		const removed = [];
		Array.prototype.push.apply(removed, activeCards);
		setActiveCards(removed);
	}
	return (
		<>
			<Timer penalty={penalty} setPenalty={setPenalty}></Timer>
			<RoomCard details={roomDetails}></RoomCard>

			<Row>
				{activeCards.map(c => (
					<>
						<Col md={3}>
							<ObjectCard discard={discard} card={c}></ObjectCard>
						</Col>
					</>
				))}
			</Row>

			<br />

			<Row>
				<Col md={6}>
					<SubmissionModal verifyCards={verifyCards}></SubmissionModal>
				</Col>
			</Row>
		</>
	);
}
