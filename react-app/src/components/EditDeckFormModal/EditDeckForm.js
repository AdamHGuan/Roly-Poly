import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editDeck, loadDecks } from "../../store/deck";
import "./EditDeckForm.css";

function EditDeckForm({ deck, onClose, isModal }) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.session);

	const id = deck?.id;

	const [title, setTitle] = useState(deck?.title);
	// const [isPublic, setIsPublic] = useState(deck?.isPublic);
	const [deckImgUrl, setDeckImgUrl] = useState(deck?.deckImgUrl);

	const [errors, setErrors] = useState([]);

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		if (user.username == "Demo") {
			onClose();
		} else {
			const data = {
				id,
				title,
				// isPublic,
				deckImgUrl,
			};

			let res = await dispatch(editDeck(data));
			await dispatch(loadDecks());

			if (res.errors) {
				setErrors(res.errors);
				return;
			}
			if (res) {
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
						<h4 className="modal-h4">Deck Edit</h4>
					</div>
					<div className="error-msg-container-modal">
						{errors.length > 0 &&
							errors.map((error, ind) => (
								<p key={ind} className="login-err">
									{error.split(":")[1]}
								</p>
							))}
					</div>
					<div className="modal-section">
						<label className="modal-label">Deck title</label>
						<input
							type="text"
							placeholder="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					{/* <div>
						<label>Set it public?</label>
						<input
							type="checkbox"
							checked={isPublic}
							onChange={(e) => setIsPublic(!isPublic)}
						/>
					</div> */}
					<div className="modal-section">
						<label className="modal-label">Deck image URl</label>
						<input
							type="text"
							placeholder="URL"
							value={deckImgUrl}
							onChange={(e) => setDeckImgUrl(e.target.value)}
						/>
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

export default EditDeckForm;
