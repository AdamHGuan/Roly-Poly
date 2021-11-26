import React from "react";
import { useState } from "react";
import "./FlipCard.css";

export default function FlipCard({ card }) {
	const [flip, setFlip] = useState(false);

	return (
		<div
			className={`card-content ${flip ? "front" : ""}`}
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
