import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import AddContact from "./AddContact";

export const Home = () => (
	<div className="container ">
		<div className="outcolor rounded">
			<div className='innercolor rounded'>
				<AddContact />
			</div>
		</div>
	</div>
);
