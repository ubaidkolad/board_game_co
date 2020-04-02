import React from "react";
import Game from "./Game/Game";
import Navbar from "./NavBar/Navbar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Game></Game>
		</div>
	);
}

export default App;
