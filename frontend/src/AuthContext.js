import { useEffect, useState } from "react";
import app, { auth } from "./Firebase.js";
import React from "react";
import axios from "axios";

export const context = React.createContext();
const API = process.env.REACT_APP_API_URL;

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged((test) => {
			axios.get(`${API}/users/firebase/${test.uid}`).then((response) => {
				setUser(response.data.payload);
			});
		});
		// User is signed in.
	});
	return <context.Provider value={user}>{children}</context.Provider>;
}
