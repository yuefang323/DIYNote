import React from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import logo from "../../Assets/logo.png";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <li>
          <NavLink
            to={`/users/${sessionUser.id}/notebooks`}
          >
            My Notebooks
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${sessionUser.id}/notes`}>
            My Notes
          </NavLink>
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <li id="signup">
          <SignupFormModal />
        </li>
        <li id="login">
          <LoginFormModal />
        </li>
      </>
    );
  }
  return (
    <nav id="nav-bar">
      <div id="nav-bar">
        <div id="left-container">
          <img className="logo-image" src={logo} alt="DIYnote" />
          <span className="logo-text">DIYnote</span>
        </div>
        <div id="right-container">
          <ul className="session-links">{isLoaded && sessionLinks}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
