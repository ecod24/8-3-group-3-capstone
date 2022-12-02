import axios from "axios";
import "../Styles/UserProfile.css";
import { useState, useEffect } from "react";
import User from "./User";
import "../Styles/Home.css";

export default function UserProfile() {
	const URL = process.env.REACT_APP_API_URL;
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get(`localhost:3003/users`)
			.then((res) => setUsers(res.data.payload))
			.catch((err) => console.log(err.message.payload));
	}, [URL]);
	return (
		<div className="LandingDiv">
			{users.map((user) => {
				return <User info={user} key={`${user.id}-${user.name}`} />;
			})}
		</div>
	);
}
