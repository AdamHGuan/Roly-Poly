import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeDeck, loadDecks } from "../../store/deck";
import "./DeleteDeckForm.css";

function DeleteDeckForm({ deck, onClose, isModal }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const id = deck?.id;

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		const data = {
			id,
		};

		dispatch(removeDeck(data));
		dispatch(loadDecks());

		(() => {
			setTimeout(() => {
				history.push("/decks");
			}, 300);
		})();

		if (isModal) {
			onClose();
		}
	};

	const handleCancelClick = (e) => {
		onClose();
	};

	return (
		<>
			<div>
				<form onSubmit={handleCreateSubmit}>
					<div>
						<p>Remove this deck?</p>
					</div>

					<div>
						<button className="btn" type="submit">
							Submit
						</button>
					</div>
					<div>
						<button className="btn" type="button" onClick={handleCancelClick}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default DeleteDeckForm;
