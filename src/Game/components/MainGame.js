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

	const [selectedCards, setSelectedCards] = useState([])

	const [activeCards, setActiveCards] = useState(Cards);

	function selectCard(id){
		if (selectedCards.indexOf(id) === -1){

			if (selectedCards.length < 2) {
				setSelectedCards([...selectedCards, id]);
			} else {
				setSelectedCards([id, selectedCards[0]]);
			}
		}
		else{
			alert('already selected')
		}
		
	}

	const roomDetails = {
		name: "office",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	};
	console.log(selectedCards);

	return (
		<>
			<Timer></Timer>
			<RoomCard details={roomDetails}></RoomCard>

			<Row>
				{activeCards.map(c => (
					<>
						<Col md={3}>
							<ObjectCard card={c} selectCard={selectCard}></ObjectCard>
						</Col>
					</>
				))}
			</Row>
			<SubmissionModal></SubmissionModal>
		</>
	);
}
