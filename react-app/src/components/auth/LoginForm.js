import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";

import "./LoginForm.css";

const LoginForm = () => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleDemoLogin = () => {
		dispatch(login("demo@aa.io", "password"));
	};

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
			setErrors(data);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<div className="loginForm-main">
			<form className="loginForm" onSubmit={onLogin}>
				<h1 className="loginForm-h1">Welcome to Roly-Poly!</h1>

				<div className="error-msg-container">
					{errors.map((error, ind) => (
						<div className="error-msg" key={ind}>
							{error}
						</div>
					))}
				</div>
				<div className="loginForm-section">
					<label className="loginForm-label" htmlFor="email">
						Email
					</label>
					<input
						name="email"
						type="text"
						placeholder="Email"
						value={email}
						onChange={updateEmail}
					/>
				</div>
				<div className="loginForm-section">
					<label className="loginForm-label" htmlFor="password">
						Password
					</label>
					<input
						name="password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={updatePassword}
					/>
				</div>
				<div className="loginForm-btn-container">
					<button className="btn" type="submit">
						Login
					</button>
				</div>
				<div className="loginForm-btn-container">
					<p className="loginForm-btn-msg">New User?</p>
					<button className="btn" onClick={() => history.push("/sign-up")}>
						Sign Up
					</button>
				</div>
				<div className="loginForm-btn-container">
					<p className="loginForm-btn-msg">Demo User?</p>
					<button className="btn" onClick={handleDemoLogin}>
						Demo Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
