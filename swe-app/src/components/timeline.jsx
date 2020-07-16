import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">News/Upcoming Events</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>She Networks, She Wins <span> February 25, 2020, 6 - 8 pm</span></h2>
                        <p>Join SMU SWE and the Hart Center for Engineering Leadership as we host professional women engineers and hear about what it means to be one. Undergraduates, graduates, and professionals who are interested in networking with or hearing from these ladies are welcome to join!
                        <div className="text-center">
                        <br/>Event Details<br/>February 25, 2020, 6 - 8 pm<br/>Caruth Hall 4th Floor, Palmer Conference Ctr<br/>3145 Dyer Street, Dallas, TX 75205 
                        <br/>Dress is Business Causal.
                        </div>
                        <br/>RSVP for the event today! Please contact smu.swe@smu.edu to become a corporate sponsor and for more details on our sponsorship options.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>General Meetings <span> Monthly</span></h2>
                        <p>All General Meetings will be held remotely.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mentoring Events <span> tbd </span></h2>
                        <p>Mentoring Events are held throughout the year.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
