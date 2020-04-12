import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
	return (
		<React.Fragment>
			<section className="skills py-5" id="skills">
				<div className="container">
					{/* Section title */}
					<div className="row mb-5">
						<div className="col d-flex flex-wrap text-uppercase justify-content-center">
							<h1 className="font-weight-bold align-self-center mx-1">
								your sure bet is
							</h1>
							<h1 className="section-title-special mx-1"> carspree </h1>
						</div>
					</div>
					{/* Skills */}
					<div className="row">
						<div className="col-sm-6 col-lg-3 text-center my-3">
							<Link to="" className="skills-icon p-2 rounded-circle">
								<i className="fa fa-car fa-fw"></i>
							</Link>
							<h6 className="text-uppercase font-weight-bold my-3">
								Brand Varieties
							</h6>
							<div className="skills-underline"></div>
							<p className="w-75 mx-auto text-muted">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
								ea?
							</p>
						</div>
						<div className="col-sm-6 col-lg-3 text-center my-3">
							<Link to="" className="skills-icon p-2 rounded-circle">
								<i className="fa fa-money fa-fw"></i>
							</Link>
							<h6 className="text-uppercase font-weight-bold my-3">
								Affordable
							</h6>
							<div className="skills-underline"></div>
							<p className="w-75 mx-auto text-muted">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
								ea?
							</p>
						</div>
						<div className="col-sm-6 col-lg-3 text-center my-3">
							<Link to="" className="skills-icon p-2 rounded-circle">
								<i className="fa fa-car fa-fw"></i>
							</Link>
							<h6 className="text-uppercase font-weight-bold my-3">
								Green Energy
							</h6>
							<div className="skills-underline"></div>
							<p className="w-75 mx-auto text-muted">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
								ea?
							</p>
						</div>
						<div className="col-sm-6 col-lg-3 text-center my-3">
							<Link to="" className="skills-icon p-2 rounded-circle">
								<i className="fa fa-comments fa-fw"></i>
							</Link>
							<h6 className="text-uppercase font-weight-bold my-3">
								Free support
							</h6>
							<div className="skills-underline"></div>
							<p className="w-75 mx-auto text-muted">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
								ea?
							</p>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Skills;
