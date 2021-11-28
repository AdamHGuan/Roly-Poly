import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { loadDecks } from "../../store/deck";

import AddDeckFormModal from "../AddDeckFormModal";

import "./AllDecks.css";

function AllDecks() {
	const dispatch = useDispatch();

	const decks = useSelector((state) => state.deck?.decks);

	useEffect(() => {
		dispatch(loadDecks());
	}, [dispatch]);

	return (
		<>
			<div className="deck-container-outer">
				<div>
					<h1 className="all-deck-h1">This is the All Decks page</h1>
				</div>
				<div>
					<AddDeckFormModal />
				</div>
				<div className="deck-container-main">
					{decks &&
						decks?.map((deck) => {
							return (
								<div key={deck.id} className="single-deck-container">
									<NavLink to={`/decks/${deck.id}`} className="deck-content">
										<div className="deck-content-info">
											<img
												src={deck?.deckImgUrl}
												alt="Deck Cover"
												className="deck-img"
											/>
											<p className="deck-title">{deck?.title}</p>
										</div>
									</NavLink>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default AllDecks;
