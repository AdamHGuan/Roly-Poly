import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { loadDecks } from "../../store/deck";

import AddDeckFormModal from "../AddDeckFormModal";

import "./AllDecks.css";

function AllDecks() {
	const dispatch = useDispatch();

	const decks = useSelector((state) =>
		state.deck?.decks?.sort((a, b) => b.id - a.id)
	);

	useEffect(() => {
		dispatch(loadDecks());
	}, [dispatch]);

	return (
		<>
			<div className="deck-container-outer">
				<div>
					<h1 className="all-deck-h1">All Decks</h1>
				</div>
				<div className="all-deck-btn-container">
					<div>
						<NavLink to={`/cards`}>
							<button className="btn">Cards</button>
						</NavLink>
					</div>
					<div>
						<AddDeckFormModal />
					</div>
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
