import React, { Component } from "react";
import { DashboardContainer } from "./DashboardSC";
import Panel from "./Panel";

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <Panel />
      </DashboardContainer>
    );
  }
}

export default Dashboard;
