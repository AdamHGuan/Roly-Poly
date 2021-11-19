import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";

import { loadDecks } from "../store/deck";

const NavBar = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadDecks());
	}, [dispatch]);

	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/" exact={true} activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/login" exact={true} activeClassName="active">
						Login
					</NavLink>
				</li>
				<li>
					<NavLink to="/sign-up" exact={true} activeClassName="active">
						Sign Up
					</NavLink>
				</li>
				<li>
					<NavLink to="/users" exact={true} activeClassName="active">
						Users
					</NavLink>
				</li>
				<li>
					<LogoutButton />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
