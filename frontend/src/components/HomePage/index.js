import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import Notebooks from "../Notebooks";

import "./HomePage.css";

const HomePage = () => {
  //   const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  // const notebooks = useSelector(state => state?.notebooks?.notebooks);
  // const notes = useSelector(state => state?.notes?.notes);

  // useEffect(() => {
  //     if(sessionUser) {
  //         dispatch();
  //         dispatch();
  //     }
  // }, [dispatch, sessionUser])
  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div className="page-container">
      <h1 className="home-heading">Welcome {sessionUser.username}!</h1>
      <br />
      <div className="links"> 
        <ul>
        <li className='my-notebooks'>
          <NavLink to={`/users/${sessionUser.id}/notebooks`}>Your Notebooks
          </NavLink>
        </li>
        <br />
        <li className='my-notes'>
          <NavLink to={`/users/${sessionUser.id}/notes`}>Your Notes</NavLink>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
