import React from "react";
// import { Link } from "react-router-dom";
import "./LandingPage.css";
// import Navigation from "../Navigation";

const LandingPage = ({ isLoaded }) => {
  return (
    <>
      <div className="landing-page-container">
        <div className="body-text">
          <h1>DIY your notes, color your life</h1>
          <h3>
            Utilize the DIYnote, remember everything and tackle any project.
          </h3>
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
      </ul>
      <Footer /> */}
      <footer className={true ? "landing-page-footer" : "logged-in-footer"}>
        {true && (
          <ul className="foot-stuff">
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sequelize</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
        )}
        <ul className="copyright">
          <li className="footer-text">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/yuefang323/DIYnote"
            >
              © 2022 | DIYnote
            </a>
          </li>
          <ul className="about-me">
            <li className="footer-text">
              <a href="mailto: yuefang323@gmail.com">yuefang323@gmail.com</a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/yuefang323"
              >
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </ul>
      </footer>
    </>
  );
};

export default LandingPage;
