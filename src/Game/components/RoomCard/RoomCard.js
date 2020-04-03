import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import NumPad from "react-numpad";

export default function RoomCard(props) {
  const details = props.details;
  const verifyFinal = props.verifyFinal;

  return (
    <Container style={{ marginBottom: "1rem" }}>
      <Row>
        <Col>
          <Image
            style={{ boxShadow: "0px 1px 10px #999" }}
            fluid
            src={`${window.location.origin}/assets/images/${details.imgURL}`}
          />
        </Col>
        <Col
          style={{
            color: "black"
          }}
        >
          <h1
            style={{
              fontFamily: "'Merienda One', cursive"
            }}
          >
            {details.name}
          </h1>

          <p style={{ fontFamily: "'Comfortaa', cursive" }}>
            {details.description}
          </p>
          {props.completed === true ? (
            <NumPad.Number
              placeholder="Enter code to unlock door"
              negative={false}
              decimal={false}
              onChange={value => {
                verifyFinal(value.toString());
              }}
            >
              <Button variant="dark" size="md" block>
                Unlock Door
              </Button>
            </NumPad.Number>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}
