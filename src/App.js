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

    const currentTime = Date.now();

    this.state = {
      data: {
        test: [{ val: 0, time: currentTime}],
        speed: [{ val: 0, time: currentTime}],
        throttle: [{ val: 0, time: currentTime}],
        brake: [{ val: 0, time: currentTime}],
        RPM: [{ val: 0, time: currentTime}],
        TPS: { val: 0, time: currentTime},
        spkadv: { val: 0, time: currentTime},
        pw: { val: 0, time: currentTime},
        duty: { val: 0, time: currentTime},
        AFR: { val: 0, time: currentTime},
        AFRtgt: { val: 0, time: currentTime},
        engineTemp: { val: 50, time: currentTime},
        MAT: { val: 50, time: currentTime},
        controllerTemp: { val: 0, time: currentTime},
        FETMOSHigh: { val: 0, time: currentTime},
        FETMOSLow: { val: 0, time: currentTime},
        accumulatorTemp: { val: 0, time: currentTime},
        fuel: { val: 0, time: currentTime},
        charge: { val: 0, time: currentTime},
        gear: { val: "N", time: currentTime},
        brakeTempLF: { val: 50, time: currentTime },
        brakeTempRF: { val: 50, time: currentTime },
        brakeTempLB: { val: 50, time: currentTime },
        brakeTempRB: { val: 50, time: currentTime },
      }
    };
  }

  componentDidMount() {
    // TODO: Extract into constants file or .env
    const socket = socketClient("http://192.168.1.41:3000/");
    // const socket = socketClient("http://localhost:3000/");
    // Acknowledge connection
    socket.on("connect", () => {
      console.log("Websocket connected");
    });
    // Modify state when data transmitted
    socket.on("tele_data", newData => {
      console.log(newData);
      this.setState({
        data: acceptData(this.state.data, newData)
      })
    });
  }

  render() {
    // console.log("Props:", this.state.data);
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
