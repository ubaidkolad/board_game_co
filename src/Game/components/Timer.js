import React from "react";

export default function Timer(props) {
  return (
    <span>
      <h2 style={{ color: "#eb2d2d" }}>
        <img
          src={`${window.location.origin}/assets/images/timer.png`}
          height="50px"
          style={{ margin: 3 }}
          alt=""
        />
        <span style={{ marginLeft: "1rem" }}>
          {getMinutes(props.secondElapsed)}:{getSeconds(props.secondElapsed)}
        </span>
      </h2>
    </span>
  );
}

function getMinutes(s) {
  return Math.floor(s / 60);
}

function getSeconds(s) {
  return ("0" + (s % 60)).slice(-2);
}
