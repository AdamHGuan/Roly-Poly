import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addDeckCard } from "../../store/deck_card";
import "./AddCardToDeckForm.css";

function AddCardToDeckForm({ onClose, isModal }) {
	const dispatch = useDispatch();
	// const { user } = useSelector((state) => state.session);
	// const userId = user?.id;
	const { cardId } = useParams();
	const decks = useSelector((state) =>
		state.deck?.decks?.sort((a, b) => a.id - b.id)
	);

	const [deckId, setDeckId] = useState(decks[0]?.id);

	const [errors, setErrors] = useState([]);

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		// const data = {
		// 	CardId,
		// 	DeckId,
		// };

		// console.log(DeckId, cardId);
		let res = await dispatch(addDeckCard(deckId, cardId));

		if (res.errors) {
			setErrors(res.errors);
			return;
		}
		if (res) {
			onClose();
		}
	};

	const handleCancelClick = (e) => {
		onClose();
	};

	return (
		<>
			<div className="modal-main">
				<form onSubmit={handleCreateSubmit}>
					<div>
						<h4 className="modal-h4">Add this card to a deck</h4>
					</div>
					<div className="error-msg-container-modal">
						{errors.length > 0 &&
							errors.map((error) => (
								<p className="login-err">{error.split(":")[1]}</p>
							))}
					</div>
					<div className="modal-section">
						<select value={deckId} onChange={(e) => setDeckId(e.target.value)}>
							{decks?.map((deck) => (
								<option key={deck.id} value={deck.id}>
									{deck.title}
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

export default AddCardToDeckForm;
