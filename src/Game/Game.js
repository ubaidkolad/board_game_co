import React from "react";
import MainGame from "./components/MainGame";
import { Container } from "react-bootstrap";
// import Temp from './components/Temp'

export default function Game() {
  return (
    <>
      <Container>
        <MainGame></MainGame>
      </Container>
    </>
  );
}
