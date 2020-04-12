import React from "react";
import { Link } from "react-router-dom";
import naija from "../../images/ford-car.jpg";
import SingleItem from "./SingleItem";

const FeaturedCar = () => {
	return (
		<>
			<section className="featured py-5" id="featured">
				<div className="container">
					{/* section title */}
					<div className="row mb-5">
						<div className="col d-flex flex-wrap text-uppercase justify-content-center">
							<h1 className="font-weight-bold align-self-center mx-1">
								featured
							</h1>
							<h1 className="section-title-special mx-1">cars</h1>
						</div>
					</div>
					<div className="row">
						{/* featured Info */}
						<div className="col-10 mx-auto col-lg-6 my-3 featured-info">
							{/* Single Item */}
							<SingleItem />
							<SingleItem />
							<SingleItem />
							<SingleItem />
							<SingleItem />
							<SingleItem />
						</div>
						{/* featured image */}
						<div className="col-10 mx-auto col-lg-6 my-3 featured-img align-self-center">
							<div className="img-container">
								<img
									src={naija}
									alt="car"
									className="img-fluid featured-photo"
								/>
								<Link to="" className="featured-link">
									<i className="fa fa-search"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FeaturedCar;
