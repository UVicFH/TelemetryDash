// Framework
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Libraries & Utils
import socketClient from 'socket.io-client';
import { acceptData } from './TransformData';

// Static
import logo from './logo.svg';
import './App.css';

// Components
import { AppContainer, AppHeader, AppLogo, AppTitle } from './AppSC';
import TeleDash from './Dashboard/TeleDash';
import GraphDash from './Dashboard/GraphDash';

class App extends Component {
  constructor(props) {
    super(props);

    const currentTime = Date.now();

    this.state = {
      connectionState: 'DISCONNECTED',
      data: {
        test: [{ val: 0, time: currentTime}],

        speed: [{ val: 0, time: currentTime}],
        throttle: [{ val: 0, time: currentTime}],
        brake: [{ val: 0, time: currentTime}],
        RPM: [{ val: 0, time: currentTime}],

        spkadv: [{ val: 0, time: currentTime}],
        AFR: [{ val: 0, time: currentTime}],
        pw: [{ val: 0, time: currentTime}],
        engineTemp: [{ val: 50, time: currentTime}],

        TPS: [{ val: 0, time: currentTime}],

        duty: { val: 0, time: currentTime},
        AFRtgt: { val: 0, time: currentTime},
        MAT: { val: 50, time: currentTime},
        controllerTemp: { val: 0, time: currentTime},
        FETMOSHigh: { val: 0, time: currentTime},
        FETMOSLow: { val: 0, time: currentTime},
        accumulatorTemp: { val: 0, time: currentTime},
        fuel: { val: 0, time: currentTime},
        charge: { val: 0, time: currentTime},
        gear: { val: 'N', time: currentTime},
        brakeTempLF: { val: 50, time: currentTime },
        brakeTempRF: { val: 50, time: currentTime },
        brakeTempLB: { val: 50, time: currentTime },
        brakeTempRB: { val: 50, time: currentTime },
      },
    };
  }

  componentDidMount() {
    // TODO: Extract into constants file or .env
    // const socket = socketClient('http://192.168.1.41:3000/');
    const socket = socketClient('http://localhost:3000/');

    socket.on('connect', () => {
      console.log('Websocket connected');
      this.setState({connectionState: 'CONNECTED'});
    });

    socket.on('disconnect', () => {
      console.log('Websocket disconnected');
      this.setState({connectionState: 'DISCONNECTED'});
    });

    socket.on('tele_connection_status', conn_status => {
      console.log(`MQTT connection status update received: ${conn_status}`);
      this.setState({connectionState: conn_status});
    });

    // Modify state when data transmitted
    socket.on('tele_data', newData => {
      // console.log(newData);
      this.setState({
        data: acceptData(this.state.data, newData),
      });
    });
  }

  render() {
    // console.log('Props:', this.state.data);
    const connectionStateColor = this.state.connectionState === 'DISCONNECTED'
      ? '#F00'
      : this.state.connectionState === 'NO DATA'
        ? '#F4BC42'
        : '';

    return (
      <AppContainer>
        <AppHeader>
          <AppTitle>UVic Formula Hybrid Telemetry</AppTitle>
          <AppTitle
            style={{
              float: 'right',
              color: connectionStateColor,
            }}
          >
            {this.state.connectionState}
          </AppTitle>
        </AppHeader>
        <Router>
          <Switch>
            <Route exact path='/' render={() => <TeleDash data={this.state.data} />} />
            <Route exact path='/graphs' render={() => <GraphDash data={this.state.data} />} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
