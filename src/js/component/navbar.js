import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<nav className="navbar navbar-light p-3 mb-3" style={{ background: "#B37B70" }}>
			<div className="container">
				<div className="ml-auto">
					<Link to="/">
						<button className="btn " >Add Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
