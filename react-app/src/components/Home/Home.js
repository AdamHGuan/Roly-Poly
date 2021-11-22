import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

function Home() {
	return (
		<>
			<div>
				<h1>This is the home page</h1>
			</div>
			<div>
				<NavLink to={`/decks`}>
					<div>To all Decks</div>
				</NavLink>
			</div>
			<div>
				<NavLink to={`/cards`}>
					<div>To all Cards</div>
				</NavLink>
			</div>
		</>
	);
}

export default Home;
