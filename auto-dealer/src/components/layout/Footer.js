import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="footer py-5">
				<div className="footer-icons d-flex justify-content-around">
					<Link to="" className="footer-icon">
						<i className="fa fa-twitter"> </i>
					</Link>
					<Link to="" className="footer-icon">
						<i className="fa fa-linkedin"> </i>
					</Link>
					<Link to="" className="footer-icon">
						<i className="fa fa-instagram"> </i>
					</Link>
					<Link to="" className="footer-icon">
						<i className="fa fa-youtube"> </i>
					</Link>
					<Link to="" className="footer-icon">
						<i className="fa fa-facebook"> </i>
					</Link>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
