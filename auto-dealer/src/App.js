import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Skills from "./components/pages/Skills";
import Preloader from "./components/utils/Preloader";
import Stock from "./components/pages/Stock";
import SearchDiv from "./components/utils/SearchDiv";
import FeaturedCar from "./components/utils/FeaturedCar";
import Footer from "./components/layout/Footer";

function App() {
	return (
		<Router>
			<div className="App">
				<Preloader />
				<Navbar />
				<Header />
				<Skills />
				<Stock />
				<SearchDiv />
				<FeaturedCar />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
