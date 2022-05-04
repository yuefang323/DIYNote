import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import Notebooks from "./components/Notebooks"; 
import Notes from './components/Notes'

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
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/home" /> : null}
            <SplashPage />
          </Route>
          <ProtectedRoute path='/home'>
            <HomePage />
          </ProtectedRoute>
          <Route path='/notebooks/:notebookId'>
            <Notes />
          </Route>
          <Route>PageNotFound</Route>
        </Switch>
      )}
    </>
  );
}

export default App;
