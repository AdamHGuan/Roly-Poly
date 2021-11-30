import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import DeleteDeckForm from "./DeleteDeckForm";

function DeleteDeckFormModal({ deck }) {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button
				className="btn"
				title="Delete Deck"
				onClick={() => setShowModal(true)}
			>
				Delete Deck
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<DeleteDeckForm
						deck={deck}
						onClose={() => setShowModal(false)}
						isModal={isModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default DeleteDeckFormModal;
