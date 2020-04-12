import React from "react";
import { NavLink, Link } from "react-router-dom";

const Search = () => {
	return (
		<React.Fragment>
			<div className="col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-grey p-4">
				{/* first flexbox child */}
				<Link to="" className="question-icon mr-3">
					<i className="fa fa-search fa-fw"></i>
				</Link>
				{/* second flexbox child */}
				<div className="question-text w-75">
					<h4 className="question-title text-capitalize font-weight-bold">
						are you looking for a nice car?
					</h4>
					<p className="question-info">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Blanditiis, aliquid!
					</p>
				</div>
			</div>
			{/* Single Question */}
			<div className="col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-yellow p-4">
				{/* first flexbox child */}
				<Link to="" className="question-icon mr-3">
					<i className="fa fa-dollar fa-fw"></i>
				</Link>
				{/* second flexbox child */}
				<div className="question-text w-75">
					<h4 className="question-title text-capitalize font-weight-bold">
						do you want to sell or exchange a car?
					</h4>
					<p className="question-info">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Blanditiis, aliquid!
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Search;
