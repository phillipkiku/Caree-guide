import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../.config";
import { UserContext } from "../context.jsx/UserContext";
import Logo from "../assets/favicon_io/android-chrome-512x512.png";
import "../styles/header.css";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <>
      <div className="nav-wrapper">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src={Logo} alt="logo" />
          <span className="logo-text">Career Guide</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMobileMenuOpen ? "X" : "Menu"}
        </button>

        {/* Main Navigation - Desktop */}
        <nav className={`main-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>
            Home
          </Link>

          <div className="nav-item">
            <button
              className="nav-button"
              onClick={() => toggleDropdown("Career Choice")}
            >
              Career Choice
              <span className="icon">↓</span>
            </button>
            {openMenu === "Career Choice" && (
              <div className="dropdown">
                <Link
                  to="/computer"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Computer
                </Link>
                <Link
                  to="/health"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Health
                </Link>
                <Link
                  to="/publicservice"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Public Service
                </Link>
                <Link
                  to="/business"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Business
                </Link>
                <Link
                  to="/entertainment"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Entertainment
                </Link>
                <Link
                  to="/sports"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Sports
                </Link>
              </div>
            )}
          </div>

          <div className="nav-item">
            <button
              className="nav-button"
              onClick={() => toggleDropdown("Career Coach")}
            >
              Career Coach
              <span className="icon">↓</span>
            </button>
            {openMenu === "Career Coach" && (
              <div className="dropdown">
                <Link
                  to="/healthcoach"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Health Coaches
                </Link>
                <Link
                  to="/computercoach"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Computer Coaches
                </Link>
                <Link
                  to="/entertainmentcoach"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Entertainment Coaches
                </Link>

                <Link
                  to="/"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Public Service Coaches
                </Link>
                <Link
                  to="/businesscoach"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Business Coaches
                </Link>
                <Link
                  to="/sportscoach"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Sports Coaches
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* User Menu */}
        <div
          className={`user-section ${isMobileMenuOpen ? "mobile-open" : ""}`}
        >
          {user ? (
            <div className="user-menu">
              <button className="user-button">
                {user.avatarUrl && (
                  <img
                    src={`${config.apiBackend}${user.avatarUrl}`}
                    alt="Avatar"
                    className="user-avatar"
                  />
                )}
                <span className="icon">↓</span>
              </button>
              <div className="user-dropdown">
                <Link
                  to="/profile"
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/loginRegister"
              className="auth-button"
              onClick={closeMobileMenu}
            >
              Login / Register
            </Link>
          )}
        </div>
      </div>

      <div>
        <div class="navbar bg-base-100 shadow-sm">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul class="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a class="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul class="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div class="navbar-end">
            <a class="btn">Button</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
