// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// import LoginForm from "../auth/LoginForm";

// import {  } from "../../store/";

import "./AllDecks.css";

function Home() {
	// const { user } = useSelector((state) => state.session);
	const decks = useSelector((state) => state.deck?.decks);

	return (
		<>
			<div>
				<h1>This is the All Decks page</h1>
			</div>
			<div>
				{decks &&
					decks?.map((deck) => {
						return (
							<>
								<p>{deck?.title}</p>
								<div>
									<img
										src={deck?.deckImgUrl}
										alt="deck?.title"
										className="deck-img"
									/>
								</div>
							</>
						);
					})}
			</div>
		</>
	);
}

export default Home;
