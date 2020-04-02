import React, { useState } from "react";
import ObjectCard from "./ObjectCard/ObjectCard";
import Timer from "./Timer";
import RoomCard from "./RoomCard/RoomCard";
import SubmissionModal from "./SubmissionModal";
import { Row, Col } from "react-bootstrap";
import { ALL_CARDS, FINAL_ASNWER, LEVELS, START_CARDS } from "../Data";

export default function MainGame() {
  const roomDetails = {
    name: "office",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgURL: "office.jpg"
  };

  const [activeCards, setActiveCards] = useState(
    START_CARDS.map(i => ALL_CARDS[i])
  );
  const [penalty, setPenalty] = useState(false);
  const [roundAnswers, setroundAnswers] = useState(LEVELS);

  function verifyCards(number, finalNumber) {
    if (finalNumber !== undefined) {
      if (FINAL_ASNWER === finalNumber.toString()) {
        alert("You WIN");
      } else {
        alert("You loose");
      }
    } else {
      if (number.toString() === roundAnswers[0].key) {
        setActiveCards([
          ...activeCards,
          ...roundAnswers[0].reveled_cards.map(i => ALL_CARDS[i])
        ]);
        roundAnswers.splice(0, 1);
        setroundAnswers(roundAnswers);
      } else {
        setPenalty(true);
      }
    }
  }

  return (
    <>
      <p>Penalty:{penalty.toString()}</p>
      <Timer penalty={penalty} setPenalty={setPenalty}></Timer>
      <RoomCard details={roomDetails}></RoomCard>

      <Row>
        {activeCards.map(c => (
          <>
            <Col md={3}>
              <ObjectCard card={c}></ObjectCard>
            </Col>
          </>
        ))}
      </Row>

      <br />

      <Row>
        <Col md={6}>
          <SubmissionModal verifyCards={verifyCards}></SubmissionModal>
        </Col>
      </Row>
    </>
  );
}
