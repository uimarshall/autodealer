import React from "react";
import Search from "./Search";

const SearchDiv = () => {
	return (
		<>
			<div className="section question py-5" id="question">
				<div className="container">
					<div className="row">
						<Search />
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchDiv;
