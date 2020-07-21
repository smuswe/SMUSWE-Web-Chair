import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <a href="index.html"><div href="index.html" className="author-img" style={{ backgroundImage: 'url(images/SWE_Logo_SMU.png)' }} /></a>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <br></br>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About Us</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">News/Upcoming Events</a></li>
                  <li><a href="#blog" data-nav-section="blog">Past Events</a></li>
                  <li><a href="#team" data-nav-section="team">Meet Our Chapter</a></li>
                  <li><a href="#sponsors" data-nav-section="sponsors">Our Sponsors</a></li>

                </ul>

              </div>
            </nav>
            <div className="text-center">
              <div class="btn-group dropright">
                <button type="button" class="btn btn-primary btn-learn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Important Links</button>
                <div class="dropdown-menu">
                  <a class="btn btn-secondary btn-learn dropdown-item" href="https://forms.office.com/Pages/ResponsePage.aspx?id=Lg9FD08zrUuoXJrfdgUdi2k4SeMphwNDnP9zJUYjeTdUNVRaME9MVE5WNjhNVjBJV1hEQ0ZWWEJRUS4u" target="_blank" rel="noopener noreferrer">Resume Book Form</a>
                  <a class="btn btn-secondary btn-learn dropdown-item" href="https://forms.office.com/Pages/ResponsePage.aspx?id=Lg9FD08zrUuoXJrfdgUdi2k4SeMphwNDnP9zJUYjeTdUNVU4SkUwVDkxWExSSTBUU1dDNjU4RFdWQy4u" target="_blank" rel="noopener noreferrer">Attendance Form</a>
                </div>
              </div>
              <br></br>
              <span className="email"><i className="icon-mail"></i> smu.swe@smu.edu</span>
            </div>
            <br></br>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/groups/SMUSWE/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/smuswe/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                <a href="index.html"><div href="index.html" className="logo-img" style={{ backgroundImage: 'url(images/smulogoblack.png)' }} /></a>              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
