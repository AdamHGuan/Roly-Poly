import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { loadDecks } from "../../store/deck";

import AddDeckFormModal from "../AddDeckFormModal";

import "./AllDecks.css";

function AllDecks() {
	const dispatch = useDispatch();

	const decks = useSelector((state) =>
		state.deck?.decks?.sort((a, b) => a.id - b.id)
	);

	useEffect(() => {
		dispatch(loadDecks());
	}, [dispatch]);

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
												alt="Deck Cover"
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
