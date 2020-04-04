import React from "react";
import MainGame from "./components/MainGame";
import SubmissionModal from "./components/SubmissionModal";

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1 style={{ paddingTop: "4rem" }}>Error!</h1>;
		}

		return this.props.children;
	}
}