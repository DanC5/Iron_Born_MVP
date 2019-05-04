import React, { Component } from 'react'
import { workoutGenerator } from '../utilities/exercises.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Iron Born!</h1>
        <h2>
          {console.log(workoutGenerator('60', 'Upper-body pull'))}
        </h2>
      </div>
    )
  }
}
