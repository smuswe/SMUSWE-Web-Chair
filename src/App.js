import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/introduction'
import About from './components/about'
import News from './components/timeline'
import Team from './components/team'
import Sponsor from './components/sponsors'
import Blog from './components/blog'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Team></Team>
            <News></News>
            <Blog></Blog>
            <Sponsor></Sponsor>
          </div>
        </div>
      </div>
    );
  }
}

export default App;