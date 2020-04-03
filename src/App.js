import React from "react";
import Game from "./Game/Game";
import Navbar from "./NavBar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Instructions from "../src/Game/components/Instructions/Instructions";
import EndGame from "./Game/components/EndGame/EndGame";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Router>
				<Switch>
					<Route path="/game">
						<Game />
					</Route>
					<Route exact path="/">
						<Instructions />
					</Route>
					<Route path="/endgame">
						<EndGame />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
