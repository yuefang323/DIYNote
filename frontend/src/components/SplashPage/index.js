import "./SplashPage.css";
import React, { useState } from "react";
import Footer from "../Footer";
import HaveAccountModal from "./HaveAccountModal";
import SignupFreeModal from "./SignUpFreeModal";

const SplashPage = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div className="splash-page-container">
        <div className="body-text">
          <h2>DIY your notes, color your life!</h2>
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SplashPage;
