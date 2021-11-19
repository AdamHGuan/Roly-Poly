// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

// import LoginForm from "../auth/LoginForm";

// import { loadDecks } from "../../store/deck";

import "./Home.css";

function Home() {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(loadDecks());
	// }, [dispatch]);

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
		</>
	);
}

export default Home;
