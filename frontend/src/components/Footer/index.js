import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const sessionUser = useSelector((state) => state.session.user);
    return (
        <footer
            className={!sessionUser ? "splash-page-footer" : "logged-in-footer"}
        >
            {true && (
                <div className="foot-tech">
                    <a
                        href="https://www.javascript.com/"
                        target="_blank"
                        className="tech-used"
                    >
                        Javascript
                    </a>

                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        className="tech-used"
                    >
                        React
                    </a>

                    <a
                        href="https://redux.js.org/"
                        target="_blank"
                        className="tech-used"
                    >
                        Redux
                    </a>

                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                        target="_blank"
                        className="tech-used"
                    >
                        HTML5
                    </a>

                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        target="_blank"
                        className="tech-used"
                    >
                        CSS3
                    </a>

                    <a
                        href="https://sequelize.org/"
                        target="_blank"
                        className="tech-used"
                    >
                        Sequelize
                    </a>

                    <a
                        href="https://expressjs.com/"
                        target="_blank"
                        className="tech-used"
                    >
                        Express
                    </a>

                    <a
                        href="https://www.postgresql.org/"
                        target="_blank"
                        className="tech-used"
                    >
                        PostgreSQL
                    </a>
                </div>
            )}
            <ul className="footer-about-me">
                <li className="footer-text">
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://github.com/yuefang323/DIYnote"
                        className="DIY-text"
                    >
                        DIYnote
                    </a>
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
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://www.linkedin.com/in/fang-yue-7b3091241/"
                    >
                        <i className="fa-brands fa-linkedin" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
