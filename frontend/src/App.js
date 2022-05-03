import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";

function App() {
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
            <SplashPage />
          </Route>
          <Route exact path="/home">
            <SplashPage />
          </Route>
          {/* <Route exact path="/my-notes">
            <MyNotes />
          </Route> */}
          {/* <Route exact path="/my-notebooks">
            <MyNotebooks />
          </Route> */}
          <Route>PageNotFound</Route>
        </Switch>
      )}
    </>
  );
}

export default App;
