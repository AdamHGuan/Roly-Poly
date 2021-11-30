import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import { login } from "../../store/session";

import "./SignUpForm.css";

const SignUpForm = () => {
	const [errors, setErrors] = useState([]);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleDemoLogin = () => {
		dispatch(login("demo@aa.io", "password"));
	};

	const onSignUp = async (e) => {
		e.preventDefault();
		if (password === repeatPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			}
		}

		if (password !== repeatPassword) {
			const data = await dispatch(signUp(username, email));
			if (data) {
				data.pop();
				data.push("password : Both passwords must match.");
				setErrors(data);
			}
		}
	};

	const updateUsername = (e) => {
		setUsername(e.target.value);
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<div className="SignUpForm-main">
			<form className="SignUpForm" onSubmit={onSignUp}>
				<h1 className="SignUpForm-h1">Welcome to Roly-Poly!</h1>
				<div className="error-msg-container">
					{errors.map((error, ind) => (
						<div className="error-msg" key={ind}>
							{error}
						</div>
					))}
				</div>
				<div className="SignUpForm-section">
					<label className="SignUpForm-label">User Name</label>
					<input
						type="text"
						name="username"
						onChange={updateUsername}
						value={username}
					></input>
				</div>
				<div className="SignUpForm-section">
					<label className="SignUpForm-label">Email</label>
					<input
						type="text"
						name="email"
						onChange={updateEmail}
						value={email}
					></input>
				</div>
				<div className="SignUpForm-section">
					<label className="SignUpForm-label">Password</label>
					<input
						type="password"
						name="password"
						onChange={updatePassword}
						value={password}
					></input>
				</div>
				<div className="SignUpForm-section">
					<label className="SignUpForm-label">Repeat Password</label>
					<input
						type="password"
						name="repeat_password"
						onChange={updateRepeatPassword}
						value={repeatPassword}
					></input>
				</div>
				<div className="SignUpForm-btn-container">
					<button className="btn" type="submit">
						Sign Up
					</button>
				</div>
				<div className="SignUpForm-btn-container">
					<p className="SignUpForm-btn-msg">Existing User?</p>

					<button className="btn" onClick={() => history.push("/login")}>
						login
					</button>
				</div>
				<div className="SignUpForm-btn-container">
					<p className="SignUpForm-btn-msg">Demo User?</p>
					<button className="btn" onClick={handleDemoLogin}>
						Demo Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
