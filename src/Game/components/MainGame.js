import React, { useState } from "react";
import ObjectCard from "./ObjectCard/ObjectCard";
import Timer from "./Timer";
import RoomCard from "./RoomCard/RoomCard";
import SubmissionModal from "./SubmissionModal";
import { Row, Col } from "react-bootstrap";
import { ALL_CARDS, FINAL_ASNWER, LEVELS, START_CARDS } from "../Data";

export default function MainGame() {
  const roomDetails = {
    name: "Office",
    description:
      "In this adventure, you are a top ranked detective. You are extremely close to solving a high-class murder case. A tip leads you to the office space of a suspect. The clue that you want to gather might be the last missing puzzle piece to connect the dots. Without any prior preparation you rush to the suspect’s office. Its late in the night, so you have managed to sneak in without being noticed by the cameras and security guards. You enter the office room AND slam, the door shut on its own. You try to open it again but it won’t open. Seem like you have fallen into a trap. You have limited time to escape the room. GOOD LUCK. ",
    imgURL: "office.jpg"
  };

  const [activeCards, setActiveCards] = useState(
    START_CARDS.map(i => ALL_CARDS[i])
  );
  const [penalty, setPenalty] = useState(false);
  const [roundAnswers, setroundAnswers] = useState(LEVELS);

  function verifyFinal(code) {
    if (code.toString() === FINAL_ASNWER) {
      alert("YOU WIN");
    } else {
      setPenalty(true);
      alert("Wrong Answer");
    }
  }

  function verifyCards(number) {
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
    // }
  }

  function discard(cardNumber) {
    setActiveCards(activeCards.filter(c => c.number !== cardNumber));
  }
  return (
    <>
      <Timer penalty={penalty} setPenalty={setPenalty}></Timer>
      <RoomCard details={roomDetails} verifyFinal={verifyFinal}></RoomCard>
      <SubmissionModal verifyCards={verifyCards}></SubmissionModal>
      <Row style={{ paddingTop: "1rem" }}>
        {activeCards.map(c => (
          <Col md={3} key={c.number} style={{ paddingBottom: "1rem" }}>
            <ObjectCard discard={discard} card={c}></ObjectCard>
          </Col>
        ))}
      </Row>

      <br />
    </>
  );
}
