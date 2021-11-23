import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";

import Home from "./components/Home";
import AllDecks from "./components/AllDecks";
import DeckDetail from "./components/DeckDetail";
import AllCards from "./components/AllCards";
import CardDetail from "./components/CardDetail";
import About from "./components/About/About";

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route path="/login" exact={true}>
					<LoginForm />
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm />
				</Route>
				<ProtectedRoute path="/users" exact={true}>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute path="/users/:userId" exact={true}>
					<User />
				</ProtectedRoute>
				<Route path="/decks/:deckId" exact={true}>
					<DeckDetail />
				</Route>
				<ProtectedRoute path="/decks" exact={true}>
					<AllDecks />
				</ProtectedRoute>
				<Route path="/cards/:cardId" exact={true}>
					<CardDetail />
				</Route>
				<ProtectedRoute path="/cards" exact={true}>
					<AllCards />
				</ProtectedRoute>
				<ProtectedRoute path="/" exact={true}>
					<Home />
				</ProtectedRoute>
				<Route path="/about" exact={true}>
					<About />
				</Route>
				<Route>
					<div>Page not found</div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
