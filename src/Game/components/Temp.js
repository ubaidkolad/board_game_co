import React, { Component } from "react";

export default class Temp extends Component {
  constructor() {
    super();
    this.state = {
      selectedCard: []
    };
  }

  updateCard() {
    console.log("pressed");
    this.setState({
      selectedCard: [...this.state.selectedCard, "**Card to push**"]
    });
  }

  render() {
    console.log(this.state.selectedCard);
    return (
      <>
        <button onClick={() => this.updateCard()}>Clicked times</button>
        {this.state.selectedCard.map(c => (
          <h1>{c}</h1>
        ))}
      </>
    );
  }
}
