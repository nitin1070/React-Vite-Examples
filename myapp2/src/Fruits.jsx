import React, { Component } from 'react'
import foods from './foods'
import { choice,remove } from './helper'
export default class Fruits extends Component {
  render() {
    let fruit = choice(foods);
    let remainingFruits = remove(foods,fruit);
    return (
      <div>
          <p>Total Fruits: {foods.length}</p>
          <p>They are : {foods.join()}</p>
          <p>Choosen fruits : {fruit}</p>
          <p>Remaining fruis  : {remainingFruits.length}</p>
          <p>They are : {remainingFruits.join()}</p>
      </div>
    )
  }
}

