import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { withRouter, useRouteMatch } from "react-router-dom";

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
								pathname: `/gameroom/${Cookies.get("id")}`,
								state: {
									error: "Please LOGIN to Play!",
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
