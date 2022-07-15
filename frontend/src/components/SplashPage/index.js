import React, { useState } from "react";
import Footer from "../Footer";
import laptop from "../../Assets/laptop.png";
import { Modal } from "../../context/Modal";
import SignupFormPage from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";
import "../SignupForm/SignupForm.css";
import "../LoginForm/LoginForm.css";
import "./SplashPage.css";

const SplashPage = () => {
    const [signupModal, setSignupModal] = useState(true);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="splash-page-container">
                <div className="body-text">
                    <h2>DIY your notes, color your life!</h2>
                    <br />
                    <br />
                    <h4>
                        Utilize the DIYnote, remember everything and tackle any
                        project.
                    </h4>
                    <div>
                        <button
                            id="signup-modal"
                            onClick={() => setShowModal(true)}
                        >
                            Sign up for free
                        </button>
                    </div>
                    <br />
                    <div>
                        <button
                            id="login-modal"
                            onClick={() => setShowModal(true)}
                        >
                            Already have an account? Log in
                        </button>
                    </div>
                    {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        {signupModal && <SignupFormPage setSignupModal={setSignupModal} />}
                        {!signupModal && <LoginForm setSignupModal={setSignupModal} />}
                    </Modal>
                )}

                    <div className="laptop">
                        <img src={laptop} alt="laptop" className="laptop" />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default SplashPage;
