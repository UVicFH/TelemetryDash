// Framework
import React, { Component } from "react";

// Libraries
import socketClient from "socket.io-client";

// Static
import logo from "./logo.svg";
import "./App.css";

// Components
import { AppContainer, AppHeader, AppLogo, AppTitle } from "./AppSC";
import TeleDash from "./Dashboard/TeleDash";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <TeleDash teleDash />
      </AppContainer>
    );
  }
}

export default App;
