import "./SplashPage.css";
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import Navigation from "../Navigation";
import SignupFormPage from "../SignupFormModal/SignupForm";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import HaveAccountModal from './HaveAccountModal'
import SignupFreeModal from "./SignUpFreeModal";

const SplashPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navigation />
      <div className="splash-page-container">
        <div className="body-text">
          <h2>DIY your notes, color your life</h2>
          <br />
          <h4>
            Utilize the DIYnote, remember everything and tackle any project.
          </h4>
          <div>
            <SignupFreeModal />
          </div>
          <br />
          <div>
            <HaveAccountModal />
          </div>
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
