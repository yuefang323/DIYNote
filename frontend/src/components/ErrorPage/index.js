import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Footer from "../Footer";

import "./ErrorPage.css";

const ErrorPage = () => {
  const history = useHistory();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       history.push("/");
  //     }, 5000);
  //   }, [history]);

  return (
    <div>
      <img
        src="https://media2.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="Page-Not-Found"
      />
      <h2>Oops!</h2>
      <br />
      <h4>We can't seem to find the page you're looking for.</h4>
      <br />
      <h5>
        Here are some helpful links instead:
        <ul>
          <li>
            <NavLink exact to="/home">
              Home
            </NavLink>
            <br />
            <NavLink exact to="/notebooks">
              My Notebooks
            </NavLink>
            <br />
            <NavLink exact to="/notebooks">
              My Notes
            </NavLink>
          </li>
        </ul>
        <br />
        <p>OR you will be redirected to the previous page in 5 seconds.</p>
      </h5>
      <Footer />
    </div>
  );
};

export default ErrorPage;
