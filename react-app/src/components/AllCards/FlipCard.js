import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./FlipCard.css";

function FlipCard({ card }) {
	const [flip, setFlip] = useState(false);
	const history = useHistory();

	// const fit = (info) => {
	// 	return info.slice(0, 35);
	// };

	return (
		<div
			className={`card-content ${flip ? "front" : ""}`}
			onDoubleClick={() => history.push(`/cards/${card.id}`)}
			onClick={() => setFlip(!flip)}
		>
			<div key={card?.id} className="card-front-content">
				{card?.frontContent}
			</div>
			<div key={card?.id} className="card-back-content">
				{card?.backContent}
			</div>
		</div>
	);
}

export default FlipCard;
