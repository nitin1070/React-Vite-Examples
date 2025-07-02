import React, { Component } from 'react'

export default class Clicker extends Component {
	constructor(props) {
		super(props);
		this.state = { randNum: 1 };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		let x = Math.floor(Math.random() * 10) + 1;
		this.setState({ randNum: x });
	}
	render() {
		return (
			<div>
				<h2>Random Number Is:{this.state.randNum}</h2>
				{this.state.randNum === 6 ? (
					<p>You Win</p>
				) : (
					<button onClick={this.handleClick}>Generate Random Num</button>
				)}
			</div>
		);
	}

}
