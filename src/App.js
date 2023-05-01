// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  //Defining a Method Like OOPs
  c = 'Ajmat'
  render() {
    return (
      <div>
        Hello I am her! {this.c}
      </div>
    )
  }
}

