import React from "react";

export default function Navbar() {
	return (
		<div>
			<nav
				class="navbar navbar-light fixed-top "
				style={{
					borderRadius: "2px",
					boxShadow: "0px 1px 10px #999",
					backgroundColor: "#A9E4EA",
					fontFamily: "'Merienda One', cursive"
				}}
			>
				<a class="navbar-brand" href="#">
					Board Game
				</a>
			</nav>
		</div>
	);
}
