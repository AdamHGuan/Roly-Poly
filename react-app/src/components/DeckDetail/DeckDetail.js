// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

// import LoginForm from "../auth/LoginForm";

// import {  } from "../../store/";

import "./DeckDetail.css";

function DeckDetail() {
	// const { user } = useSelector((state) => state.session);
	const { deckId } = useParams();

	const deck = useSelector((state) =>
		state.deck?.decks?.find((ele) => ele.id === +deckId)
	);

	return (
		<>
			<div>
				<h1>This is the Deck Detail page</h1>
			</div>
			<div>
				<p>{deck?.title}</p>
			</div>
			<div>
				<img src={deck?.deckImgUrl} alt="deck?.title" className="deck-img" />
			</div>
			<div>
				<button title="Edit Deck">Edit Deck</button>
			</div>
			<div>
				<button title="Delete Deck">Delete Deck</button>
			</div>
		</>
	);
}

export default DeckDetail;
