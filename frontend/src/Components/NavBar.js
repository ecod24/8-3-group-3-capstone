import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
	return (
		<nav className="T4TNavbar">
			<Link to={`/`}>
				<img
					src={require("../Assets/TableForTwoLogo.png")}
					alt="Logo For Table For Two"
					height="144px"
					width="200px"
				/>{" "}
			</Link>
			<Link to={`/users`}>
				<h1 className="NavText"> Users</h1>
			</Link>
			<Link to={"/register"}>
				<h1 className="NavText">Register</h1>
			</Link>
			<Link to={`/signin`}>
				<h1 className="NavText"> Sign In</h1>
			</Link>
			<Link to={`/about`}>
				<h1 className="NavText">About Us</h1>
			</Link>
		</nav>
	);
}
