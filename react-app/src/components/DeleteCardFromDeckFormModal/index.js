import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import DeleteCardFromDeckForm from "./DeleteCardFromDeckForm";

function DeleteCardFromDeckFormModal({ deck }) {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button
				className="btn"
				title="Delete a carc from this deck"
				onClick={() => setShowModal(true)}
			>
				Delete card from deck
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<DeleteCardFromDeckForm
						deck={deck}
						onClose={() => setShowModal(false)}
						isModal={isModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default DeleteCardFromDeckFormModal;
