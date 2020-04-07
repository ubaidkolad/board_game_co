import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "./url";
import Login from "./Login/Login";
import { Redirect } from "react-router-dom";

export default function VerifyRoom() {
	const [verifiedRoom, setVerifiedRoom] = useState(false);

	useEffect(() => {
		console.log(`${url}/gameroom/verify/demo2-escape-room-1586262828`);
		axios
			.get(`${url}/gameroom/verify/demo4-escape-room-1586263672`)
			.then((response) => handleResponse(response))
			.catch((err) => handleError(err));
	});

	function handleError(err) {
		console.log(err);
		alert("Error!");
	}
	function handleResponse(response) {
		console.log(response);
		if (response.status === 200) {
			setVerifiedRoom(true);
		} else {
			alert("Room is not verified");
		}
	}
	return (
		<>
			<div style={{ minHeight: "100vh" }}>
				{verifiedRoom ? <Redirect to="/login" /> : <h3>Verfiying Room...</h3>}
			</div>
		</>
	);
}
