import React, { Component } from 'react'

export default class Student2 extends Component {
    constructor(props){
        super(props);
        this.state={name:"Soumya",roll:102};
    }
  render() {
    return (
      <div>
          <p>Name : {this.state.name}</p>
          <p>Roll : {this.state.roll}</p>
      </div>
    )
  }
}
