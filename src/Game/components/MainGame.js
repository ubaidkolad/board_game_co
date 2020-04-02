import React, { useState } from "react";
import ObjectCard from "./ObjectCard/ObjectCard";
import Timer from "./Timer";
import RoomCard from "./RoomCard/RoomCard";
import SubmissionModal from "./SubmissionModal";
import { Row, Col } from "react-bootstrap";
import Office from "./../../img/Round 1/office.jpg";
import key from "./../../img/Round 1/key.jpg";
import lockedCabinet from "./../../img/Round 1/cabinet.jpg";
import computerOff from "./../../img/Round 1/computer_off.jpg";
import door from "./../../img/Round 1/door.jpg";
import pyramid from "./../../img/Round 1/grid.jpg";
import wallet from "./../../img/Round 1/wallet.jpg";
import cabinetUnlocked from "./../../img/Round 1/cabinet_unlocked.jpg";
import box from "./../../img/Round 1/box.jpg";

export default function MainGame() {
	let Cards = [
		{
			name: "Key",
			number: 22,
			text:
				"A key kept on the table near the desktop. Did someone forget to take this? Wonder what this key can open?",
			imgURL: key
		},

		{
			name: "Locked Cabinet",
			number: 14,
			text:
				"Breaking this open will cause a lot of noise and I don’t want to attract unnecessary attention. There should be a better way",
			imgURL: lockedCabinet
		},
		{
			name: "A Grid",
			number: 67,
			text: "A grid with pins 5 cm apart and some black numbers.",
			imgURL: pyramid
		},
		{
			name: "Door",
			number: 21,
			text:
				"This is the exit door. It is controlled by a digital code. Look around the room for clues to get the correct code",
			imgURL: door
		},
		{
			name: "Computer",
			number: 42,
			text:
				"A Desktop. There’s no electricity. \n If I can get this computer working probably can get some vital information. But seems the power is cut. Need to restore the power first to get this computer on.",
			imgURL: computerOff
		},
		{
			name: "Pieces of Pyramid",
			number: 7,
			text:
				"I wonder what these pieces are and the dots on them wonder what they resemble? These pieces look out of place but I am sure they are here for a reason. Can they form a structure?  ",
			imgURL: pyramid
		},
		{
			name: "Wallet",
			number: 16,
			text:
				". The wallet can be of the suspect. However there isn’t much in the wallet, no identity card, only the photo of a girl with a cake. Could be his daughter’s photo",
			imgURL: wallet
		}
	];
	const roomDetails = {
		name: "office",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		imgURL: Office
	};

	let ra = [{
		name: "Cabinet Unlocked",
		number: 36,
		text: " The cabinet is open. Look closely to two interesting elements.",
		imgURL: cabinetUnlocked
	},
	{
		name: "Correct",
		number: 52,
		text: "Round 2 correct"
	},{
		name: "Correct",
		number: 71,
		text: "Round 3 correct"
	}]

	let finalAnswer = {
		name: "Computer Unlocks",
		number: 2011,
		text: "WELL DONE!"
	};

	const [activeCards, setActiveCards] = useState(Cards);
	const [penalty, setPenalty] = useState(false);
	const [roundAnswers,setroundAnswers] = useState(ra)

	function verifyCards(number, finalNumber) {
		if (finalNumber !== undefined) {
			if (finalAnswer.number === finalNumber) {
				alert("You WIN");
			} else {
				alert("You loose");
			}
		} else {
			if (number === roundAnswers[0].number) {
				console.log("Correct!");
				setActiveCards([...activeCards,roundAnswers[0]]);
				roundAnswers.splice(0,1)
				setroundAnswers(roundAnswers)
			}
		}
	}

	return (
		<>
			<p>Penalty:{penalty.toString()}</p>
			<Timer penalty={penalty}></Timer>
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

			<Row>
				<Col md={6}>
					<SubmissionModal verifyCards={verifyCards}></SubmissionModal>
				</Col>
			</Row>
		</>
	);
}
