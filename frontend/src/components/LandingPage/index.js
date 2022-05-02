import React from "react";
import "./LandingPage.css";
import Navigation from "../Navigation";

const LandingPage = () => {
  return (
    <>
      <div>
        <Navigation />
        <div>
          <h1>DIY your notes, color your life</h1>
          <h3>
            Utilize the DIYnote, remember everything and tackle any project.
          </h3>
        </div>
      </div>
      <div className="landing-footer-about">
        <h3>About</h3>
        <ul>
          <li>Fang Yue</li>
          <li>
            <a href="mailto: yuefang323@gmail.com">yuefang323@gmail.com</a>
          </li>
          <li>
            <a
              href="https://github.com/yuefang323/DIYnote"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
      <div className="landing-footer-tech">
        <h3>Technologies</h3>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Sequelize</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </>
  );
};

export default LandingPage;
