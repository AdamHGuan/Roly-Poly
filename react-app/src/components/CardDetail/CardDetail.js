import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { loadCards } from "../../store/card";
import { loadDecks } from "../../store/deck";

import EditCardFormModal from "../EditCardFormModal";
import DeleteCardFormModal from "../DeleteCardFormModal";
import AddCardToDeckFormModal from "../AddCardToDeckFormModal";

import "./CardDetail.css";

function CardDetail() {
	const dispatch = useDispatch();
	const [display, setDisplay] = useState("both");

	const { cardId } = useParams();

	const card = useSelector((state) =>
		state.card?.cards?.find((ele) => ele.id === +cardId)
	);

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
	};

	// document.body.onkeyup = function (e) {
	// 	if (e.key === "ArrowLeft") {
	// 		if (display === "both") {
	// 			setDisplay("front");
	// 		} else if (display === "front") {
	// 			setDisplay("back");
	// 		} else {
	// 			setDisplay("both");
	// 		}
	// 	}
	// 	if (e.key === "ArrowRight") {
	// 		if (display === "both") {
	// 			setDisplay("front");
	// 		} else if (display === "front") {
	// 			setDisplay("back");
	// 		} else {
	// 			setDisplay("both");
	// 		}
	// 	}
	// };

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
