import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function RoomCard(props) {
	let details = props.details;

	return (
		<Container style={{ marginBottom: "2rem" }}>
			<Row>
				<Col>
					<Image fluid src={details.imgURL} />
				</Col>
				<Col>
					<div>
						<h1>{details.name}</h1>
						<p>{details.description}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
