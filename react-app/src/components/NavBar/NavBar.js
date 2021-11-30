import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import LogoutButton from "../auth/LogoutButton";
// import { loadDecks } from "../../store/deck";
// import { loadCards } from "../../store/card";
import { GiGreekTemple } from "react-icons/gi";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import "./NavBar.css";

import logo from "./logo.jpeg";

const NavBar = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const sessionUser = useSelector((state) => state.session.user);

	const [openDropDown, setOpenDropDown] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);
	const [openSignUp, setOpenSignUp] = useState(false);

	// useEffect(() => {
	// 	dispatch(loadDecks());
	// 	dispatch(loadCards());
	// }, [dispatch]);

	const handleDemoLogin = () => {
		dispatch(login("demo@aa.io", "password"));
		setOpenDropDown(false);
	};
	// const handleLoginClick = () => {
	// 	setOpenLogin(true);
	// 	setOpenDropDown(false);
	// };
	// const handleSignUpClick = () => {
	// 	setOpenSignUp(true);
	// 	setOpenDropDown(false);
	// };

	return (
		<nav>
			<ul className="nav-links">
				<li>
					<NavLink
						className="inactive"
						to="/"
						exact={true}
						activeClassName="active"
					>
						<div>
							<img src={logo} className="roly-poly-logo" alt="Roly-Poly-logo" />
						</div>
					</NavLink>
				</li>
				{/* <div>
					<NavLink className="inactive" to="/" exact={true}>
						<h1 className="nav-bar-title">Roly-Poly</h1>
					</NavLink>
				</div> */}
				<div className="nav-bar-right">
					<li className="nav-login-signup">
						<div
							onClick={() => setOpenDropDown(!openDropDown)}
							className={
								openDropDown
									? "nav-profile-click open"
									: "nav-profile-click closed"
							}
						>
							<GiGreekTemple className="nav-pp-logo" />
						</div>
						{openDropDown && (
							<div className="profile-drop-down">
								{!sessionUser ? (
									<div className="dropdown-inside-loggedout">
										<p
											onClick={() => history.push("/login")}
											className="login-p"
										>
											Login
										</p>

										<p
											onClick={() => history.push("/sign-up")}
											className="login-p"
										>
											Sign Up
										</p>

										<p onClick={handleDemoLogin} className="login-p">
											Demo
										</p>
									</div>
								) : (
									<div className="dropdown-inside">
										<div className="dropdown-content">
											<NavLink
												className="inactive"
												to={`/decks`}
												onClick={() => setOpenDropDown(false)}
											>
												<p className="login-p">Decks</p>
											</NavLink>
											<NavLink
												className="inactive"
												to={`/cards`}
												onClick={() => setOpenDropDown(false)}
											>
												<p className="login-p">Cards</p>
											</NavLink>
											<NavLink
												className="inactive"
												to={`/about`}
												onClick={() => setOpenDropDown(false)}
											>
												<p className="login-p">About</p>
											</NavLink>
										</div>
										<div
											onClick={() => setOpenDropDown(false)}
											// className="logout-botton"
										>
											<LogoutButton />
										</div>
									</div>
								)}
							</div>
						)}
					</li>
				</div>
			</ul>
			{openLogin && <LoginForm setOpenLogin={setOpenLogin} />}
			{openSignUp && <SignUpForm setOpenSignUp={setOpenSignUp} />}
		</nav>
	);
};

export default NavBar;
