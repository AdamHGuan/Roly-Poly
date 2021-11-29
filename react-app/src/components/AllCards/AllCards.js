import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";

import { loadCards } from "../../store/card";

import AddCardFormModal from "../AddCardFormModal";
import FlipCard from "./FlipCard";

import "./AllCards.css";

function AllCards() {
	const dispatch = useDispatch();

	const cards = useSelector((state) => state.card?.cards);

	useEffect(() => {
		dispatch(loadCards());
	}, [dispatch]);

	return (
		<div className="card-container-outer">
			<div>
				<h1 className="all-card-h1">All Cards</h1>
			</div>
			<div>
				<h4>one click to flip and double click to go to card detail page</h4>
			</div>
			<div>
				<AddCardFormModal />
			</div>
			<div className="card-container-main">
				{cards?.map((card) => {
					return <FlipCard card={card} key={card.id} />;
				})}
			</div>
		</div>
	);
}

export default AllCards;
