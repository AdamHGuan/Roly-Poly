import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { loadDecks } from "../../store/deck";
import EditDeckFormModal from "../EditDeckFormModal";
import DeleteDeckFormModal from "../DeleteDeckFormModal";

// import {  } from "../../store/";

import "./DeckDetail.css";

function DeckDetail() {
	// const { user } = useSelector((state) => state.session);
	const dispatch = useDispatch();

	const { deckId } = useParams();

	const deck = useSelector((state) =>
		state.deck?.decks?.find((ele) => ele.id === +deckId)
	);

	useEffect(() => {
		dispatch(loadDecks());
	}, [dispatch]);

	if (deck) {
		return (
			<>
				<div>
					<NavLink to={`/decks`}>
						<div>To all Decks</div>
					</NavLink>
				</div>
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
					<EditDeckFormModal deck={deck} />
				</div>
				<div>
					<DeleteDeckFormModal deck={deck} />
				</div>
			</>
		);
	}

	return (
		<>
			<p>Invalid Deck ID</p>
			<div>
				<NavLink to={`/decks`}>
					<div>To all Decks</div>
				</NavLink>
			</div>
		</>
	);
}

export default DeckDetail;
