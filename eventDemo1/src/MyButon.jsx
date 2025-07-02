import React, { Component } from 'react'

export default class MyButon extends Component {

	constructor(props){
		super(props);
		 this.showTime = this.showTime.bind(this);
		
	}
	showTime(){
		alert("current Date  & Time :"+ new  Date().toLocaleString())
	}
    

  render() {
	return (
	  <div>
		    <button onClick={this.showTime} >Show Time</button>
	  </div>
	)
  }
}
