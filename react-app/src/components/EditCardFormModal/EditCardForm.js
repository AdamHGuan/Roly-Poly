import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCard, loadCards } from "../../store/card";
import "./EditCardForm.css";

function EditCardForm({ card, onClose, isModal }) {
	const dispatch = useDispatch();

	const id = card?.id;

	const [frontContent, setFrontContent] = useState(card?.frontContent);
	const [backContent, setBackContent] = useState(card?.backContent);
	// const [isPublic, setIsPublic] = useState(card?.isPublic);

	const [errors, setErrors] = useState([]);

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		const data = {
			id,
			frontContent,
			backContent,
			// isPublic,
		};

		let res = await dispatch(editCard(data));
		await dispatch(loadCards());

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
			<div>
				<form onSubmit={handleCreateSubmit}>
					<div>
						<p>Card Edit</p>
					</div>
					<div>
						{errors.length > 0 &&
							errors.map((error, ind) => (
								<p key={ind} className="login-err">
									{error.split(":")[1]}
								</p>
							))}
					</div>
					<div>
						<label>Card front side</label>
						<input
							type="text"
							placeholder="front content"
							value={frontContent}
							onChange={(e) => setFrontContent(e.target.value)}
						/>
					</div>
					<div>
						<label>Card back side</label>
						<input
							type="text"
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

export default EditCardForm;
