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
    <nav className="T4TNavbar bg-green sm:px-4 shadow-md">
      <Link to={`/`}>
        <img
          src={require("../Assets/TableForTwoLogo.png")}
          alt="Logo For Table For Two"
          height="100px"
          width="150px"
          className="my-4"
        />{" "}
      </Link>

      <ul class="menu">
        <Link to={`/users`}>
          <li>
            <a class="burger" href="#">
              Profile
            </a>
          </li>
        </Link>
        <Link to={"/"}>
          <li>
            <a class="burger" href="#">
              Register
            </a>
          </li>
        </Link>
        <Link to={`/users/new`}>
          <li>
            <a class="burger" href="#">
              Sign In
            </a>
          </li>
        </Link>
        <Link to={`/about`}>
          <li>
            <a class="burger" href="#">
              Contact us
            </a>
          </li>
        </Link>
      </ul>

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
            src={require("../Assets/red-burger.png")}
            alt="Hamburger"
            height="100px"
            width="70"
            className="hamburger"
          />
        </i>
        <i class="closeIcon"></i>
      </button>
    </nav>
  );
}
