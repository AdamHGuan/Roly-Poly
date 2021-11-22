import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { loadCards } from "../../store/card";

import AddCardFormModal from "../AddCardFormModal";

import "./AllCards.css";

function AllCards() {
	const dispatch = useDispatch();

	const cards = useSelector((state) => state.card?.cards);

	useEffect(() => {
		dispatch(loadCards());
	}, [dispatch]);

	return (
		<>
			<div>
				<h1>This is the All Cards page</h1>
			</div>
			<div>
				<AddCardFormModal />
			</div>
			<div>
				{cards &&
					cards?.map((card) => {
						return (
							<div key={card.id}>
								<NavLink to={`/cards/${card.id}`}>
									<div>
										<p>{card?.frontContent}</p>
									</div>
									<div>
										<p>{card?.backContent}</p>
									</div>
								</NavLink>
							</div>
						);
					})}
			</div>
		</>
	);
}

export default AllCards;
