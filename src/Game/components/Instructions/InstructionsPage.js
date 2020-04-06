import { Link } from "react-router-dom";
import Instructions from "./Instructions";
import { Button, Container } from "react-bootstrap";

import React from "react";

export default function InstrucionPage() {
	return (
		<Container style={{ minHeight: "100vh" }}>
			<Instructions></Instructions>
			<br />
			<Link to="/game">
				<Button variant="info">PLAY NOW</Button>
			</Link>
			<br></br>
		</Container>
	);
}
