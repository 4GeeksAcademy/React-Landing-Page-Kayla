import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Banner/>
			<div className= "d-flex justify-content-center p-5">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
            </div>
			<Footer/>


		</div>
	);
};

export default Home;
