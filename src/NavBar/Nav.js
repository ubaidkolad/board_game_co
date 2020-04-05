import React from "react";
import { Navbar } from "react-bootstrap";
export default function Nav() {
	return (
		<div>
			<Navbar expand="lg" style={{ background: "transparent" }}>
				<Navbar.Brand
					href="#"
					style={{
						color: "#007A83",
						fontFamily: "Attack-13",
						fontSize: "1.7rem",
					}}
				>
					Board Game
				</Navbar.Brand>
			</Navbar>
		</div>
	);
}
