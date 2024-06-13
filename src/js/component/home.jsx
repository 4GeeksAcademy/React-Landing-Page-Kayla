import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Banner from "./Banner";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Banner/>
		</div>
	);
};

export default Home;
