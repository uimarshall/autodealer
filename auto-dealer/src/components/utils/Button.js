import React from "react";

const Button = () => {
	return (
		<React.Fragment>
			<div className="row mb-5">
				<div className="col-10 mx-auto col-md-12 d-flex justify-content-end">
					<button
						type="button"
						class="btn btn-outline-primary text-uppercase mx-1">
						all
					</button>
					<button
						type="button"
						class="btn btn-outline-primary text-uppercase mx-1"
						id="nigeria"></button>
					<button
						type="button"
						class="btn btn-outline-primary text-uppercase mx-1"
						id="america"></button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Button;
