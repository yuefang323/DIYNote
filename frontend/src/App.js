import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import Notebooks from "./components/Notebooks";
import Notes from "./components/Notes";
import AllNotes from "./components/Notes/GetAllNotes";
import UpdateNotePage from "./components/Notes/UpdateNotePage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const seesionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {seesionUser ? <Redirect to="/home" /> : null}
            <SplashPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/users/:userId/notebooks">
            <Notebooks />
          </Route>
          <Route path="/users/:userId/notes">
            <AllNotes />
          </Route>
          <Route path="/notebooks/:notebookId">
            <Notes />
          </Route>
          <Route path="/notes/:noteId">
            <UpdateNotePage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
