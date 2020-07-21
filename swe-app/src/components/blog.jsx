import React, { Component } from 'react'

export default class Blog extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-blog" data-section="blog">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Read</span>
								<h2 className="colorlib-heading">Past Events</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="blog.html" className="blog-img"><img src="images/painting.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small>Feb 11, 2020 </small> | <small> Mentoring </small> </span>
										<h3><a href="blog.html">Painting with a Twist!</a></h3>
										<p>We painted!</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
								<div className="blog-entry">
									<a href="blog.html" className="blog-img"><img src="images/welocal.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small>Feb 1, 2020 </small> | <small> Conference </small></span>
										<h3><a href="blog.html">WELocal in San Diego</a></h3>
										<p>We went to San Diego!</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="blog.html" className="blog-img"><img src="images/snsw.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small>Feb 25, 2020 </small> | <small> Special Events </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="blog.html">She Networks She Wins 2020</a></h3>
										<p>It was fun.</p>
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
