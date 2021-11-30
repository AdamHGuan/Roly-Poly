import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { loadDecks } from "../../store/deck";
import { loadDeckCards } from "../../store/deck_card";

import EditDeckFormModal from "../EditDeckFormModal";
import DeleteDeckFormModal from "../DeleteDeckFormModal";
import FlipCard from "../AllCards/FlipCard";
import DeleteCardFromDeckFormModal from "../DeleteCardFromDeckFormModal";

// import {  } from "../../store/";

import "./DeckDetail.css";

function DeckDetail() {
	// const { user } = useSelector((state) => state.session);
	const dispatch = useDispatch();

	const { deckId } = useParams();

	const deck = useSelector((state) =>
		state.deck?.decks?.find((ele) => ele.id === +deckId)
	);
	const deckCards = useSelector((state) => state.deck_card?.deck_cards);

	useEffect(() => {
		dispatch(loadDecks());
		dispatch(loadDeckCards(deckId));
	}, [dispatch, deckId]);

	if (deckCards?.length === 0)
		return (
			<>
				<div className="deck-detail-container-outer">
					<div>
						<h1 className="detail-deck-h1"> {deck?.title}</h1>
					</div>

					<div className="detail-deck-btn-container">
						<div>
							<NavLink to={`/decks`}>
								<button className="btn">Decks</button>
							</NavLink>
						</div>
						<div>
							<NavLink to={`/cards`}>
								<button className="btn">Cards</button>
							</NavLink>
						</div>
						<div>
							<EditDeckFormModal deck={deck} />
						</div>
						<div>
							<DeleteDeckFormModal deck={deck} />
						</div>
					</div>
					<h4>This deck does not have any cards</h4>
				</div>
			</>
		);

	if (deck) {
		return (
			<>
				<div className="deck-detail-container-outer">
					<div>
						<h1 className="detail-deck-h1"> {deck?.title}</h1>
					</div>
					<div>
						<h4>one click to flip and double click to go to card detail</h4>
					</div>
					<div className="detail-deck-btn-container">
						<div>
							<NavLink to={`/decks`}>
								<button className="btn">Decks</button>
							</NavLink>
						</div>
						<div>
							<NavLink to={`/cards`}>
								<button className="btn">Cards</button>
							</NavLink>
						</div>
						<div>
							<EditDeckFormModal deck={deck} />
						</div>
						<div>
							<DeleteDeckFormModal deck={deck} />
						</div>
						<div>
							<DeleteCardFromDeckFormModal />
						</div>
					</div>
					<div className="card-container-main">
						{deckCards?.map((card) => {
							return <FlipCard card={card} key={card.id} />;
						})}
					</div>
				</div>

				{/* <div>
					{deckCards?.map((card) => {
						return (
							<div key={card?.id} className="deck-card-outer">
								<NavLink to={`/cards/${card?.id}`} card={card}>
									<div>
										<p>{card?.frontContent}</p>
									</div>
									<div>
										<p>{card?.backContent}</p>
									</div>
								</NavLink>
							</div>
						);
					})}
				</div> */}
			</>
		);
	}

	return (
		<>
			<div className="deck-detail-container-outer">
				<h4>Invalid Deck</h4>
				<div className="detail-deck-btn-container">
					<div>
						<NavLink to={`/decks`}>
							<button className="btn">Decks</button>
						</NavLink>
					</div>
					<div>
						<NavLink to={`/cards`}>
							<button className="btn">Cards</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}

export default DeckDetail;
