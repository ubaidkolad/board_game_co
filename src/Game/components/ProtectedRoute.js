import React from "react";
import login from "./Login/Login";
import { Redirect, Route } from "react-router-dom";
import Game from "../Game";
import Cookies from "js-cookie";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			console.log(Cookies.get("verified"));
			console.log(Cookies.get("email"));
			return (
				<>
					{Cookies.get("verified") === "true" ? (
						<Component />
					) : (
						<Redirect
							to={{
								pathname: "/",

								state: {
									error: "You need to Login to Play",
								},
							}}
						/>
					)}
				</>
			);
		}}
	/>
);
