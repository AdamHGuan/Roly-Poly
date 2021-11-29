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
				<ProtectedRoute path="/decks/:deckId" exact={true}>
					<DeckDetail />
				</ProtectedRoute>
				<ProtectedRoute path="/decks" exact={true}>
					<AllDecks />
				</ProtectedRoute>
				<ProtectedRoute path="/cards/:cardId" exact={true}>
					<CardDetail />
				</ProtectedRoute>
				<ProtectedRoute path="/cards" exact={true}>
					<AllCards />
				</ProtectedRoute>
				<Route path="/" exact={true}>
					<Home />
				</Route>
				<ProtectedRoute path="/about" exact={true}>
					<About />
				</ProtectedRoute>
				<ProtectedRoute>
					<div>Page not found</div>
				</ProtectedRoute>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
