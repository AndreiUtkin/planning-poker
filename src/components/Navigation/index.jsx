import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";

const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

const Navigation = () => {
  const authUser = useContext(AuthUserContext);

  return <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

export default Navigation;