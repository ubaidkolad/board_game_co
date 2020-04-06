import React from "react";
import Game from "./Game/Game";
import Nav from "./NavBar/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EndGame from "./Game/components/EndGame/EndGame";
import Login from "./Game/components/Login/Login";
import InstructionsPage from "./Game/components/Instructions/InstructionsPage";

function App() {
	return (
		<div
			className="App"
			style={{
				backgroundImage: `url(${window.location.origin}/assets/bg.jpg)`,
				backgroundSize: "cover",
				overflow: "hidden",
			}}
		>
			<Nav />
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/instructions">
						<InstructionsPage />
					</Route>
					<Route path="/game">
						<Game />
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
