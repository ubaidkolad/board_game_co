import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { url } from "../url";
import Spinner from "react-bootstrap/Spinner";
import { withRouter } from "react-router-dom";

function Login(props) {
	Cookies.remove("email");
	Cookies.remove("verified");
	//console.log(props.location.state.error);
	const [verification, setVerification] = useState(false);
	const [resp, setResp] = useState();
	const [email, setEmail] = useState();

	function onChangeEmail(e) {
		setEmail(e.target.value);
	}

	function validateEmail(e) {
		e.preventDefault();
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if (reg.test(email) == false) {
			alert("Invalid Email Address");
			return false;
		}

		return true;
	}

	function authentication(e) {
		console.log(email);
		if (email === undefined) {
			e.preventDefault();
			alert("Please enter your email address");
		} else {
			e.preventDefault();
			setResp(true);
			let formData = new FormData();
			formData.append("email", email);

			axios
				.post(`${url}/user/verify/test-test-1586344743`, formData)
				.then((response) => handleResponse(response))
				.catch((err) => {
					setResp(false);
					alert(err);
				});
		}
	}

	function handleResponse(response) {
		if (response.status === 200) {
			setResp(false);

			setVerification(true);

			Cookies.set("email", email);
			Cookies.set("verified", "true");
			//	alert(response.data.msg);
		} else {
			alert("not authorized");
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
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input
									type="email"
									name="email"
									class="form-control"
									id="email"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									onBlur={validateEmail}
									onChange={onChangeEmail}
									required
								/>
							</div>
							{props.location.state === undefined ? (
								<> </>
							) : (
								<>
									{" "}
									<p style={{ color: "red", marginLeft: "5rem" }}>
										{props.location.state.error}
									</p>{" "}
								</>
							)}

							<div class="col-md-12 text-center ">
								<input
									type="submit"
									value="Login"
									class=" btn btn-block mybtn btn-primary tx-tfm"
									onClick={authentication}
								/>
							</div>
						</form>
					</div>
				</div>
				{resp ? (
					<h7>
						<Spinner animation="border" variant="primary" />
						<br />
						Verifying, Please wait...
					</h7>
				) : (
					<></>
				)}
			</div>
			{verification ? <Redirect to="/instructions" /> : <> </>}
		</>
	);
}

export default withRouter(Login);
