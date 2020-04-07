import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [verification, setVerification] = useState(false);
	const url = "";

	function onChangeEmail(e) {
		setEmail(e.target.value);
	}

	function onChangePassword(e) {
		setPassword(e.target.value);
	}

	function authentication() {
		let formData = new FormData();
		Cookies.set("email", email);
		// formData.append("email", email);
		// formData.append("password", password);

		// axios.post(url, formData).then((response) => handleResponse(response));
	}

	// function handleResponse(response) {
	// 	if (response.code === 200) {
	// 		console.log("Verified");
	// 		setVerification(true);
	// 	} else {
	// 		alert("You are not verified");
	// 	}
	// }

	return (
		<>
			<div
				class="container"
				style={{ paddingLeft: "25rem", paddingTop: "5rem", minHeight: "100vh" }}
			>
				<div id="first">
					<div class="myform form ">
						<div class="logo mb-3">
							<div class="col-md-12 text-center">
								<h1>Login</h1>
							</div>
						</div>
						<form action="" method="post" name="login">
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input
									type="email"
									name="email"
									class="form-control"
									id="email"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									onChange={onChangeEmail}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Password</label>
								<input
									type="password"
									name="password"
									id="password"
									class="form-control"
									aria-describedby="emailHelp"
									placeholder="Enter Password"
									onChangePassword={onChangePassword}
								/>
							</div>

							<div class="col-md-12 text-center ">
								<button
									type="submit"
									class=" btn btn-block mybtn btn-primary tx-tfm"
									onClick={authentication}
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{verification ? <Redirect to="/instructions" /> : <></>}
		</>
	);
}
