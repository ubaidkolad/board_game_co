import { Link } from "react-router-dom";
import Instructions from "./Instructions";
import { Button } from "react-bootstrap";

import React from "react";

export default function InstrucionPage() {
  return (
    <div>
      <Instructions></Instructions>
      <Link to="/game">
        <Button variant="info">PLAY NOW</Button>
      </Link>
    </div>
  );
}
