import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
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
export default withRouter(ProtectedRoute);
