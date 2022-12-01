import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditProfile() {
	const { id } = useParams();
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
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						id="name"
						type="text"
						name="name"
						onChange={handleChange}
						value={profile.name}
					/>
				</label>
				<label>
					Picture:
					<input
						id="image"
						type="text"
						name="image"
						placeholder="Upload a link of your image!"
						onChange={handleChange}
						value={profile.image}
					/>
				</label>
				<label>
					Email:
					<input
						id="email"
						type="text"
						name="email"
						onChange={handleChange}
						value={profile.email}
					/>
				</label>
				<label>
					Age:
					<input
						id="age"
						type="number"
						name="age"
						onChange={handleChange}
						value={profile.age}
					/>
				</label>
				<label>
					Dietary Restrictions:
					<input
						id="dietary_restrictions"
						type="text"
						name="dietary_restrictions"
						placeholder="Remember to keep each Restriction comma separated!"
						onChange={handleChange}
						value={profile.dietary_restrictions}
					/>
				</label>
				<label>
					Food Preferences:
					<input
						id="food_preferences"
						type="text"
						name="food_preferences"
						onChange={handleChange}
						value={profile.food_preferences}
					/>
				</label>
				<label>
					Sexual Orientation:
					<input
						id="sexual_orientation"
						type="text"
						name="sexual_orientation"
						onChange={handleChange}
						value={profile.sexual_orientation}
					/>
				</label>
				<label>
					Gender:
					<input
						id="gender"
						type="text"
						name="gender"
						onChange={handleChange}
						value={profile.gender}
					/>
				</label>
				<label>
					About You:
					<input
						id="about_me"
						type="textarea"
						name="about_me"
						onChange={handleChange}
						value={profile.about_me}
					/>
				</label>
			</form>
		</div>
	);
}
