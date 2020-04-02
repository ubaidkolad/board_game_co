import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function RoomCard(props) {
	let details = props.details;

	return (
		<Container style={{ marginBottom: "2rem" }}>
			<Row>
				<Col>
					<Image
						style={{ boxShadow: "0px 1px 10px #999" }}
						fluid
						src={`${window.location.origin}/assets/images/${details.imgURL}`}
					/>
				</Col>
				<Col>
					<div>
						<div
							className="container"
							style={{
								color: "black"
							}}
						>
							<h1
								style={{
									fontFamily: "'Merienda One', cursive"
								}}
							>
								{details.name}
							</h1>

							<p style={{ fontFamily: "'Comfortaa', cursive" }}>
								{details.description}
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
