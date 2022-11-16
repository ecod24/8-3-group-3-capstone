import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home.js";
import Nav from "./Pages/navbar.js";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<main>
				<HomePage />
			</main>
			<></>
		</BrowserRouter>
	);
}

export default App;
