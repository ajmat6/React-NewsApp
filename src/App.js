// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  //Defining a Method Like OOPs
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}

