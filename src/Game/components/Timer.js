import React from "react";

export default class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { secondElapsed: 0 };
	}

	componentDidUpdate(previousProps, previousState) {
		if (previousProps.penalty !== this.props.penalty) {
			if (this.props.penalty === true) {
				alert("incorrectanswer");
				this.setState({ secondElapsed: this.state.secondElapsed + 30 });
				this.props.setPenalty(false);
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
			<div>
				<h2 style={{ paddingTop: "5rem", color: "#eb2d2d" }}>
					<img
						src={`${window.location.origin}/assets/images/timer.png`}
						height="50px"
						style={{ margin: 3 }}
					/>
					<span>
						{this.getMinutes()}:{this.getSeconds()}
					</span>
				</h2>
			</div>
		);
	}
}
