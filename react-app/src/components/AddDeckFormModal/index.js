import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import AddDeckForm from "./AddDeckForm";

function AddDeckFormModal() {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button
				className="btn"
				title="Add Deck"
				onClick={() => setShowModal(true)}
			>
				Add Deck
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<AddDeckForm onClose={() => setShowModal(false)} isModal={isModal} />
				</Modal>
			)}
		</>
	);
}

export default AddDeckFormModal;
