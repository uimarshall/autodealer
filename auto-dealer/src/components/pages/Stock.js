import React from "react";
import Button from "../utils/Button";
import Cards from "../utils/Cards";

const Stock = () => {
	return (
		<>
			<section className="stock py-5" id="stock">
				<div className="container">
					{/* Section title */}
					<div className="row mb-5">
						<div className="col d-flex flex-wrap text-uppercase justify-content-center">
							<h1 className="font-weight-bold align-self-center mx-1"> our </h1>
							<h1 className="section-title-special mx-1"> stock </h1>
						</div>
					</div>
					{/* Button */}
					<Button />
					<div className="row">
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
					</div>
				</div>
			</section>
		</>
	);
};

export default Stock;
