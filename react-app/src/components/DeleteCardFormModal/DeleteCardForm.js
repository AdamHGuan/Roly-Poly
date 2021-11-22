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
			<div>
				<form onSubmit={handleCreateSubmit}>
					<div>
						<p>Remove this card?</p>
					</div>

					<div>
						<button type="submit">Submit</button>
					</div>
					<div>
						<button type="button" onClick={handleCancelClick}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default DeleteCardForm;
