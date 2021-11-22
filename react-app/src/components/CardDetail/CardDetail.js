import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { loadCards } from "../../store/card";
import EditCardFormModal from "../EditCardFormModal";
import DeleteCardFormModal from "../DeleteCardFormModal";

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
				<div>
					<NavLink to={`/cards`}>
						<div>To all Cards</div>
					</NavLink>
				</div>
				<div>
					<h1>This is the Card Detail page</h1>
				</div>
				<div>
					<p>{card?.frontContent}</p>
				</div>
				<div>
					<p>{card?.backContent}</p>
				</div>
				<div>
					<EditCardFormModal card={card} />
				</div>
				<div>
					<DeleteCardFormModal card={card} />
				</div>
			</>
		);
	}

	return (
		<>
			<p>Invalid Card ID</p>
			<div>
				<NavLink to={`/cards`}>
					<div>To all Cards</div>
				</NavLink>
			</div>
		</>
	);
}

export default CardDetail;
