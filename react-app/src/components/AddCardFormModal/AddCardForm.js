import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard, loadCards } from "../../store/card";
import "./AddCardForm.css";

function AddCardForm({ onClose, isModal }) {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.session);
	const userId = user?.id;

	const [frontContent, setFrontContent] = useState("");
	const [backContent, setBackContent] = useState("");
	// const [isPublic, setIsPublic] = useState(false);

	const [errors, setErrors] = useState([]);

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		if (user.username === "Demo") {
			onClose();
		} else {
			const data = {
				userId,
				frontContent,
				backContent,
				// isPublic,
			};

			let res = await dispatch(addCard(data));
			await dispatch(loadCards());

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
						<h4 className="modal-h4">Add a card</h4>
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
						<label className="modal-label">Card front side</label>
						<textarea
							rows="5"
							cols="33"
							className="formTextArea"
							placeholder="front content"
							value={frontContent}
							onChange={(e) => setFrontContent(e.target.value)}
						/>
					</div>
					<div className="modal-section">
						<label className="modal-label">Card back side</label>
						<textarea
							rows="5"
							cols="33"
							className="formTextArea"
							placeholder="back content"
							value={backContent}
							onChange={(e) => setBackContent(e.target.value)}
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

export default AddCardForm;
