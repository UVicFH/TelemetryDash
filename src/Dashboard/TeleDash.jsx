// Framework
import React, { Component } from "react";

// Components
import Dashboard, { DashboardColumn } from "./Dashboard";
import Panel from "./Panel";
import RPM from "../Visualizations/RPM";
import CarVisualization from "../Visualizations/CarViz";
import SingleBarGraph from "../Visualizations/SingleBarGraph";
import SingleBarGraphAverage from "../Visualizations/SingleBarGraphAverage";
import DialGraph from "../Visualizations/DialGraph";
import GearVisualization from "../Visualizations/GearViz";
import TimelineGraph from "../Visualizations/TimelineGraph";

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
            <SingleBarGraph
              data={
                this.props.data.test
                  ? this.props.data.test[this.props.data.test.length - 1].val
                  : 0
              }
              size={[400,40]} max={20} min={0} valueName={"Break"}/>
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
            <RPM data={16} size={[400,200]} max={20} min={0} valueName={"sample 3"}/>     
            <GearVisualization data={3} size={[400,40]}/>
            <SingleBarGraph data={5} size={[400,40]} max={100} min={0} valueName={"Gas"} percent={true}/>
            <SingleBarGraph data={15} size={[400,40]} max={100} min={0} valueName={"Charge"} percent={true}/>
            <CarVisualization data={15} size={[400,500]} max={100} min={0} valueName={"Charge"} percent={true}/>
          </Panel>
        </DashboardColumn>
        <DashboardColumn>
          <Panel>
          <TimelineGraph size={[400,150]} max={10} min={0} valueName={"Charge"}
              data = {[ 
                  { "time": 1, "value": "2.9" },
                  { "time": 2, "value": "2.7" },
                  { "time": 3, "value": "4.3" },
                  { "time": 4, "value": "4.6" },
                  { "time": 5, "value": "5" },
                  { "time": 6, "value": "5.2" },
                  { "time": 7, "value": "5.1" },
                  { "time": 8, "value": "4.8" },
                  { "time": 9, "value": "4.9" },
                  { "time": 10, "value": "5.1" },
                  { "time": 11, "value": "5.3" },
                  { "time": 12, "value": "5.6" },
                  { "time": 13, "value": "6.2" }]}
              />
              <TimelineGraph size={[400,150]} max={10} min={0} valueName={"Charge"}
              data = {[ 
                  { "time": 1, "value": "2.9" },
                  { "time": 2, "value": "2.7" },
                  { "time": 3, "value": "4.3" },
                  { "time": 4, "value": "4.6" },
                  { "time": 5, "value": "5" },
                  { "time": 6, "value": "5.2" },
                  { "time": 7, "value": "5.1" },
                  { "time": 8, "value": "4.8" },
                  { "time": 9, "value": "4.9" },
                  { "time": 10, "value": "5.1" },
                  { "time": 11, "value": "5.3" },
                  { "time": 12, "value": "5.6" },
                  { "time": 13, "value": "6.2" }]}
              />
              <TimelineGraph size={[400,150]} max={10} min={0} valueName={"Charge"}
              data = {[ 
                  { "time": 1, "value": "2.9" },
                  { "time": 2, "value": "2.7" },
                  { "time": 3, "value": "4.3" },
                  { "time": 4, "value": "4.6" },
                  { "time": 5, "value": "5" },
                  { "time": 6, "value": "5.2" },
                  { "time": 7, "value": "5.1" },
                  { "time": 8, "value": "4.8" },
                  { "time": 9, "value": "4.9" },
                  { "time": 10, "value": "5.1" },
                  { "time": 11, "value": "5.3" },
                  { "time": 12, "value": "5.6" },
                  { "time": 13, "value": "6.2" }]}
              />
            </Panel>
        </DashboardColumn>
      </Dashboard>
    );
  }
}

export default TeleDash;
