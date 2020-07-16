import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
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
            <Introduction></Introduction>
            <About></About>
            <Blog></Blog>
            <News></News>
            <Team></Team>
            <Sponsor></Sponsor>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;