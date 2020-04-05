import React from "react";
import { withRouter } from "react-router";
function EndGame(props) {
	console.log(props.location.state.s);
	return (
		<>
			<div className="container">
				<h3>Name: User</h3>
				<h3>Time: {props.location.state.s} seconds</h3>
			</div>
		</>
	);
}

export default withRouter(EndGame);
