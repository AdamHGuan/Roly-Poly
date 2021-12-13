import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { removeDeckCard, loadDeckCards } from "../../store/deck_card";

import "./DeleteCardFromDeckForm.css";

function DeleteCardFromDeckForm({ onClose, isModal }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const { deckId } = useParams();
	const deckCards = useSelector((state) =>
		state.deck_card?.deck_cards?.sort((a, b) => a.id - b.id)
	);
	const [cardId, setCardId] = useState(deckCards[0]?.id);

	// console.log(deckCards[0].id);

	// console.log(deckCards);
	// const id = deck?.id;
	// const [errors, setErrors] = useState([]);

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		// const data = {
		// 	id,
		// };

		await dispatch(removeDeckCard(deckId, cardId));
		await dispatch(loadDeckCards(deckId));

		history.push(`/decks/${deckId}`);

		onClose();
	};

	const handleCancelClick = (e) => {
		onClose();
	};

	return (
		<>
			<div className="modal-main">
				<form onSubmit={handleCreateSubmit}>
					<div>
						<h4 className="modal-h4">Remove a card from deck</h4>
					</div>
					{/* <div>
						{errors.length > 0 &&
							errors.map((error) => (
								<p className="login-err">{error.split(":")[1]}</p>
							))}
					</div> */}
					<div className="modal-section">
						<select value={cardId} onChange={(e) => setCardId(e.target.value)}>
							{deckCards?.map((card) => (
								<option key={card.id} value={card.id}>
									{card.frontContent.slice(0, 20)}
								</option>
							))}
						</select>
					</div>

					<div className="modal-btn-container">
						<button className="btn" type="submit">
							Submit
						</button>
						<button className="btn" type="button" onClick={handleCancelClick}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default DeleteCardFromDeckForm;
