import React from "react";
import american from "../../images/american.jpg";

const Cards = () => {
	return (
		<React.Fragment>
			{/* Cars Display */}
			{/* This should be put in a div with a className of row when imported to another component */}
			<div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
				<div className="card car-card">
					<img
						src={american}
						alt="american car"
						className="card-img-top car-img"
					/>
					{/* card body */}
					<div className="card-body">
						{/* justify-content-between makes d flex children as far as possible frm each other i.e model&price in this case */}{" "}
						<div className="car-info d-flex justify-content-between">
							{/* first flex child */}
							<div className="car-text text-uppercase">
								<h6 className="font-weight-bold"> manufacturer </h6>{" "}
								<h6> model </h6>
							</div>
							{/* second flex child */}
							<h5 className="car-value align-self-center py-2 px-3">
								$ <span className="car-price"> 15000 </span>
							</h5>
						</div>
					</div>
					{/* Card Footer */}
					{/* justify-content-between makes d flex children as far as possible frm each other i.e model&price in this case */}{" "}
					<div className="card-footer text-capitalize d-flex justify-content-between">
						<p>
							<span>
								<i className="fa fa-car"> </i>
							</span>
							murano
						</p>
						<p>
							<span>
								<i className="fa fa-cogs"> </i>
							</span>
							automatic
						</p>
						<p>
							<span>
								<i className="fa fa-car"> </i>
							</span>
							50
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Cards;
