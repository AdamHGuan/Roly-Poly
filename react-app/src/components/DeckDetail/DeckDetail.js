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
					<h1 className="detail-deck-h1"> {deck?.title}</h1>
				</div>
				<div className="detail-deck-btn-container">
					<div>
						<EditDeckFormModal deck={deck} />
					</div>
					<div>
						<DeleteDeckFormModal deck={deck} />
					</div>
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
