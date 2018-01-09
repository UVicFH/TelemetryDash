import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppContainer, AppHeader, AppLogo, AppTitle } from "./AppSC";
import Dashboard from "./Dashboard/Dashboard";

const App = () => (
  <AppContainer>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle>Welcome to React</AppTitle>
    </AppHeader>
    <Dashboard />
  </AppContainer>
);

export default App;
