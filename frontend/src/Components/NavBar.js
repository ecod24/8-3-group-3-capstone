import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import { useState } from "react";

let userSignedIn = true;

const NavBar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleClick = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };

  return (
    <nav className="pr-5 bg-green">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link className="hover:text-red-800" to="/">
          <img
            src={require("../Assets/TableForTwoLogo.png")}
            className="App-logo"
            alt="logo"
            // height="100px"
            // width="150px"
          />
        </Link>
        {/* Navbar Routes*/}
        <div className="hidden md:flex space-x-40 pr-30 text-2xl">
          <div className={"space-x-40 " + (userSignedIn ? "show" : "hidden")}>
            <Link className="hover:text-red-800" to="/users">
              <button>
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <img
                    alt="Explore"
                    src={require("../Assets/search.png")}
                  ></img>
                </div>
                <div>
                  {isHovering && (
                    <div className="text-rosered font-fonts text-sm">
                      Explore
                    </div>
                  )}
                </div>
              </button>
            </Link>
            <Link className="hover:text-red-800" to="/likes">
              <button>
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <img
                    alt="Matches"
                    src={require("../Assets/jigsaw.png")}
                  ></img>
                </div>
                <div>
                  {isHovering && (
                    <div className="text-rosered font-fonts text-sm">
                      Matches
                    </div>
                  )}
                </div>
              </button>
            </Link>
            <Link className="hover:text-red-800" to="/myprofile">
              <button>
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <img alt="Profile" src={require("../Assets/user.png")}></img>
                </div>
                <div>
                  {isHovering && (
                    <div className="text-rosered font-fonts text-sm">
                      My Profile
                    </div>
                  )}
                </div>
              </button>
            </Link>
          </div>
          <Link className="hover:text-red-800">
            <button>
              {userSignedIn ? (
                <Link to="/signin">
                  <img
                    alt="User_Authentication_LogOut"
                    src={require("../Assets/log-out.png")}
                  ></img>
                </Link>
              ) : (
                <Link to="/signin">
                  <img
                    alt="User_Authentication_LogIn"
                    className="mt-2"
                    height="100px"
                    width="85x"
                    src={require("../Assets/log-in.png")}
                  ></img>
                </Link>
              )}
            </button>
          </Link>
        </div>
        {/* Hamburger Icon */}
        <button
          onClick={handleClick}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none p-1"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 bg-green sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="/users" className="text-logored">
            Explore
          </a>
          <a href="/lkes" className="text-logored">
            Matches
          </a>
          <a href="/myprofile" className="text-logored">
            My Profile
          </a>
          <a href="/" className="text-logored">
            {userSignedIn ? "Sign Out" : "Sign In"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
