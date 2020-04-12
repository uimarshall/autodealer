import React from "react";

const SingleItem = () => {
	return (
		<>
			<div className="featured-item my-3 d-flex flex-wrap p-2 align-items-baseline text-capitalize">
				<span className="featured-icon mr-2">
					<i className="fa fa-car"></i>
				</span>
				<h5 className="font-weight-bold mx-1" id="carMaker">
					camry
				</h5>

				<h5 className="mx-1">new model</h5>
			</div>
		</>
	);
};

export default SingleItem;
