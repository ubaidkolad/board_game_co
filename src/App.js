import React from "react";
import Game from "./Game/Game";
import Navbar from "./NavBar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Instructions from "../src/Game/components/Instructions/Instructions";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Router>
				<Switch>
					<Route exact path="/game">
						<Game />
					</Route>
					<Route exact path="/">
						<Instructions />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
