import React from "react";
import { Card } from "react-bootstrap";
import "./ObjectCard.css";
import { Row, Col } from "react-bootstrap";

export default function ObjectCard(props) {
	const details = props.card;

	return (
		<Card
			className="h-100"
			style={{
				backgroundColor: "#A9E4EA",
				textAlign: "left",
			}}
		>
			<Card.Img
				className="img-fluid"
				variant="top"
				src={`${window.location.origin}/assets/images/${details.imgURL}`}
			/>
			<Card.Body style={{ backgroundColor: "#242323", color: "#A9E4EA	" }}>
				<Card.Title style={{ fontFamily: "'Didact Gothic', sans-serif" }}>
					{details.name}
				</Card.Title>
				<Row>
					<Col md={10}>
						<Card.Text
							style={{
								fontSize: "12px",
								color: "#A9E4EA",
								fontFamily: "'Comfortaa', cursive",
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
								boxShadow: "0px 1px 10px #999",
							}}
						>
							{details.number}
						</button>
					</Col>
				</Row>
				<br />
			</Card.Body>
		</Card>
	);
}
