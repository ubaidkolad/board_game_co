import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { secondElapsed: 0 };
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.penalty !== this.props.penalty) {
      if (this.props.penalty !== 0) {
        this.setState({
          secondElapsed: this.state.secondElapsed + this.props.penalty
        });
        this.props.setPenalty(0);
      }
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      this.setState({
        secondElapsed: this.state.secondElapsed + 1
      });
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.state.secondElapsed / 60);
  }
  getSeconds() {
    return ("0" + (this.state.secondElapsed % 60)).slice(-2);
  }

  render() {
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
            {this.getMinutes()}:{this.getSeconds()}
          </span>
        </h2>
      </span>
    );
  }
}
