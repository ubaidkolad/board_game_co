import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Instructions() {
	return (
		<>
			<div
				className="container"
				style={{ height: "100%", backgroundColor: "#000B16" }}
			>
				<div
					className="div2"
					style={{
						boxShadow:
							"0 4px 8px 0rgba(0,165, 240, 238), 0 6px 20px 0 rgba(0,0, 139, 143)",
						marginBottom: "3rem",
					}}
				>
					<img
						className="img-fluid"
						alt="rules"
						src={`${window.location.origin}/assets/images/welcome.png`}
					/>
				</div>
				<div
					className="div2"
					style={{
						boxShadow:
							"0 4px 8px 0rgba(0,165, 240, 238), 0 6px 20px 0 rgba(0,0, 139, 143)",
						marginBottom: "3rem",
					}}
				>
					<img
						className="img-fluid"
						alt="rules"
						src={`${window.location.origin}/assets/images/overview.png`}
					/>
				</div>
				<div
					className="div2"
					style={{
						boxShadow:
							"0 4px 8px 0rgba(0,165, 240, 238), 0 6px 20px 0 rgba(0,0, 139, 143)",
						marginBottom: "3rem",
					}}
				>
					<img
						className="img-fluid"
						alt="rules"
						src={`${window.location.origin}/assets/images/last.png`}
					/>
				</div>
				<div
					className="div2"
					style={{
						boxShadow:
							"0 4px 8px 0rgba(0,165, 240, 238), 0 6px 20px 0 rgba(0,0, 139, 143)",
						marginBottom: "3rem",
					}}
				>
					<img
						className="img-fluid"
						alt="rules"
						src={`${window.location.origin}/assets/images/rules.png`}
					/>
				</div>
			</div>
			<Link to="/game">
				<Button variant="info">PLAY NOW</Button>
			</Link>
		</>
	);
}
