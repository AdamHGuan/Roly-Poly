import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeCard, loadCards } from "../../store/card";
import "./DeleteCardForm.css";

function DeleteCardForm({ card, onClose, isModal }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const id = card?.id;

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		const data = {
			id,
		};

		dispatch(removeCard(data));
		dispatch(loadCards());

		(() => {
			setTimeout(() => {
				history.push("/cards");
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
			<div className="modal-main">
				<form onSubmit={handleCreateSubmit}>
					<div>
						<h4 className="modal-h4">Remove this card?</h4>
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

export default DeleteCardForm;
