import React from "react";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import { Switch, Route, Redirect } from "react-router-dom";

export const renderOnlineRoutes = () => {
  return (
    <Switch>
      <Redirect to={"/"} />
    </Switch>
  );
};

export const renderOfflineRoutes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/header">
        <Header />
      </Route>
      <Redirect to={"/login"} />
    </Switch>
  );
};
