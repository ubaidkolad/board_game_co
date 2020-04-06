import React from "react";
import { withRouter } from "react-router";
import Cookies from "js-cookie";

function EndGame(props) {
	console.log(props.location.state.s);
	console.log("ok");

	console.log(Cookies.get("email"));

	function getMinutes(s) {
		return Math.floor(s / 60);
	}

	function getSeconds(s) {
		return ("0" + (s % 60)).slice(-2);
	}

	function send() {
		// to send time and email
	}
	return (
		<>
			<div
				className="container"
				style={{ paddingTop: "4rem", minHeight: "100vh" }}
			>
				<h3>Email: {Cookies.get("email")}</h3>
				<h3>
					Time: {getMinutes(props.location.state.s)}:
					{getSeconds(props.location.state.s)}
				</h3>
			</div>
		</>
	);
}

export default withRouter(EndGame);
