import React, { Component } from "react";
import io from "socket.io-client";
import { DashboardContainer, DashboardColumn } from "./DashboardSC";
import { PanelContainer } from "./PanelSC";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.socket = io();
  }
  render() {
    return (
      <DashboardContainer>
        <DashboardColumn>
          <PanelContainer>Hello World 1.1</PanelContainer>
        </DashboardColumn>
        <DashboardColumn>
          <PanelContainer>Hello World 1.1</PanelContainer>
          <PanelContainer color="red">Hello World 1.2</PanelContainer>
        </DashboardColumn>
        <DashboardColumn>
          <PanelContainer>Hello World 1.1</PanelContainer>
          <PanelContainer color="cyan">Hello World 1.2</PanelContainer>
          <PanelContainer color="purple">Hello World 1.3</PanelContainer>
        </DashboardColumn>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
