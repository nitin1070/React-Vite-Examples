import React, { Component } from "react";

export default class ColorChanger extends Component {
	constructor(props) {
		super(props);
		this.state = { backGround: "red" };
		setInterval(this.changeColor, 2000);
	}
	changeColor = () => {
		let currColor = this.state.backGround;
		currColor =
			currColor === "red" ? "green" : currColor === "green" ? "blue" : "red";
		this.setState({ backGround: currColor });
	};
	render() {
		let myStyle = {
			width: "100vw",
			height: "100vh",
			backgroundColor: this.state.backGround,
		};
		return <div style={myStyle}></div>;
	}
}
