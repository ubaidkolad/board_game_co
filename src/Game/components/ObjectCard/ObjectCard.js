import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ObjectCard.css";
import { Row, Col } from "react-bootstrap";

export default function ObjectCard(props) {
	const details = props.card;
	const discard = props.discard;

	return (
		<Card
			className="card"
			style={{
				marginBottom: "12px",
				backgroundColor: "#A9E4EA",
				textAlign: "left"
			}}
			//	onClick={() => selectCard(details.number)}
		>
			<Card.Img
				class="img-fluid"
				variant="top"
				src={`${window.location.origin}/assets/images/${details.imgURL}`}
			/>
			<Card.Body style={{ backgroundColor: "#242323", color: "#A9E4EA	" }}>
				<Card.Title style={{ fontFamily: "'Merienda One', cursive" }}>
					{details.name}
				</Card.Title>
				<Row>
					<Col md={10}>
						<Card.Text
							style={{
								fontSize: "12px",
								color: "#A9E4EA",
								fontFamily: "'Comfortaa', cursive"
							}}
						>
							{details.text}
						</Card.Text>
					</Col>

					<Col md={1}>
						<button
							className="btn"
							style={{
								backgroundColor: "#A9E4EA",
								fontSize: "1.3rem",
								boxShadow: "0px 1px 10px #999"
							}}
						>
							{details.number}
						</button>
					</Col>
				</Row>
				<br />
				<Button onClick={() => discard(details.number)} variant="danger">
					Discard
				</Button>
			</Card.Body>
		</Card>
	);
}
