import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/caruth.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          
                          <h1><mark>Welcome to SMU SWE</mark></h1>
                          
                          {/* <p><a className="btn btn-primary btn-learn" href="http://smu.swe.org" target="_blank" rel="noopener noreferrer">Visit SMU.SWE.ORG <i className="icon-monitor" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/caruth2.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1><mark>The <b></b>Hart of Lyle</mark></h1>
                          {/* <p><a className="btn btn-primary btn-learn" href="https://www.smu.edu/lyle" target="_blank" rel="noopener noreferrer">Visit Lyle <i className="icon-briefcase3" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/designYourWorld.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1><mark>Our Outreach</mark></h1>
                          {/* <p><a className="btn btn-primary btn-learn" href="https://forms.office.com/Pages/ResponsePage.aspx?id=Lg9FD08zrUuoXJrfdgUdi2k4SeMphwNDnP9zJUYjeTdUNVRaME9MVE5WNjhNVjBJV1hEQ0ZWWEJRUS4u" target="_blank" rel="noopener noreferrer">View Resume Book Form <i className="icon-book" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
