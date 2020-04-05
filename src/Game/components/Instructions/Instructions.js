import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Instructions() {
	return (
		<>
			<div
				className="container"
				style={{ height: "100%", textAlign: "center" }}
			>
				<div
					className="div2"
					style={{
						boxShadow:
							"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
							"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
						marginBottom: "3rem",
					}}
				>
					<img
						className="img-fluid"
						alt="rules"
						src={`${window.location.origin}/assets/images/overview.png`}
						style={{
							boxShadow:
								"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
						}}
					/>
				</div>
				<div
					className="div2"
					style={{
						boxShadow:
							"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
					}}
				>
					<img
						className="img-fluid"
						alt="rules"
						src={`${window.location.origin}/assets/images/rules.png`}
					/>
				</div>
				<Link to="/game">
					<Button size="lg" variant="info">
						BEGIN
					</Button>
				</Link>
			</div>
		</>
	);
}
