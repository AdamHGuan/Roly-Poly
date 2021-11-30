import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import AddCardForm from "./AddCardForm";

function AddCardFormModal() {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button
				className="btn"
				title="Add Card"
				onClick={() => setShowModal(true)}
			>
				Add Card
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<AddCardForm onClose={() => setShowModal(false)} isModal={isModal} />
				</Modal>
			)}
		</>
	);
}

export default AddCardFormModal;
