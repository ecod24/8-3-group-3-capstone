import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodsPage from "./Pages/FoodsPage.js";
import HomePage from "./Pages/home.js";
import Nav from "./Pages/navbar.js";
import UserPage from "./Pages/UserPage.js";
import Recipe from "./Pages/Recipe.js";
import ExpandedUser from "./Pages/ExpandedUser.js";
import AboutPage from "./Pages/About.js";
import NewUserPage from "./Pages/NewUserPage.js";
import "./App.css";
import Register from "./Components/Register.js";
import SignIn from "./Components/SignIn.js";
import Footer from "./Components/Footer.js";
import EditPage from "./Pages/EditPage.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app, { auth } from "./Firebase.js";
import MatchesPage from "./Pages/MatchesPage.js";
import Matches from "./Components/Matches.js";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function App() {

	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const [firebaseId, setFirebaseId] = useState("");

	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in.
			setFirebaseId(user.uid); //firebase
			setLoggedIn(true);
		} else {
			// No user is signed in.
			setLoggedIn(false);
		}
	});
	useEffect(() => {
		if (loggedIn) {
			axios
				.get(`${API}/users/firebase/${firebaseId}`)
				.then((response) => {
					setUser(response.data.payload);
				})
				.catch((error) => console.log(error));
		} else {
			setUser({});
		}
	}, [loggedIn, firebaseId]);
	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				alert("You have signed out");
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return (
		<BrowserRouter>
			<Nav />
			<main className="bg-beige">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/myfoods" element={<FoodsPage />} />
					<Route path="/users" element={<UserPage user={user} />} />
					<Route path="/recipe" element={<Recipe />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/signin" element={<SignIn />} />
					<Route
						path="/users/new"
						element={<NewUserPage firebaseId={firebaseId} setUser={setUser} />}
					/>
					<Route path="/users/:id" element={<ExpandedUser />} />
					<Route path="/users/:id/edit" element={<EditPage API={API} user={user} />} />
					<Route path="/matches" element={<Matches user={user} />} />
					{/* <Route path="/users/:id" element={<></>} />//a show page, eventually */}
				</Routes>
				<Footer />
				<ToastContainer />
			</main>
		</BrowserRouter>
	);
}

export default App;
