import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props){
    super(props);
    this.state={currentDateTime : new Date()};
    setInterval(this.updateTime,1000);
  }
  updateTime=()=>{
      this.setState({currentDateTime:new Date()})
  }
  render() {
    return (
      <div>
         <h3>Hello Everyone</h3>
         <p>Current Date & Time are : {this.state.currentDateTime.toLocaleString()}</p>
      </div>
    )
  }
}
