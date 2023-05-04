import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import{
  BrowserRouter,
  Routes,
  Route,
  Link
}from 'react-router-dom';

export default class App extends Component {
  //to change pagesize easily
  pagesize = 60;
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          //key element has to be passed to differentiate that this News component is different from the previous one otherwise it will continue to show previous News component
          <Route path='/' element={<News key='general' pageSize={this.pagesize} country='in' category="general"/>}/>
          <Route path='/sports' element={<News key='sports' pageSize={this.pagesize} country='in' category="sports"/>}/>
          <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pagesize} country='in' category="entertainment"/>}/>
          <Route path='/science' element={<News key='science' pageSize={this.pagesize} country='in' category="science"/>}/>
          <Route path='/business' element={<News key='business' pageSize={this.pagesize} country='in' category="business"/>}/>
          <Route path='/health' element={<News key='health' pageSize={this.pagesize} country='in' category="health"/>}/>
          <Route path='/technology' element={<News key='technology' pageSize={this.pagesize} country='in' category="technology"/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

