import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import app from "../Firebase";

export default function Register() {
	const navigate = useNavigate();
	//   const [user, setUser] = useState({
	//     name: "",
	//     image: "",
	//     email: "",
	//     age: 0,
	//     dietary_restrictions: "",
	//     food_preferences: "",
	//     sexual_orientation: "",
	//     gender: "",
	//     religion: "",
	//   });

	const [userProfile, setUserProfile] = useState({
		email: "",
		password: "",
	});
	//using credentials (app) to make auth object
	const auth = getAuth(app);

	const handleTextChange = (event) => {
		setUserProfile({ ...userProfile, [event.target.id]: event.target.value });
	};

	const signUp = () => {
		createUserWithEmailAndPassword(auth, userProfile.email, userProfile.password)
			.then((userCredential) => {
				const user = userCredential.user; //creates user
				if (user) {
					alert(`${userProfile.email} successfully registered`);
					navigate("/users/new"); //TODO: somehow send here with email prefilled
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				console.log(
					`${errorCode} ${userProfile.email} could not register. Please input a valid email or password.`
				);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(userProfile);
		signUp();

		// axios
		//   .post(`${API}/myfoods`, food)
		//   .then((res) => {
		//     navigate(`/myfoods`);
		//   })
		//   .catch((err) => {
		//     console.warn(err);
		//   });
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<label className="text-3xl" htmlFor="date">
					Email
				</label>
				<input type="text" id="email" onChange={handleTextChange} />
				<label>Password</label>
				<input type="password" id="password" onChange={handleTextChange} />
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}
