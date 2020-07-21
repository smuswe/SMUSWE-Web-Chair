import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">SWE @SMU</h2>
                    <p>Society of Women Engineers (SWE) is an international organization that has been providing support and services to establish engineering as a desirable and achievable career path for women since 1950. SMU SWE is the chapter of Society of Women Engineers at Southern Methodist University.</p>
                    <p>As a group, we aim to support women majoring in STEM degrees, while also fostering the next generation of female engineers. The organization is open to both men and women in engineering, and spends most of its time performing outreach, bringing in companies to talk to students, and helping each other make it through some of the toughest majors at SMU.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
