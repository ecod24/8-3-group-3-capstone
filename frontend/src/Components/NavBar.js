import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
  const menu = document.querySelector(".menu");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

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
      <ul class="menu">
        <Link to={`/users`}>
          <li>
            <a class="burger" href="#">
              Profile Discovery
            </a>
          </li>
        </Link>
        <Link to={"/register"}>
          <li>
            <a class="burger" href="#">
              Register
            </a>
          </li>
        </Link>
        <Link to={`/signin`}>
          <li>
            <a class="burger" href="#">
              Sign In
            </a>
          </li>
        </Link>
        <Link to="about">
          <li>
            <a class="burger" href="#">
              Contact us
            </a>
          </li>
        </Link>
      </ul>
      <button class="hamburger" onClick={toggleMenu}>
        <i class="menuIcon">
          <img
            src={require("../Assets/Hamburger.png")}
            alt="Hamburger"
            height="50px"
            width="100px"
          />
          menu
        </i>
        <i class="closeIcon">
          <img
            src={require("../Assets/Hamburger.png")}
            alt="Hamburger"
            height="50px"
            width="100px"
          />
          close
        </i>
      </button>
    </nav>
  );
}
