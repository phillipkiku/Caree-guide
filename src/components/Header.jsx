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
      <div className="nav-wrapper" class="bg-[pink] flex gap-[1rem] py-[1rem] justify-around font-bold">
        {/* Logo */}
        <div className="logoname">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="logo" />
          </Link>
          <Link>Career Guide</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMobileMenuOpen ? "X" : "Menu"}
        </button>

        {/* Main Navigation - Desktop */}
        {/* <div className="main-nav" > */}
        <nav className="main-nav" class="flex border items-center gap-[1rem] ">
          <Link
            to="/profile"
            className="navlink"
            class="link link-info text-black no-underline"
          >
            profile
          </Link>
          <Link
            to="/"
            className="navlink"
            class="link link-info text-black no-underline"
          >
            Home
          </Link>

          <Link
            to="/career"
            className="navlink"
            class="link link-info text-black no-underline"
          >
            Career
          </Link>

          <Link
            to="/careercoach"
            className="navlink"
            class="link link-info text-black no-underline"
          >
            Coach
          </Link>

          <Link
            to="/aboutus"
            className="navlink"
            class="link link-info text-black no-underline"
          >
            AboutUs
          </Link>
          <Link
            to="/contactus"
            className="navlink"
            class="link link-info text-black no-underline"
          >
            Contact
          </Link>

          {/* Resources drawer button */}
          <div class="drawer w-[30%]" className="drawer" >
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content">
              {/* <!-- Page content here --> */}
              <label
                for="my-drawer-4"
                class="drawer-button btn btn-soft rounded-lg bg-sky-300/100 hover:bg-sky-700/100 hover:text-white "
              >
                Resources
              </label>
            </div>
            <div class="drawer-side">
              <label
                for="my-drawer-4"
                aria-label="close sidebar"
                class="drawer-overlay"
              ></label>
              <ul class="menu bg-base-200  bg-cyan-50  text-base-content min-h-full w-80 p-4">
                {/* <!-- Sidebar content here --> */}

                <li>
                  {/* career choice drawer menu */}
                  <div className="career">
                    <ul className="menu menu-horizontal px-1">
                      <li>
                        <details>
                          <summary class="text-xl">Career Choice</summary>
                          <ul className="bg-base-100 rounded-t-none p-2 text-[1rem]">
                            <li>
                              <Link
                                to="/computer"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Computer
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/health"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Health
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/publicservice"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Public Service
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/business"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/entertainment"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Entertainment
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/sports"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Sports
                              </Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  {/* career coach menu */}
                  <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                      <li>
                        <details>
                          <summary class="text-xl">Career Coach</summary>
                          <ul className="bg-base-100 text-[1rem] rounded-t-none p-2">
                            <li>
                              <Link
                                to="/healthcoach"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Health Coaches
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/computercoach"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Computer Coaches
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/entertainmentcoach"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Entertainment Coaches
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Public Service Coaches
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/businesscoach"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Business Coaches
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/sportscoach"
                                // className="dropdown-item"
                                // onClick={closeMobileMenu}
                              >
                                Sports Coaches
                              </Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="nav-item">
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
              </div>`
            )}
          </div> */}

          {/* <div className="nav-item">
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
          </div> */}
        </nav>
        {/* </div> */}

        {/* <div
          className={`user-section ${isMobileMenuOpen ? "mobile-open" : ""}`}
        > */}
        <div className="navend">
          <div className="loginbutton">
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
                class="bg-[#B22222] hover:bg-sky-300/100 px-[0.4rem] py-[0.5rem] rounded-[2rem] text-white hover:text-black "
              >
                Login / Register
              </Link>
            )}
          </div>
          <input
            type="checkbox"
            value="synthwave"
            class="toggle theme-controller "
          />
        </div>
      </div>
    </>
  );
}

export default Header;
