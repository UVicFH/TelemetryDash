// Framework
import React, { Component } from "react";

// Components
import {Dashboard, DashboardColumn} from "./Dashboard";
import {Card, CardHeader, CardBody} from "./Card";
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
    console.log(this.props);
  }

  componentWillReceiveProps(props) {
    console.log("Getting new props");
    console.log(props);
  }

  render() {
    return (
      <Dashboard>
        <DashboardColumn>
          <Card>
            <CardHeader>
              <span className="cardLabel">Driver</span>
            </CardHeader>
            <CardBody>
              <SingleBarGraph
                valueName={"Break"}
                data={this.props.data.test[this.props.data.test.length - 1].val}
                // data={this.props.data.brake[this.props.data.brake.length - 1].val}
                possibleRange={[0,100]}
                size={[400,40]}
                unit={"%"}                
              />
              <SingleBarGraph 
                valueName={"Throttle"}
                data={this.props.data.throttle[this.props.data.throttle.length - 1].val} 
                possibleRange={[0,100]}
                size={[400,40]} 
                unit={"%"}                
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className="cardLabel">Engine</span>
            </CardHeader>
            <CardBody>
              <DialGraph 
                valueName={"Throttle Position"}
                units={"%"}
                data={this.props.data.TPS[this.props.data.TPS.length - 1].val} 
                size={[100,100]}
                acceptableRange={[0,100]}
                possibleRange={[0,100]}
              />
              <DialGraph 
                valueName={"Spark Advance"} 
                units={"°"}
                data={this.props.data.spkadv[this.props.data.spkadv.length - 1].val} 
                size={[100,100]} 
                acceptableRange={[20,65]}
                possibleRange={[0,65]}
              />
              <DialGraph 
                valueName={"Pulse Width"} 
                units={"ms"}
                data={this.props.data.pw[this.props.data.pw.length - 1].val} 
                size={[100,100]} 
                acceptableRange={[1,9]}
                possibleRange={[0,12]}
              />
              <DialGraph 
                valueName={"Duty"} 
                units={"%"}
                data={this.props.data.duty[this.props.data.duty.length - 1].val} 
                size={[100,100]} 
                acceptableRange={[0,100]}
                possibleRange={[0,100]}
              />
              <DialGraph 
                valueName={"AFR"} 
                units={""}
                data={this.props.data.AFR[this.props.data.AFR.length - 1].val} 
                size={[100,100]} 
                acceptableRange={[8,15]}
                possibleRange={[0,22]}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>    
              <span className="cardLabel">Temperatures</span>        
            </CardHeader>
            <CardBody>
              {/* coolant needs alert over 190 */}
            <SingleBarGraphAverage 
                valueName={"Coolant"} 
                data={this.props.data.engineTemp[this.props.data.engineTemp.length - 1].val} 
                size={[400,40]} 
                acceptableRange={[165,190]}
                possibleRange={[40,200]}
              />
              <SingleBarGraphAverage 
                valueName={"Manifold Air"} 
                data={this.props.data.MAT[this.props.data.MAT.length - 1].val} 
                size={[400,40]} 
                acceptableRange={[35,110]}
                possibleRange={[35,125]}
              />
              <SingleBarGraphAverage 
                valueName={"Controller"} 
                data={this.props.data.controllerTemp[this.props.data.controllerTemp.length - 1].val} 
                size={[400,40]}                 
                acceptableRange={[0,50]}
                possibleRange={[-30,90]}
              />
              <SingleBarGraphAverage 
                valueName={"FETMOS High"} 
                data={this.props.data.FETMOSHigh[this.props.data.FETMOSHigh.length - 1].val} 
                size={[400,40]} 
                acceptableRange={[0,120]}
                possibleRange={[0,120]}
              />
              <SingleBarGraphAverage 
                valueName={"FETMOS Los"} 
                data={this.props.data.FETMOSLow[this.props.data.FETMOSLow.length - 1].val} 
                size={[400,40]} 
                acceptableRange={[0,120]}
                possibleRange={[0,120]}
              />
              {/* accumulator needs alert over 100 */}              
              <SingleBarGraphAverage 
                valueName={"Accumulator"} 
                data={this.props.data.accumulatorTemp[this.props.data.accumulatorTemp.length - 1].val} 
                size={[400,40]} 
                acceptableRange={[0,100]}
                possibleRange={[0,120]}
              />
            </CardBody>
          </Card>
        </DashboardColumn>
        <DashboardColumn>
          <Card>
            <CardBody>
              <RPM 
                size={[400,200]} 
                data={16} 
                dataRPM = {this.props.data.RPM[this.props.data.RPM.length - 1].val}
                dataSpeed = {this.props.data.speed[this.props.data.speed.length - 1].val}
                possibleRangeRPM={[0,12300]} 
              />     
              <SingleBarGraph 
                valueName={"Gas"} 
                data={this.props.data.fuel[this.props.data.fuel.length - 1].val}
                size={[400,40]} 
                acceptableRange={[0,100]}                
                possibleRange={[0,100]} 
                unit={"%"}
              />
              <SingleBarGraph
                valueName={"Charge"}
                data={this.props.data.charge[this.props.data.charge.length - 1].val}
                size={[400,40]}
                acceptableRange={[0,100]}                
                possibleRange={[0,100]} 
                unit={"%"}
              />
              <GearVisualization 
                data={this.props.data.gear[this.props.data.gear.length - 1].val}
                size={[400,40]}
              />
              {/* todo: break into wheels, rpm */}
              <CarVisualization 
                valueName={""} 
                data={this.props.data.test[this.props.data.test.length - 1].val}
                size={[400,500]} 
                max={25} 
                min={0} 
                percent={true}
              />
            </CardBody>
          </Card>
        </DashboardColumn>
        <DashboardColumn>
          <Card>
            <CardHeader>
              <span className="cardLabel">Driver</span>
            </CardHeader>
            <CardBody>
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
                </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <span className="cardLabel">Driver</span>
              </CardHeader>
              <CardBody>
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
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <span className="cardLabel">Driver</span>
              </CardHeader>
              <CardBody>
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
              </CardBody>
            </Card>
        </DashboardColumn>
      </Dashboard>
    );
  }
}

export default TeleDash;
