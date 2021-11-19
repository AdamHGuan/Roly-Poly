const GET_DECKS = "deck/GET_DECKS";
const CREATE_DECK = "deck/CREATE_DECK";
const DELETE_DECK = "deck/DELETE_DECK";

const getDecks = (data) => ({
	type: GET_DECKS,
	data,
});

const createDeck = (data) => ({
	type: CREATE_DECK,
	data,
});

const deleteDeck = (data) => ({
	type: DELETE_DECK,
	data,
});

export const loadDecks = () => async (dispatch) => {
	const response = await fetch(`/api/decks/`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getDecks(data));
	}
};

export const addDeck = (deck) => async (dispatch) => {
	const response = await fetch(`/api/decks/`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(deck),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createDeck(data));
		return data;
	}
};

export const editDeck = (deck) => async (dispatch) => {
	const response = await fetch(`/api/decks/${deck.id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(deck),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createDeck(data));
		return data;
	}
};

export const deleteSpot = (deck) => async (dispatch) => {
	await fetch(`/api/decks/${deck.id}`, {
		method: "DELETE",
	});

	dispatch(deleteDeck(deck.id));
};

const deckReducer = (state = {}, action) => {
	let newState = { ...state };

	switch (action.type) {
		case GET_DECKS:
			newState = { ...action.data };
			return newState;
		case CREATE_DECK:
			return (newState[action.data.id] = action.data);
		case DELETE_DECK:
			delete newState[action.data.id];
			return newState;
		default:
			return state;
	}
};

export default deckReducer;
