import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <footer className={!sessionUser? "splash-page-footer" : "logged-in-footer"}>
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
      <ul>
        <li className="footer-text">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/yuefang323/DIYnote"
          >
          DIYnote
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
  );
};

export default Footer;
