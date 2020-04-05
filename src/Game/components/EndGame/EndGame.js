import React from "react";
import { withRouter } from "react-router";

function EndGame(props) {
	console.log(props.location.state.s);
	console.log("ok");
	function getMinutes(s) {
		return Math.floor(s / 60);
	}

	function getSeconds(s) {
		return ("0" + (s % 60)).slice(-2);
	}

	return (
		<>
			<div className="container" style={{ paddingTop: "4rem" }}>
				<h3>Name: User</h3>
				<h3>
					Time: {getMinutes(props.location.state.s)}:
					{getSeconds(props.location.state.s)}
				</h3>
			</div>
		</>
	);
}

export default withRouter(EndGame);
