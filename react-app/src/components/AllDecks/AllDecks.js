// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// import LoginForm from "../auth/LoginForm";
import AddDeckFormModal from "../AddDeckFormModal";

// import {  } from "../../store/";

import "./AllDecks.css";

function AllDecks() {
	// const { user } = useSelector((state) => state.session);
	const decks = useSelector((state) => state.deck?.decks);

	return (
		<>
			<div>
				<h1>This is the All Decks page</h1>
			</div>
			<div>
				<AddDeckFormModal />
			</div>
			<div>
				{decks &&
					decks?.map((deck) => {
						return (
							<div key={deck.id}>
								<NavLink to={`/decks/${deck.id}`}>
									<div>
										<p>{deck?.title}</p>
										<div>
											<img
												src={deck?.deckImgUrl}
												alt="deck?.title"
												className="deck-img"
											/>
										</div>
									</div>
								</NavLink>
							</div>
						);
					})}
			</div>
		</>
	);
}

export default AllDecks;
