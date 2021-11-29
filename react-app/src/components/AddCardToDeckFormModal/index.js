import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import AddCardToDeckForm from "./AddCardToDeckForm";

function AddCardToDeckFormModal() {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button title="Add Card to a Deck" onClick={() => setShowModal(true)}>
				Add Card to a Deck
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<AddCardToDeckForm
						onClose={() => setShowModal(false)}
						isModal={isModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default AddCardToDeckFormModal;
