import React, { useState } from "react";
import ObjectCard from "./ObjectCard/ObjectCard";
import Timer from "./Timer";
import RoomCard from "./RoomCard/RoomCard";
import SubmissionModal from "./SubmissionModal";
import { Row, Col } from "react-bootstrap";

export default function MainGame() {
	let Cards = [
		{
			name: "key",
			number: 10,
			text:
				"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		},

		{
			name: "Table",
			number: 21,
			text:
				"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		},
		{
			name: "Board",
			number: 31,
			text:
				"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		},
		{
			name: "knife",
			number: 9,
			text:
				"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		}
	];
	const roomDetails = {
		name: "office",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	};

	let roundOneAnswer = {
		name: "Correct",
		number: 19,
		text: "Round 1 correct"
	};
	let roundTwoAnswer = {
		name: "Correct",
		number: 52,
		text: "Round 2 correct"
	};
	let roundThreeAnswer = {
		name: "Correct",
		number: 71,
		text: "Round 3 correct"
	};

	let finalAnswer = { name: "Correct", number: 1234, text: "YOU WIN!" };

	const [activeCards, setActiveCards] = useState(Cards);

	function verifyCards(firstNumber, secondNumber, finalNumber) {
		parseInt(firstNumber);
		parseInt(secondNumber);
		if (finalNumber !== undefined) {
			if (finalAnswer.number === finalNumber) {
				alert("You WIN");
			} else {
				alert("You loose");
			}
		} else {
			let sum = firstNumber + secondNumber;
			//Round1
			if (activeCards.length === 4) {
				console.log("Round 1");
				if (roundOneAnswer.number === sum) {
					for (let i = 0; i < activeCards.length; i++) {
						if (activeCards[i].number === firstNumber) {
							activeCards.splice(i, 1);
						} else if (activeCards[i].number === secondNumber) {
							activeCards.splice(i, 1);
						}
					}
					activeCards.push(roundOneAnswer);
					const n = [];
					Array.prototype.push.apply(n, activeCards);
					setActiveCards(n);
				} else {
					alert("incorrect");
				}

				//Round2
			} else if (activeCards.length === 3) {
				//		console.log(activeCards);
				console.log(activeCards.length);
				console.log("Round 2");
				if (roundTwoAnswer.number === sum) {
					for (let i = 0; i < activeCards.length; i++) {
						if (activeCards[i].number === firstNumber) {
							activeCards.splice(i, 1);
						} else if (activeCards[i].number === secondNumber) {
							activeCards.splice(i, 1);
						}
					}
					activeCards.splice(0, 1);
					activeCards.push(roundTwoAnswer);
					const n2 = [];
					Array.prototype.push.apply(n2, activeCards);
					setActiveCards(n2);
				} else {
					alert("incorrect");
				}
			}
			//Round3
			else if (activeCards.length === 2) {
				console.log("Round 3");
				if (roundThreeAnswer.number === sum) {
					for (let i = 0; i < activeCards.length; i++) {
						if (activeCards[i].number === firstNumber) {
							activeCards.splice(i, 1);
						} else if (activeCards[i].number === secondNumber) {
							activeCards.splice(i, 1);
						}
					}
					activeCards.splice(0, 1);
					activeCards.push(roundThreeAnswer);
					const n3 = [];
					Array.prototype.push.apply(n3, activeCards);
					setActiveCards(n3);
				} else {
					alert("incorrect");
				}
			}
		}
	}

	return (
		<>
			<Timer></Timer>
			<RoomCard details={roomDetails}></RoomCard>

			<Row>
				{activeCards.map(c => (
					<>
						<Col md={3}>
							<ObjectCard card={c}></ObjectCard>
						</Col>
					</>
				))}
			</Row>

			<br />
			<SubmissionModal verifyCards={verifyCards}></SubmissionModal>
		</>
	);
}
