import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editDeck, loadDecks } from "../../store/deck";
import "./EditDeckForm.css";

function EditDeckForm({ deck, onClose, isModal }) {
	const dispatch = useDispatch();

	const id = deck?.id;

	const [title, setTitle] = useState(deck?.title);
	const [isPublic, setIsPublic] = useState(deck?.isPublic);
	const [deckImgUrl, setDeckImgUrl] = useState(deck?.deckImgUrl);

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		const data = {
			id,
			title,
			isPublic,
			deckImgUrl,
		};

		await dispatch(editDeck(data));
		await dispatch(loadDecks());

		// if (isModal) {
		// 	onClose();
		// }
	};

	const handleCancelClick = (e) => {
		onClose();
	};

	return (
		<>
			<div>
				<form onSubmit={handleCreateSubmit}>
					<div>
						<p>Deck Edit</p>
					</div>

					<div>
						<label>Deck title</label>
						<input
							type="text"
							placeholder="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div>
						<label>Set it public?</label>
						<input
							type="checkbox"
							checked={isPublic}
							onChange={(e) => setIsPublic(!isPublic)}
						/>
					</div>
					<div>
						<label>Deck image URl</label>
						<input
							type="text"
							placeholder="URL"
							value={deckImgUrl}
							onChange={(e) => setDeckImgUrl(e.target.value)}
						/>
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

export default EditDeckForm;
