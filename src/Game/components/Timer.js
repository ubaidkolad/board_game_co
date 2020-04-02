import React from "react";

export default class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { secondElapsed: 0, penalty: this.props.penalty };
		//	console.log(this.props.penalty);
	}

	async componentDidMount() {
		this.startTimer();
	}

	async startTimer() {
		setInterval(() => {
			console.log(this.state.penalty);
			if (this.state.penalty === true) {
				this.setState({
					secondElapsed: this.state.secondElapsed + 10
				});
			} else {
				this.setState({
					secondElapsed: this.state.secondElapsed + 1
				});
			}
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
				<h2>
					<h1>{this.state.penalty.toString()}</h1>
					{this.getMinutes()}:{this.getSeconds()}
				</h2>
			</div>
		);
	}
}
