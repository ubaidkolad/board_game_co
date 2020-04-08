import { Link, useRouteMatch } from "react-router-dom";
import Instructions from "./Instructions";
import { Button, Container } from "react-bootstrap";

import React, { useState } from "react";

export default function InstrucionPage() {
	const [id, setId] = useState(useRouteMatch("/gameroom/:id").params.id);
	return (
		<Container style={{ minHeight: "100vh" }}>
			<Instructions></Instructions>
			<br />
			<Link
				to={{
					pathname: `/gameroom/${id}/game`,
				}}
			>
				<Button variant="info">PLAY NOW</Button>
			</Link>
			<br></br>
		</Container>
	);
}
