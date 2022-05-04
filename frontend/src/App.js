import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import Notebooks from "./components/Notebooks"; 
import Notes from './components/Notes'
import UpdateNotePage from "./components/Notes/UpdateNotePage";
import ErrorPage from './components/ErrorPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const user = useSelector((state) => state.session.user);
  const ProtectedRoute = (props) => {
    return (
      <Route {...props}>{user ? props.children : <Redirect to="/" />}</Route>
    );
  };

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/home" /> : null}
            <SplashPage />
          </Route>
          <ProtectedRoute exact path='/home'>
            <HomePage />
          </ProtectedRoute>
          <Route path='/notebooks/:notebookId'>
            <Notes />
          </Route>
          <Route exact path='/notes/:noteId'>
            <UpdateNotePage />
          </Route>
          <Route><ErrorPage /></Route>
        </Switch>
      )}
    </>
  );
}

export default App;
