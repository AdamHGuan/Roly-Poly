import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import EditDeckForm from "./EditDeckForm";

function EditDeckFormModal({ deck }) {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button
				className="btn"
				title="Edit Deck"
				onClick={() => setShowModal(true)}
			>
				Edit Deck
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditDeckForm
						deck={deck}
						onClose={() => setShowModal(false)}
						isModal={isModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default EditDeckFormModal;
