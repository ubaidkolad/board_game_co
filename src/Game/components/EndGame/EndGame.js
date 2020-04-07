import React from "react";
import { withRouter } from "react-router";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
function EndGame(props) {
	console.log(props.location.state.s);
	console.log("ok");

	let email = Cookies.get("email");
	Cookies.remove("email");
	Cookies.remove("verified");

	function getMinutes(s) {
		return Math.floor(s / 60);
	}

	function getSeconds(s) {
		return ("0" + (s % 60)).slice(-2);
	}

	function send() {
		// to send time and email
	}

	function clear() {
		Cookies.remove("email");
		Cookies.remove("verified");
	}
	return (
		<>
			<div
				className="container"
				style={{ paddingTop: "4rem", minHeight: "100vh" }}
			>
				<h3>Email: {email}</h3>
				<h3>
					Time: {getMinutes(props.location.state.s)}:
					{getSeconds(props.location.state.s)}
				</h3>
				<Link to="/">
					<button onClick={clear} className="btn btn-primary">
						Go to Home
					</button>
				</Link>
			</div>
		</>
	);
}

export default withRouter(EndGame);
