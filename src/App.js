import React from "react";
import Game from "./Game/Game";
import Nav from "./NavBar/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Instructions from "../src/Game/components/Instructions/Instructions";
import EndGame from "./Game/components/EndGame/EndGame";
import Upload from "./Game/components/Upload";
import Login from "./Game/components/Login/Login";

function App() {
	return (
		<div className="App">
			<Nav />
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/welcome">
						<Instructions />
					</Route>
					<Route path="/game">
						<Game />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
