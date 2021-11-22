import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import EditCardForm from "./EditCardForm";

function EditCardFormModal({ card }) {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button title="Edit Card" onClick={() => setShowModal(true)}>
				Edit Card
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditCardForm
						card={card}
						onClose={() => setShowModal(false)}
						isModal={isModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default EditCardFormModal;
