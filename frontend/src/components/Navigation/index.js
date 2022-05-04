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
      <nav>
        <div className="navbar-element" id="left-container">
          <NavLink exact to="/" className='logo'>
              <img className="logo-image" src={logo} alt="DIYnote" />
              <span className="logo-text">DIYnote</span>
          </NavLink>
        </div>
        <div className="navbar-element" id="right-container">
          <ul className="session-links">{isLoaded && sessionLinks}</ul>
        </div>
      </nav>
  );
}

export default Navigation;
