import React from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal"; 
import SignupFormModal from "../SignupFormModal";
import logo from "../../Assets/logo.png";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
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
    <nav className="nav-bar">
        <div id="left-container">
            <img className="logo-image" src={logo} alt="DIYnote" />
            <span className="logo-text">DIYnote</span>
        </div>
        <div id="right-container">
          <ul className="session-links">{!sessionUser && sessionLinks}</ul>
        </div>
    </nav>
  );
}

export default Navigation;
