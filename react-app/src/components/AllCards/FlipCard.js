import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./FlipCard.css";

function FlipCard({ card }) {
	const [flip, setFlip] = useState(false);
	const history = useHistory();

	const fit = (info) => {
		if (fit.length < 350) return info;

		return info.slice(0, 350) + "...";
	};

	return (
		<div
			className={`card-content ${flip ? "front" : ""}`}
			onDoubleClick={() => history.push(`/cards/${card.id}`)}
			onClick={() => setFlip(!flip)}
		>
			<div key={card?.id} className="card-front-content">
				{fit(card?.frontContent)}
			</div>
			<div key={card?.id} className="card-back-content">
				{fit(card?.backContent)}
			</div>
		</div>
	);
}

export default FlipCard;
