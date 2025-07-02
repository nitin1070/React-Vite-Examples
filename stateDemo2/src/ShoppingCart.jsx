import React, { Component } from 'react'
import { useState } from 'react';

export default class ShoppingCart extends Component {

    constructor(props){
        super(props);

        this.state={
            
             items: this.props.items,
             total: this.props.items.length
            
            };
            setTimeout(this.updateItem,5000);
    }
    updateItem=()=>{
        let newItem = [...this.state.items,"One Plus"];
        let newCount = this.state.total+1;
        this.setState({items:newItem,total:newCount});

    }
    
  render() {
    return (
      <div>
    
            <p>Items are : {this.state.items.join()}</p>
            <p>Total Item : {this.state.total}</p>
            
                 </div>
    )
  }
}
