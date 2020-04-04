import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Instructions() {
	return (
		<div>
			<div
				className="container"
				style={{
					width: "40rem",
					marginTop: "6rem",
				}}
			>
				<div
					className="jumbotron"
					style={{
						backgroundImage: "linear-gradient(#A9E4EA, #15a2b0)",
						boxShadow:
							"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
					}}
				>
					<h2 style={{ fontFamily: "'Merienda One', cursive" }}>
						How to Play ?
					</h2>
					<hr />
					<p style={{ fontFamily: "'Comfortaa', cursive", fontWeight: "bold" }}>
						Read the scenario. Observe the location you are stuck in and read
						the descriptions of all the relevant objects in the location. <br />
						All relevant objects will have a color bordering them and a number.{" "}
						<br />
						To interact an object with another, you must add both the numbers of
						the objects and type the total in the “Enter Number” button. If its
						correct you will see the result of the interaction or will be
						presented a new object. Incase the number is incorrect the screen
						will show “Wrong Input”. <br />
						Carry out this process to investigate and discover the EXIT CODE to
						escape before time runs out.
					</p>
				</div>
				<Link to="/game">
					<Button variant="info">PLAY NOW</Button>
				</Link>
			</div>
		</div>
	);
}
