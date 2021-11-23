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
	const [isPublic, setIsPublic] = useState(false);

	const [errors, setErrors] = useState([]);

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		const data = {
			userId,
			frontContent,
			backContent,
			isPublic,
		};

		let res = await dispatch(addCard(data));
		await dispatch(loadCards());

		if (res.errors) {
			setErrors(res.errors);
			return;
		}
		// console.log(res);
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
						<p>Add a card</p>
					</div>
					<div>
						{errors.length > 0 &&
							errors.map((error) => (
								<p className="login-err">{error.split(":")[1]}</p>
							))}
					</div>
					<div>
						<label>Card front side</label>
						<input
							type="text"
							placeholder="front content"
							// required
							value={frontContent}
							onChange={(e) => setFrontContent(e.target.value)}
						/>
					</div>
					<div>
						<label>Card back side</label>
						<input
							type="text"
							placeholder="back content"
							// required
							value={backContent}
							onChange={(e) => setBackContent(e.target.value)}
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

export default AddCardForm;
