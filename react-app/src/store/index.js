import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import deck from "./deck";
import card from "./card";
import deck_card from "./deck_card";

const rootReducer = combineReducers({
	session,
	deck,
	card,
	deck_card,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require("redux-logger").default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
