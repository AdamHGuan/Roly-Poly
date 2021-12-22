import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { loadCards } from "../../store/card";
import { loadDecks } from "../../store/deck";

import EditCardFormModal from "../EditCardFormModal";
import DeleteCardFormModal from "../DeleteCardFormModal";
import AddCardToDeckFormModal from "../AddCardToDeckFormModal";

import "./CardDetail.css";

function CardDetail() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [display, setDisplay] = useState("both");

	const { cardId } = useParams();

	const card = useSelector((state) =>
		state.card?.cards?.find((ele) => ele.id === +cardId)
	);

	const cards = useSelector((state) =>
		state.card?.cards?.sort((a, b) => a.id - b.id)
	);
	let CardIndex = cards?.indexOf(card);

	document.body.onkeyup = function (e) {
		if (e.key === " ") {
			if (display === "both") {
				setDisplay("front");
			} else if (display === "front") {
				setDisplay("back");
			} else {
				setDisplay("both");
			}
		}
		if (e.key === "ArrowLeft") {
			if (CardIndex > 0) {
				let nextCard = cards[CardIndex - 1];
				history.push(`/cards/${nextCard.id}`);
			} else {
				let nextCard = cards[cards.length - 1];
				history.push(`/cards/${nextCard.id}`);
			}
		}
		if (e.key === "ArrowRight") {
			if (CardIndex < cards.length - 1) {
				let nextCard = cards[CardIndex + 1];
				history.push(`/cards/${nextCard.id}`);
			} else {
				let nextCard = cards[0];
				history.push(`/cards/${nextCard.id}`);
			}
		}
	};

	useEffect(() => {
		dispatch(loadCards());
		dispatch(loadDecks());
	}, [dispatch]);

	if (card) {
		return (
			<>
				<div className="card-detail-container-outer">
					<div>
						<h1 className="detail-card-h1">Card Detail</h1>
					</div>
					<div>
						<h3 className="detail-card-h1">
							Press "Space key" to change display setting!
						</h3>
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

					{/* <div className="radio-buttons">
						Both Sides
						<input
							value="both"
							name="display"
							type="radio"
							onChange={(e) => setDisplay(e.target.value)}
						/>
						Front Side
						<input
							value="front"
							name="display"
							type="radio"
							onChange={(e) => setDisplay(e.target.value)}
						/>
						Back Side
						<input
							value="back"
							name="display"
							type="radio"
							onChange={(e) => setDisplay(e.target.value)}
						/>
					</div> */}

					{display === "both" ? (
						<>
							<div className="card-info-container">{card?.frontContent}</div>
							<div className="card-info-container">{card?.backContent}</div>
						</>
					) : null}
					{display === "front" ? (
						<>
							<div className="card-info-container">{card?.frontContent}</div>
						</>
					) : null}
					{display === "back" ? (
						<>
							<div className="card-info-container">{card?.backContent}</div>
						</>
					) : null}
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
