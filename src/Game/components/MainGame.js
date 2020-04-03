import React, { useState } from "react";
import ObjectCard from "./ObjectCard/ObjectCard";
import Timer from "./Timer";
import RoomCard from "./RoomCard/RoomCard";
import SubmissionModal from "./SubmissionModal";
import { Row, Col, Button } from "react-bootstrap";
import {
  ALL_CARDS,
  FINAL_ASNWER,
  LEVELS,
  START_CARDS,
  ROOM_DETAILS
} from "../Data";

export default function MainGame() {
  const [activeCards, setActiveCards] = useState(
    START_CARDS.map(i => ALL_CARDS[i])
  );
  const [penalty, setPenalty] = useState(false);
  const [roundAnswers, setroundAnswers] = useState(LEVELS);
  const [completed, setCompleted] = useState(false);

  function verifyFinal(code) {
    if (code.toString() === FINAL_ASNWER) {
      alert("YOU WIN");
    } else {
      setPenalty(true);
      alert("Wrong Answer 30 sec penalty");
    }
  }

  function verifyCards(number) {
    if (number.toString() === roundAnswers[0].key) {
      setActiveCards(
        [
          ...activeCards,
          ...roundAnswers[0].reveled_cards.map(i => ALL_CARDS[i])
        ].filter(c => roundAnswers[0].discarded_cards.indexOf(c.number) === -1)
      );
      roundAnswers.splice(0, 1);
      if (roundAnswers.length === 0) {
        setCompleted(true);
      }
      setroundAnswers(roundAnswers);
    } else {
      alert("Wrong Answer 30 sec penalty");
      setPenalty(true);
    }
  }

  return (
    <>
      <Row style={{ paddingTop: "5rem" }}>
        <Col md={2}>
          <Timer penalty={penalty} setPenalty={setPenalty}></Timer>
        </Col>
        <Col>
          <h3>Using hints will result in 5 min penalty</h3>
        </Col>
        <Col md={3}>
          <Button onClick={() => alert(roundAnswers[0].hint)} block>
            Hint
          </Button>
        </Col>
      </Row>
      <RoomCard
        completed={completed}
        details={ROOM_DETAILS}
        verifyFinal={verifyFinal}
      ></RoomCard>
      <SubmissionModal
        completed={completed}
        verifyCards={verifyCards}
      ></SubmissionModal>
      <Row style={{ paddingTop: "1rem" }}>
        {activeCards.map(c => (
          <Col md={3} key={c.number} style={{ paddingBottom: "1rem" }}>
            <ObjectCard card={c}></ObjectCard>
          </Col>
        ))}
      </Row>
      <br />
    </>
  );
}
