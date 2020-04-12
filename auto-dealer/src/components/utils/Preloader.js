import React from "react";
import preloader from "../../images/spinner-preloader.gif";
// The preloader.gif is from 'loading.io'
// The Javascript code for the preloader sits in 'index.html'

const Preloader = () => {
	return (
		<div className="preloader d-flex justify-content-center align-items-center">
			<img src={preloader} alt="preloader" />
		</div>
	);
};

export default Preloader;
