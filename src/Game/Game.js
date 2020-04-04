import React from "react";
import MainGame from "./components/MainGame";
import { Container } from "react-bootstrap";
import ErrorBoundary from "./ErrorBoundary";

export default function Game() {
	return (
		<>
			<Container>
				<ErrorBoundary>
					<MainGame></MainGame>
				</ErrorBoundary>
			</Container>
		</>
	);
}
