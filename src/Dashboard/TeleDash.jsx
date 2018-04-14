// Framework
import React, { Component } from "react";

// Components
import Dashboard, { DashboardColumn } from "./Dashboard";
import Panel from "./Panel";
import SingleBarGraph from "../Visualizations/SingleBarGraph"
import SingleBarGraphAverage from "../Visualizations/SingleBarGraphAverage"
import DialGraph from "../Visualizations/DialGraph"

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
          <Panel>
            <h3>Driver</h3>
            <SingleBarGraph data={5} size={[400,40]} max={20} min={0} valueName={"Break"}/>
            <SingleBarGraph data={15} size={[400,40]} max={25} min={0} valueName={"Throttle"}/>
          </Panel>
          <Panel>
            <h3>Engine</h3>
            <DialGraph data={18} size={[100,100]} max={20} min={0} valueName={"sample 3"}/>
            <DialGraph data={16} size={[100,100]} max={20} min={0} valueName={"sample 3"}/>
            <DialGraph data={18} size={[100,100]} max={25} min={0} valueName={"sample 3"}/>
            <DialGraph data={10} size={[100,100]} max={20} min={0} valueName={"sample 3"}/>
          </Panel>
          <Panel>
            <h3>Temperatures</h3>
            <SingleBarGraphAverage data={13} size={[400,40]} max={20} min={0} low={10} high={15} valueName={"sample 1"}/>
            <SingleBarGraphAverage data={10} size={[400,40]} max={20} min={0} low={5} high={12} valueName={"sample 1"}/>
          </Panel>
        </DashboardColumn>
        <DashboardColumn>
          <Panel>
            Car / Speed / Fuel Metrics
          </Panel>
        </DashboardColumn>
        <DashboardColumn>
          <Panel>Timeline Metrics</Panel>
          {/* <Panel color="red">Hello World 1.2</Panel> */}
        </DashboardColumn>
      </Dashboard>
    );
  }
}

export default TeleDash;
