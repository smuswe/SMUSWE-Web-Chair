import React, { Component } from 'react'

export default class Sponsors extends Component {
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
                                            <span className="heading-meta">2020-2021</span>
                                            <h2 className="colorlib-heading">Our Sponsors</h2>
                                            <img src={ require('./img/att-logo.jpg') }/>
                                            <img src={ require('./img/credera.png') }/>
                                            <img src={ require('./img/medtronic-logo_orig.jpg') }/>
                                            <img src={ require('./img/raytheon1_orig.jpg') }/>
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