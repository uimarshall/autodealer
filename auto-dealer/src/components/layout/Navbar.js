import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/rollers.png";

const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg px-3" id="navbar">
				<Link href="#" className="navbar-brand">
					<img src={logo} alt="company logo" />
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#my-nav">
					<span className="navbar-icon">
						<i className="fa fa-bars"> </i>{" "}
					</span>
				</button>
				{/* Collapse Navbar */}
				<div className="collapse navbar-collapse" id="my-nav">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
							<NavLink to="#navbar" className="nav-link">
								home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="#skills" className="nav-link">
								skills
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="#inventory" className="nav-link">
								stock
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="#featured" className="nav-link">
								arrivals
							</NavLink>
						</li>
					</ul>
					{/* Navbar Icons */}
					<div className="nav-icons d-none d-lg-block">
						<Link to="" className="nav-icon mx-2 p-2 rounded-circle">
							{/* fa-fw = fixed width */}
							<i className="fa fa-twitter fa-fw"> </i>
						</Link>
						<Link to="" className="nav-icon mx-2 p-2 rounded-circle">
							<i className="fa fa-facebook fa-fw"> </i>
						</Link>
						<Link to="" className="nav-icon mx-2 p-2 rounded-circle">
							<i className="fa fa-instagram fa-fw"> </i>
						</Link>
						<Link to="" className="nav-icon mx-2 p-2 rounded-circle">
							<i className="fa fa-linkedin fa-fw"> </i>
						</Link>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
