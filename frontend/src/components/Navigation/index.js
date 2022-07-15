import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Modal } from "../../context/Modal";

import ProfileButton from "./ProfileButton";
import SignupFormPage from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";
import logo from "../../Assets/logo.png";
import * as sessionActions from "../../store/session";
import "../LoginForm/LoginForm.css";
import "../SignupForm/SignupForm.css";

import "./Navigation.css";

function Navigation({ isLoaded }) {
    const [signupModal, setSignupModal] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const loginDemo = (e) => {
        e.preventDefault();

        return dispatch(
            sessionActions.login({
                credential: "Demo-lition",
                password: "password",
            })
        ).catch(async (res) => {
            await res.json();
        });
    };

    let sessionLinks;
    let centerLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
        centerLinks = (
            <>
                <li className="nav-butt home">
                    <NavLink to={`/home`} className="nav-butt home-btn">
                        Home
                    </NavLink>
                </li>
                <li className="nav-butt my-notebooks">
                    <NavLink
                        to={`/users/${sessionUser.id}/notebooks`}
                        className="nav-butt my-notebooks"
                    >
                        MyNotebooks
                    </NavLink>
                </li>
                <li className="nav-butt my-notes">
                    <NavLink
                        to={`/users/${sessionUser.id}/notes`}
                        className="nav-butt my-notes"
                    >
                        MyNotes
                    </NavLink>
                </li>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <div id="signup">
                    <button
                        id="signup-modal"
                        onClick={() => {
                            setShowModal(true);
                            setSignupModal(true);
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="nav-demo" onClick={loginDemo}>
                    Demo Login
                </div>
                <div id="login">
                    <button
                        id="login-modal"
                        onClick={() => {
                            setShowModal(true);
                            setSignupModal(false);
                        }}
                    >
                        Log In
                    </button>
                </div>

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        {signupModal && <SignupFormPage setSignupModal={setSignupModal} />}
                        {!signupModal && <LoginForm setSignupModal={setSignupModal} />}
                    </Modal>
                )}
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
                        <ul className="session-links-a">
                            {isLoaded && centerLinks}
                        </ul>
                    </div>
                    <div id="right-links">
                        <ul className="session-links-b">
                            {isLoaded && sessionLinks}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
