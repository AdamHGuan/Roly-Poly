import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDeck, loadDecks } from "../../store/deck";
import "./AddDeckForm.css";

function AddDeckForm({ onClose, isModal }) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.session);
	const userId = user?.id;

	const [title, setTitle] = useState("");
	// const [isPublic, setIsPublic] = useState(false);
	const [addImage, setAddImage] = useState(false);
	const [deckImgUrl, setDeckImgUrl] = useState("");

	const [errors, setErrors] = useState([]);

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		const data = {
			userId,
			title,
			// isPublic,
			deckImgUrl,
		};

		let res = await dispatch(addDeck(data));
		await dispatch(loadDecks());

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
						<h4 className="modal-h4">Add a deck</h4>
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
						<label className="modal-label">Add cover image?</label>
						<input
							type="checkbox"
							checked={addImage}
							onChange={(e) => setAddImage(!addImage)}
						/>
					</div>

					{addImage && (
						<div className="modal-section">
							<label className="modal-label">Deck image URl</label>
							<input
								type="text"
								placeholder="URL"
								value={deckImgUrl}
								onChange={(e) => setDeckImgUrl(e.target.value)}
							/>
						</div>
					)}

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

export default AddDeckForm;
