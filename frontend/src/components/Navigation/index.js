import React from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
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
          <NavLink to={`/users/${sessionUser.id}/home`}>
            {/* <i className="fa-solid fa-house-user fa-2x"></i> */}
            Home
          </NavLink>
        </li>
        <li className="nav-butt my-notebooks">
          <NavLink to={`/users/${sessionUser.id}/notebooks`}>
            MyNotebooks
          </NavLink>
        </li>
        <li className="nav-butt my-notes">
          <NavLink to={`/users/${sessionUser.id}/notes`}>MyNotes</NavLink>
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
    <>
      <nav>
        <div id="nav-bar">
          <div id="left-container">
            <img className="logo-image" src={logo} alt="DIYnote" />
            <span className="logo-text">DIYnote</span>
          </div>
          <div id="center-links">
            <ul className="session-links-a">{isLoaded && centerLinks}</ul>
          </div>
          <div id="right-links">
            <ul className="session-links-b">{isLoaded && sessionLinks}</ul>
          </div>
        </div>
      </nav>
      <Footer />
    </>
  );
}

export default Navigation;
