import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeDeck, loadDecks } from "../../store/deck";
import "./DeleteDeckForm.css";

function DeleteDeckForm({ deck, onClose, isModal }) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.session);
	const history = useHistory();

	const id = deck?.id;

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		if (user.username === "Demo") {
			onClose();
		} else {
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
						<h4 className="modal-h4">Delete this deck?</h4>
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

export default DeleteDeckForm;
