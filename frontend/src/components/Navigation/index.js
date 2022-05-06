import React from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  let centerLinks; 
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
    centerLinks = (
      <>
        <li className="nav-butt home">
          <NavLink to={`/users/${sessionUser.id}/home`}>Home</NavLink>
        </li>
        <li className="nav-butt my-notebooks">
          <NavLink to={`/users/${sessionUser.id}/notebooks`}>
            My Notebooks
          </NavLink>
        </li>
        <li className="nav-butt my-notes">
          <NavLink to={`/users/${sessionUser.id}/notes`}>My Notes</NavLink>
        </li>
        {/* <li>
          <i className="fa-duotone fa-backward"></i>
        </li> */}
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
    <nav>
      <div id="nav-bar">
        <div id="left-container">
          <img className="logo-image" src={logo} alt="DIYnote" />
          <span className="logo-text">DIYnote</span>
        </div>
        <div id="center-container">
          <ul className="center-links">{isLoaded && centerLinks}</ul>
        </div>
        <div id="right-container">
          <ul className="session-links">{isLoaded && sessionLinks}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
