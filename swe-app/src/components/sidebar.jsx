import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">SMU SWE</a></h1>
              <span className="email"><i className="icon-mail"></i> smu.swe@smu.edu</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About Us</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">News/Upcoming Events</a></li>
                  <li><a href="#blog" data-nav-section="blog">Past Events</a></li>
                  <li><a href="#team" data-nav-section="team">Meet Our Chapter</a></li>
                  <li><a href="#sponsors" data-nav-section="sponsors">Our Sponsors</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/groups/SMUSWE/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/smuswe/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                 <i className="icon-heart" aria-hidden="true" /> <i className="icon-heart" aria-hidden="true" /> <i className="icon-heart" aria-hidden="true" /> <br></br>
              </small></p>
              <p><small>
                SMU SWE 2020-2021
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
