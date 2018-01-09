import React, { Component } from "react";
import { DashboardContainer, DashboardColumn } from "./DashboardSC";
import { PanelContainer } from "./PanelSC";

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <DashboardColumn>
          <PanelContainer>Hello World 1.1</PanelContainer>
        </DashboardColumn>
        <DashboardColumn>
          <PanelContainer>Hello World 1.1</PanelContainer>
          <PanelContainer>Hello World 1.2</PanelContainer>
        </DashboardColumn>
        <DashboardColumn>
          <PanelContainer>Hello World 1.1</PanelContainer>
          <PanelContainer>Hello World 1.2</PanelContainer>
          <PanelContainer>Hello World 1.3</PanelContainer>
        </DashboardColumn>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
