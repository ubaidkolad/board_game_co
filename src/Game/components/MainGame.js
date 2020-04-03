import React, { useState } from "react";
import ObjectCard from "./ObjectCard/ObjectCard";
import Timer from "./Timer";
import RoomCard from "./RoomCard/RoomCard";
import SubmissionModal from "./SubmissionModal";
import { Row, Col, Button } from "react-bootstrap";
import { Trail } from "react-spring/renderprops";

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
    if (code.toString() === FINAL_ASNWER.key) {
      alert("YOU WIN");
    } else {
      setPenalty(180);
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
      setPenalty(30);
    }
  }

  return (
    <>
      <Trail
        items={ROOM_DETAILS}
        keys={item => item.name}
        from={{ transform: "translate3d(-11100px,400px,500px)" }}
        to={{ transform: "translate3d(0px,20px,500px)" }}
      >
        {ROOM_DETAILS => props => (
          <div style={props} className="post">
            <Row style={{ paddingTop: "3.5rem" }}>
              <Col md={2}>
                <Timer penalty={penalty} setPenalty={setPenalty}></Timer>
              </Col>
              <Col>
                <h3>Using hints will result in 5 min penalty</h3>
              </Col>
              <Col md={3}>
                <Button
                  onClick={() => {
                    setPenalty(300);
                    alert(roundAnswers[0].hint);
                  }}
                  block
                >
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
          </div>
        )}
      </Trail>

      <Row style={{ paddingTop: "1rem" }}>
        <Trail
          items={activeCards}
          keys={item => item.number}
          from={{ transform: "translate3d(11100px,400px,500px)" }}
          to={{ transform: "translate3d(0px,20px,500px)" }}
        >
          {c => props => (
            <Col md={3} style={{ paddingBottom: "1rem" }}>
              <div style={props} className="h-100">
                <ObjectCard card={c}></ObjectCard>
              </div>
            </Col>
          )}
        </Trail>
      </Row>
      <br />
    </>
  );
}
