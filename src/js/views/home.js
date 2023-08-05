import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import AddContact from "./AddContact";
import Contact from "../component/Contact";

export const Home = () => (
	< div className='container' >
        <div className="outcolor rounded">
          <div className='innercolorcontact rounded'>
				<Contact />
			</div>
		</div>
	</div>
);
