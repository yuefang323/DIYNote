import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import Footer from "../Footer";

import "./HomePage.css";

const HomePage = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div className="page-container">
      <h1 className="home-heading">Welcome {sessionUser.username}!</h1>
      <br />
      <div className="links">
        <ul>
          <li className="my-notebooks">
            <NavLink to={`/users/${sessionUser.id}/notebooks`}>
              <i className="fa-solid fa-book fa-2x"></i>
              <p className="my-notebooks-link">My Notebooks</p>
            </NavLink>
          </li>
          <li className="my-notes-link">
            <NavLink to={`/users/${sessionUser.id}/notes`}>
              <i className="fa-solid fa-book-open fa-2x"></i>
              <p className="my-notes-link">My Notes</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
