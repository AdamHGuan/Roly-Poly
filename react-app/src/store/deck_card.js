const GET_DECK_CARDS = "deck_card/GET_DECK_CARDS";
const CREATE_DECK_CARD = "deck_card/CREATE_DECK_CARD";
const DELETE_DECK_CARD = "deck_card/DELETE_DECK_CARD";

const getDeckCards = (data) => ({
	type: GET_DECK_CARDS,
	data,
});

const createDeckCard = (data) => ({
	type: CREATE_DECK_CARD,
	data,
});

const deleteDeckCard = (data) => ({
	type: DELETE_DECK_CARD,
	data,
});

export const loadDeckCards = (deckId) => async (dispatch) => {
	const response = await fetch(`/api/decks/${deckId}`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getDeckCards(data));
	}
};

export const addDeckCard = (deckId, cardId) => async (dispatch) => {
	const response = await fetch(`/api/decks/${deckId}/cards/`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ cardId }),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createDeckCard(data));
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

export const removeDeck = (deckId, cardId) => async (dispatch) => {
	await fetch(`/api/decks/${deckId}/cards/`, {
		method: "DELETE",
		body: JSON.stringify({ cardId }),
	});

	dispatch(deleteDeckCard(cardId));
};

const deckCardReducer = (state = {}, action) => {
	let newState = { ...state };

	switch (action.type) {
		case GET_DECK_CARDS:
			newState = { ...action.data };
			return newState;
		case CREATE_DECK_CARD:
			return (newState[action.data.id] = action.data);
		case DELETE_DECK_CARD:
			delete newState[action.data.id];
			return newState;
		default:
			return state;
	}
};

export default deckCardReducer;
