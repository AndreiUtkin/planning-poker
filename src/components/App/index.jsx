import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthUserContext, useAuthentication } from "../Session";
import Navigation from "../Navigation";
import LandingPage from "../Pages/Landing";
import SignInPage from "../Pages/SignIn";
import HomePage from "../Pages/Home";
import * as ROUTES from "../../constants/routes";

const App = () => {
  const authState = useAuthentication();

  return (
    <AuthUserContext.Provider value={authState.user}>
      <Router>
        <div>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
        </div>
      </Router>
    </AuthUserContext.Provider>
  );
};

export default App;