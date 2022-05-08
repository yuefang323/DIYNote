import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Footer";

import "./ErrorPage.css";

const ErrorPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.goBack();
    }, 5000);
  }, [history]);

  return (
    <div className="errorpage-container">
      <img
        className="error-image"
        src="https://media2.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="Page-Not-Found"
      />
      <h2>Oops!</h2>
      <br />
      <h4>We can't seem to find the page you're looking for.</h4>
      <br />
      <h5>
        Redirecting you to your home. You probably need to log in to access this page.
        {/* Here are some helpful links instead:
        <ul>
          <li>
            <NavLink exact to="/">
              Login / Signup
            </NavLink>
            <br />
            <NavLink exact to="/users/:userId/notebooks">
              My Notebooks
            </NavLink>
            <br />
            <NavLink exact to="/users/:userId/notes">
              My Notes
            </NavLink>
          </li>
        </ul>
        <br />
        <p>OR you will be redirected to the previous page in 5 seconds.</p> */}
      </h5>
      <Footer />
    </div>
  );
};

export default ErrorPage;
