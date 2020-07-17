import React, { Component } from 'react'

export default class Sponsors extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="sponsors">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">2020-2021</span>
                                            <h2 className="colorlib-heading">Our Sponsors</h2>
                                                <div className="row">
                                                        <a className="response-img"><img src="images/att-logo.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                                        <a className="response-img"><img src="images/credera.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                                        <a className="response-img"><img src="images/medtronic-logo_orig.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                                        <a className="response-img"><img src="images/raytheon1_orig.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                                </div> 
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