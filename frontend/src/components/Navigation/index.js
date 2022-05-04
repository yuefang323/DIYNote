import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal"; // add modal
import "./Navigation.css";
import SignupFormModal from "../SignupFormModal";
import logo from "../../Assets/logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <SignupFormModal />
        <LoginFormModal />
      </>
    );
  }

  return (
    <header id={!sessionUser ? "splash-page-header" : ""}>
      <nav className="nav-bar" id={!sessionUser ? "splash-page-nav-bar" : ""}>
        <div className="navbar-element" id="left-container">
          {/* <NavLink exact to="/">
              <img className="favicon-image" src={logo} alt="DIYnote" />
              <span className="logo-text">DIYnote</span>
          </NavLink> */}
        </div>

        {/* <div className="navbar-element" id="center-container">
          <ul className="session-links">{isLoaded && centerLink}</ul>
        </div> */}

        <div className="navbar-element" id="right-container">
          <ul className="session-links">{isLoaded && sessionLinks}</ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
