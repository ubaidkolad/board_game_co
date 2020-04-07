import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { url } from "../url";

export default function Login(props) {
	const [verification, setVerification] = useState(false);
	const [email, setEmail] = useState();

	function onChangeEmail(e) {
		setEmail(e.target.value);
	}

	function authentication(e) {
		e.preventDefault();
		let u = window.location.pathname;
		console.log(u);
		let formData = new FormData();

		formData.append("email", email);

		axios
			.post(`${url}/user/verify/11-11-1586284076`, formData)
			.then((response) => handleResponse(response))
			.catch((err) => alert(err));
	}

	function handleResponse(response) {
		console.log(response.status);
		if (response.status === 200) {
			setVerification(true);
			Cookies.set("email", email);
			Cookies.set("verified", "true");
		}
	}

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
				{verification ? <Redirect to="/instructions" /> : <> </>}
			</div>
		</>
	);
}
