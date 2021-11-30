import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { loadCards } from "../../store/card";
// import { addDeckCard, removeDeckCard } from "../../store/deck_card";

import EditCardFormModal from "../EditCardFormModal";
import DeleteCardFormModal from "../DeleteCardFormModal";
import AddCardToDeckFormModal from "../AddCardToDeckFormModal";

// import {  } from "../../store/";

import "./CardDetail.css";

function CardDetail() {
	// const { user } = useSelector((state) => state.session);
	const dispatch = useDispatch();

	const { cardId } = useParams();

	const card = useSelector((state) =>
		state.card?.cards?.find((ele) => ele.id === +cardId)
	);

	useEffect(() => {
		dispatch(loadCards());
	}, [dispatch]);

	if (card) {
		return (
			<>
				<div className="card-detail-container-outer">
					<div>
						<h1 className="detail-card-h1">Card Detail</h1>
					</div>
					<div className="detail-card-btn-container">
						<div>
							<NavLink to={`/decks`}>
								<button className="btn">Decks</button>
							</NavLink>
						</div>
						<div>
							<NavLink to={`/cards`}>
								<button className="btn">Cards</button>
							</NavLink>
						</div>
						<div>
							<EditCardFormModal card={card} />
						</div>
						<div>
							<DeleteCardFormModal card={card} />
						</div>
						<div>
							<AddCardToDeckFormModal card={card} />
						</div>
					</div>

					<div className="card-info-container">{card?.frontContent}</div>
					<div className="card-info-container">{card?.backContent}</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="card-detail-container-outer">
				<h4>Invalid Card</h4>
				<div className="detail-card-btn-container">
					<div>
						<NavLink to={`/decks`}>
							<button className="btn">Decks</button>
						</NavLink>
					</div>
					<div>
						<NavLink to={`/cards`}>
							<button className="btn">Cards</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardDetail;
