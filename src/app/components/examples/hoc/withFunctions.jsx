import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => () => {
  const [isAuth, setAuth] = useState(false);

  const logIn = () => {
    localStorage.setItem("auth", "confirmed");
    setAuth(true);
  };

  const logOut = () => {
    localStorage.removeItem("auth");
    setAuth(false);
  };

  return (
    <CardWrapper>
      <Component isAuth={isAuth} onLogin={logIn} onLogOut={logOut} />
    </CardWrapper>
  );
};

export default withFunctions;
