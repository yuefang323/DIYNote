import "./SplashPage.css";
import React from "react";
import Footer from "../Footer";
import HaveAccountModal from "./HaveAccountModal";
import SignupFreeModal from "./SignUpFreeModal";
import laptop from "../../Assets/laptop.png";

const SplashPage = () => {
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
                        <SignupFreeModal />
                    </div>
                    <br />
                    <div>
                        <HaveAccountModal />
                    </div>
                    <div className="laptop">
                        <img src={laptop} alt="laptop" className="laptop"/>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default SplashPage;
