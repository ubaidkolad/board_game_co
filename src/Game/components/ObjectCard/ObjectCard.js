import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ObjectCard.css";

export default function ObjectCard(props) {
  const details = props.card;

  return (
    <Card
      className="card-selected"
      style={{
        marginBottom: "12px",
        backgroundColor: "#A9E4EA"
      }}
      //	onClick={() => selectCard(details.number)}
    >
      <Card.Img
        class="img-fluid"
        variant="top"
        src={`${window.location.origin}/assets/images/${details.imgURL}`}
      />
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text style={{ fontSize: "12px" }}>{details.text}</Card.Text>
        <Button variant="primary">{details.number}</Button>
      </Card.Body>
    </Card>
  );
}
