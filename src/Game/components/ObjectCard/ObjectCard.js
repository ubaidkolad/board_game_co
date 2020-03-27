import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./ObjectCard.css";
export default class ObjectCard extends Component {
	constructor(props) {
		super(props);

		this.state = { list: [], details: this.props.card };

		this.handleCard = this.handleCard.bind(this);
	}

	handleCard(e, value) {
		e.preventDefault();
		const { list } = this.state;
		const newItem = value;

		this.setState({
			list: [...this.state.list, newItem]
		});
		console.log(this.state.list);
	}

	render() {
		return (
			<Card
				className="card"
				style={{ marginBottom: "12px" }}
				onClick={e => this.handleCard(e, this.state.details.number)}
			>
				<Card.Img variant="top" src="https://via.placeholder.com/140x100" />
				<Card.Body>
					<Card.Title>{this.state.details.name}</Card.Title>
					<Card.Text style={{ fontSize: "12px" }}>
						{this.state.details.text}
					</Card.Text>
					<Button variant="primary">{this.state.details.number}</Button>
				</Card.Body>
			</Card>
		);
	}
}
