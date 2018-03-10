// Framework
import React, { Component } from "react";

// Components
import Dashboard, { DashboardColumn } from "./Dashboard";
import Panel from "./Panel";

class TeleDash extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    console.log("Getting new props");
    console.log(props);
  }

  render() {
    return (
      <Dashboard>
        <DashboardColumn>
          <Panel>Hello World 1.1</Panel>
        </DashboardColumn>
        <DashboardColumn>
          <Panel>Hello World 1.1</Panel>
          <Panel color="red">Hello World 1.2</Panel>
        </DashboardColumn>
        <DashboardColumn>
          <Panel>Hello World 1.1</Panel>
          <Panel color="cyan">Hello World 1.2</Panel>
          <Panel color="purple">Hello World 1.3</Panel>
        </DashboardColumn>
      </Dashboard>
    );
  }
}

export default TeleDash;
