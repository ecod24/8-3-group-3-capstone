import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../AuthContext";

const API = process.env.REACT_APP_API_URL;
//id 2 likes id 3, and vice versa so they are matching
export default function Matches() {
	const user = useContext(context);
	//   console.log("Context in MATCHES:", user);
	// const [isMatched, setIsMatched] = useState(false);
	const [users, setUsers] = useState([]);
	const [matchedUsers, setMatchedUsers] = useState([]);
	useEffect(() => {
		if (!user) return;
		axios.get(`${API}/users`).then((response) => setUsers(response.data.payload));
		let temp = users.filter((person) => {
			axios
				.get(`${API}/likes/mutual?user1=${user.id}&user2=${person.id}`)
				.then((response) => response.data.success === true);
		});
    setMatchedUsers(temp);
	}, []);

	//loop through array of user, make an axios call for /mutuals
	return <div>Matches hello</div>;
}
