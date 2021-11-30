import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
	const dispatch = useDispatch();
	const onLogout = async (e) => {
		await dispatch(logout());
	};

	return (
		<button onClick={onLogout} className="logout-botton">
			<p className="login-p">Logout</p>
		</button>
	);
};

export default LogoutButton;
