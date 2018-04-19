// Framework
import React, { Component } from "react";

// Libraries & Utils
import socketClient from "socket.io-client";
import { acceptData } from "./TransformData";

// Static
import logo from "./logo.svg";
import "./App.css";

// Components
import { AppContainer, AppHeader, AppLogo, AppTitle } from "./AppSC";
import TeleDash from "./Dashboard/TeleDash";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    // TODO: Extract into constants file or .env
    const socket = socketClient("http://localhost:3000/");
    // Acknowledge connection
    socket.on("connect", () => {
      console.log("Websocket connected");
    });
    // Modify state when data transmitted
    socket.on("tele_data", newData =>
      this.setState({
        data: acceptData(this.state.data, newData)
      })
    );
  }

  render() {
    console.log("Props:", this.state.data);
    return (
      <AppContainer>
        <AppHeader>
          <AppTitle>UVic Formula Hybrid Telemetry</AppTitle>
        </AppHeader>
        <TeleDash data={this.state.data} />
      </AppContainer>
    );
  }
}

export default App;
