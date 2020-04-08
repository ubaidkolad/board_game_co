import React from "react";
import Game from "./Game/Game";
import Nav from "./NavBar/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EndGame from "./Game/components/EndGame/EndGame";
import Login from "./Game/components/Login/Login";
import InstructionsPage from "./Game/components/Instructions/InstructionsPage";
import VerifyRoom from "./Game/components/VerifyRoom";
import ProtectedRoute from "./Game/components/ProtectedRoute";
// import { setGlobal } from "reactn";

function App() {
  const see = (routerProps) => {
    console.log(routerProps);
    console.log("ok");
  };
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
          <Route exact path="/gameroom/:id" component={Login} />

          <Route path="/instructions">
            <InstructionsPage />
          </Route>
          <ProtectedRoute path="/game" component={Game} />

          <ProtectedRoute path="/endgame" component={EndGame} />
          <Route path="*" component={() => "404 not found"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
