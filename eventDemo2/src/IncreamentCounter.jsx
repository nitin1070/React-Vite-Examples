import React, { Component } from 'react'

export default class IncreamentCounter extends Component {
	constructor(props){
		super(props);
		this.state={counter:1};
		 this.IncreamentCounter=this.IncreamentCounter.bind(this);
	}
	 IncreamentCounter () {
		let counter = this.state.counter+1;
	 	this.setState({counter:counter});
	}
  render() {
	return (
	  <div>
		   <h1>{this.state.counter}</h1>
		   <button onClick={this.IncreamentCounter}>Increament</button>
	  </div>
	)
  }
}
