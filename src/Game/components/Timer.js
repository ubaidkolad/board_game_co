import React from "react";

export default class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { secondElapsed: 0 };
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
		return ("0" + (this.state.secondElapsed % 60) + this.props.penalty).slice(
			-2
		);
	}

	render() {
		return (
			<div>
				<h2>
					{this.getMinutes()}:{this.getSeconds()}
				</h2>
			</div>
		);
	}
}
