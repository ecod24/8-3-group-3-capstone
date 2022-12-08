import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/Edit.css";
import { context } from "../AuthContext";

const API = process.env.REACT_APP_API_URL;

export default function EditProfile() {
	const user = useContext(context);
	const { id } = useParams();
	console.log("User Context:", user);
	const navigate = useNavigate();
	const [profile, setProfile] = useState({
		name: "",
		image: "",
		email: "",
		age: 0,
		dietary_restrictions: "",
		food_preferences: "",
		sexual_orientation: "",
		gender: "",
		about_me: "",
		chat_handle: "",
	});
	useEffect(() => {
		axios
			.get(`${API}/users/${id}`)
			.then((response) => {
				setProfile(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	const handleChange = (event) => {
		setProfile({
			...profile,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/users/${id}`, profile)
			.then((response) => {
				navigate(`/users`); //somewhere else?
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			{!!user ? (
				<>
					{" "}
					<h1
						id="FormBlurb"
						className="font-fonts text-rose-700 text-5xl font-semibold content-center"
					>
						Edit Your Profile
					</h1>
					<div id="EditDiv">
						<form onSubmit={handleSubmit} id="EditUserForm">
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Name:
								<input
									id="name"
									type="text"
									className="EditInputForm"
									name="name"
									onChange={handleChange}
									value={profile.name}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Picture:
								<input
									id="image"
									type="text"
									className="EditInputForm"
									name="image"
									placeholder="Upload a link of your image!"
									onChange={handleChange}
									value={profile.image}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Email:
								<input
									id="email"
									type="text"
									className="EditInputForm"
									name="email"
									onChange={handleChange}
									value={profile.email}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Age:
								<input
									id="age"
									type="number"
									className="EditInputForm"
									name="age"
									onChange={handleChange}
									value={profile.age}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Dietary Restrictions:
								<input
									id="dietary_restrictions"
									type="text"
									className="EditInputForm"
									name="dietary_restrictions"
									placeholder="Remember to keep each Restriction comma separated!"
									onChange={handleChange}
									value={profile.dietary_restrictions}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Food Preferences:
								<input
									id="food_preferences"
									type="text"
									className="EditInputForm"
									name="food_preferences"
									onChange={handleChange}
									value={profile.food_preferences}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Sexual Orientation:
								<input
									id="sexual_orientation"
									type="text"
									className="EditInputForm"
									name="sexual_orientation"
									onChange={handleChange}
									value={profile.sexual_orientation}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Gender:
								<input
									id="gender"
									type="text"
									className="EditInputForm"
									name="gender"
									onChange={handleChange}
									value={profile.gender}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								About You:
								<input
									id="about_me"
									type="textarea"
									className="EditInputForm"
									name="about_me"
									onChange={handleChange}
									value={profile.about_me}
								/>
							</label>
							<label className="font-fonts text-3xl font-semibold text-rose-700">
								Chat Handle
								<input
									id="chat_handle"
									type="text"
									className="EditInputForm"
									name="chat_handle"
									placeholder="Add your handle from a chat system like Messenger, WhatsApp, Kik... etc"
									onChange={handleChange}
									value={profile.chat_handle}
								/>
							</label>
						</form>
					</div>
				</>
			) : (
				<h1>You are not logged in.</h1>
			)}
		</>
	);
}
