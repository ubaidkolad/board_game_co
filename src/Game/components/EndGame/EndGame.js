import React, { useEffect, useState } from "react";
import { withRouter, useRouteMatch } from "react-router";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../url";

function EndGame(props) {
	const [id, setId] = useState(useRouteMatch("/gameroom/:id").params.id);
	console.log(useRouteMatch("/gameroom/:id").params.id);
	useEffect(() => {
		console.log(Cookies.get("id"));
		let formData = new FormData();
		formData.append("email", Cookies.get("email"));
		formData.append("time", props.location.state.s);

		axios.post(`${url}/user/score/${id}`);
	});

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
				{props.location.state.s ? (
					<h3>
						Time: {getMinutes(props.location.state.s)}:
						{getSeconds(props.location.state.s)}
					</h3>
				) : (
					<>
						<h5>Elapsed time not available.</h5>
					</>
				)}
				<Link to={{ pathname: `/gameroom/${id}` }}>
					<button onClick={clear} className="btn btn-primary">
						Go to Home
					</button>
				</Link>
			</div>
		</>
	);
}

export default withRouter(EndGame);
