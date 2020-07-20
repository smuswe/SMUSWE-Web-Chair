import React, { Component } from 'react';
import './Work.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import News from './components/timeline'
import Team from './components/team'
import Sponsor from './components/sponsors'
import Blog from './components/blog'
class Work extends Component {
  // GET https://graph.instagram.com/{media-id}
  // ?fields={smuswe}
  // &access_token={access-token}

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            {/* <Introduction></Introduction> */}
            <About></About>
            <News></News>
            <Blog></Blog>
            <Team></Team>
            <Sponsor></Sponsor>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;