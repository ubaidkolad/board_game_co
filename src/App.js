import React from "react";
import Game from "./Game/Game";
import Nav from "./NavBar/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InstructionPage from "./Game/components/Instructions/InstrucionPage";
import EndGame from "./Game/components/EndGame/EndGame";

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
						<InstructionPage />
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
