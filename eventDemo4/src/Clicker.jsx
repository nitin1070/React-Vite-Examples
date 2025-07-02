import React, { Component } from 'react'

export default class Clicker extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 1 };
		this.handleClick = this.handleClick.bind(this);
		this.handleTripleClick = this.handleTripleClick.bind(this);
	}
	handleClick() {
		this.setState({ counter: this.state.counter + 1 });
	}
	handleIncrement(prevState) {
		return { counter: prevState.counter + 1 };
	}
	handleTripleClick() {
		this.setState(this.handleIncrement);
		this.setState(this.handleIncrement);
		this.setState(this.handleIncrement);
	}
	render() {
		console.log("render called with counter:", this.state.counter);

		return (
			<div>
				<h2>Counter Is:{this.state.counter}</h2>
				<button onClick={this.handleClick}>Increment By 1</button>
				<button onClick={this.handleTripleClick}>Increment By 3</button>
			</div>
		);
	}

}
