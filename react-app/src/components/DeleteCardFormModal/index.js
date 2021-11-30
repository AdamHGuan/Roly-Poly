import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import DeleteCardForm from "./DeleteCardForm";

function DeleteCardFormModal({ card }) {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button
				className="btn"
				title="Delete Card"
				onClick={() => setShowModal(true)}
			>
				Delete Card
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<DeleteCardForm
						card={card}
						onClose={() => setShowModal(false)}
						isModal={isModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default DeleteCardFormModal;
