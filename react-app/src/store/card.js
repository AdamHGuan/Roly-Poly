const GET_CARDS = "card/GET_CARDS";
const CREATE_CARD = "card/CREATE_CARD";
const DELETE_CARD = "card/DELETE_CARD";

const getCards = (data) => ({
	type: GET_CARDS,
	data,
});

const createCard = (data) => ({
	type: CREATE_CARD,
	data,
});

const deleteCard = (data) => ({
	type: DELETE_CARD,
	data,
});

export const loadCards = () => async (dispatch) => {
	const response = await fetch(`/api/cards/`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getCards(data));
	}
};

export const loadCurrentCard = () => async (dispatch) => {
	const response = await fetch(`/api/cards/`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getCards(data));
	}
};

export const addCard = (card) => async (dispatch) => {
	const response = await fetch(`/api/cards/`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(card),
	});
	if (response.ok) {
		const data = await response.json();
		dispatch(createCard(data));
		return data;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const editCard = (card) => async (dispatch) => {
	const response = await fetch(`/api/cards/${card.id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(card),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createCard(data));
		return data;
	}
};

export const removeCard = (card) => async (dispatch) => {
	await fetch(`/api/cards/${card.id}`, {
		method: "DELETE",
	});

	dispatch(deleteCard(card.id));
};

const cardReducer = (state = {}, action) => {
	let newState = { ...state };

	switch (action.type) {
		case GET_CARDS:
			newState = { ...action.data };
			return newState;
		case CREATE_CARD:
			return (newState[action.data.id] = action.data);
		case DELETE_CARD:
			delete newState[action.data.id];
			return newState;
		default:
			return state;
	}
};

export default cardReducer;
