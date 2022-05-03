import React, { useState } from "react";
import "./SplashPage.css";
import { Modal } from "../../context/Modal";
import SignupFormPage from "../SignupFormModal/SignupForm";
import LoginForm from "../LoginFormModal/LoginForm";
import Footer from "../Footer";

const SplashPage = ({ isLoaded }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="splash-page-container">
        <div className="body-text">
          <h1>DIY your notes, color your life</h1>
          <h3>
            Utilize the DIYnote, remember everything and tackle any project.
          </h3>
          <h4>
            <button onClick={() => setShowModal(true)}>Sign up for free</button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <SignupFormPage />
              </Modal>
            )}
          </h4>
          <h4>
            <button id="login-link" onClick={() => setShowModal(true)}>
              Already have an account? Log in
            </button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <LoginForm />
              </Modal>
            )}
          </h4>
        </div>
      </div>

      {/* <ul className="slideshow">
        <li>
          <span>Image 01</span>
        </li>
        <li>
          <span>Image 02</span>
        </li>
        <li>
          <span>Image 03</span>
        </li>
      </ul> */}
      <Footer />
    </>
  );
};

export default SplashPage;
