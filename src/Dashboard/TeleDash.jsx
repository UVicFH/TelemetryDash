// Framework
import React, { Component } from 'react';

// Components
import { Dashboard, DashboardColumn } from './Dashboard';
import { Card, CardHeader, CardBody } from './Card';
import RPM from '../Visualizations/RPM';
import CarVisualization from '../Visualizations/CarViz';
import SingleBarGraph from '../Visualizations/SingleBarGraph';
import SingleBarGraphAverage from '../Visualizations/SingleBarGraphAverage';
import DialGraph from '../Visualizations/DialGraph';
import GearVisualization from '../Visualizations/GearViz';
import TimelineGraph from '../Visualizations/TimelineGraph';

// Util
import { graphMap } from '../TransformData';

class TeleDash extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentWillReceiveProps(props) {
    // console.log('Getting new props');
    // console.log(props);
  }

  render() {
    return (
      <Dashboard>
        <DashboardColumn>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Driver</span>
            </CardHeader>
            <CardBody>
              <SingleBarGraph
                valueName={'Brake'}
                data={this.props.data.brake[0].val}
                possibleRange={[0,100]}
                size={[400,40]}
                unit={'%'}
              />
              <SingleBarGraph
                valueName={'Throttle'}
                data={this.props.data.throttle[0].val}
                possibleRange={[0,100]}
                size={[400,40]}
                unit={'%'}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Engine</span>
            </CardHeader>
            <CardBody display='flex'>
              <DialGraph
                valueName={'Throttle Position'}
                units={'%'}
                data={this.props.data.TPS[0].val}
                size={[100,80]}
                acceptableRange={[0,100]}
                possibleRange={[0,100]}
              />
              <DialGraph
                valueName={'Spark Advance'}
                units={'°'}
                data={this.props.data.spkadv[0].val}
                size={[100,80]}
                acceptableRange={[20,65]}
                possibleRange={[0,65]}
              />
              <DialGraph
                valueName={'Pulse Width'}
                units={'ms'}
                data={this.props.data.pw[0].val}
                size={[100,80]}
                acceptableRange={[1,9]}
                possibleRange={[0,12]}
              />
              <DialGraph
                valueName={'Duty'}
                units={'%'}
                data={this.props.data.duty.val}
                size={[100,80]}
                acceptableRange={[0,100]}
                possibleRange={[0,100]}
              />
              <DialGraph
                valueName={'AFR'}
                units={''}
                data={this.props.data.AFR[0].val}
                size={[100,80]}
                acceptableRange={[8,15]}
                possibleRange={[0,22]}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Temperatures</span>
            </CardHeader>
            <CardBody>
              {/* coolant needs alert over 190 */}
              <SingleBarGraphAverage
                valueName={'Coolant'}
                data={this.props.data.engineTemp[0].val}
                size={[400,40]}
                acceptableRange={[165,190]}
                possibleRange={[40,200]}
                units={'°'}
              />
              <SingleBarGraphAverage
                valueName={'Manifold Air'}
                data={this.props.data.MAT.val}
                size={[400,40]}
                acceptableRange={[35,110]}
                possibleRange={[35,125]}
                units={'°'}
              />
              <SingleBarGraphAverage
                valueName={'Controller'}
                data={this.props.data.controllerTemp.val}
                size={[400,40]}
                acceptableRange={[0,50]}
                possibleRange={[-30,90]}
                units={'°'}
              />
              <SingleBarGraphAverage
                valueName={'FETMOS High'}
                data={this.props.data.FETMOSHigh.val}
                size={[400,40]}
                acceptableRange={[0,120]}
                possibleRange={[0,120]}
                units={'°'}
              />
              <SingleBarGraphAverage
                valueName={'FETMOS Low'}
                data={this.props.data.FETMOSLow.val}
                size={[400,40]}
                acceptableRange={[0,120]}
                possibleRange={[0,120]}
                units={'°'}
              />
              {/* accumulator needs alert over 100 */}
              <SingleBarGraphAverage
                valueName={'Accumulator'}
                data={this.props.data.accumulatorTemp.val}
                size={[400,40]}
                acceptableRange={[0,100]}
                possibleRange={[0,120]}
                units={'°'}
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
                valueName={'Gas'}
                data={this.props.data.fuel.val}
                size={[400,40]}
                acceptableRange={[0,100]}
                possibleRange={[0,100]}
                unit={'%'}
              />
              <SingleBarGraph
                valueName={'Charge'}
                data={this.props.data.charge.val}
                size={[400,40]}
                acceptableRange={[0,100]}
                possibleRange={[0,100]}
                unit={'%'}
              />
              <GearVisualization
                data={this.props.data.gear.val}
                size={[400,40]}
              />
              {/* todo: break into wheels, rpm */}
              <CarVisualization
                valueName={''}
                data={this.props.data}
                size={[400,500]}
                max={250}
                min={0}
                percent={true}
              />
            </CardBody>
          </Card>
        </DashboardColumn>
        <DashboardColumn>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Speed</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={105}
                min={0}
                valueName={'Charge'}
                data={graphMap(this.props.data.speed)}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Throttle</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={100}
                min={0}
                valueName={'Charge'}
                data={graphMap(this.props.data.throttle)}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Brake</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={100}
                min={0}
                valueName={'Charge'}
                data={graphMap(this.props.data.brake)}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Engine RPM</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={12000}
                min={0}
                valueName={'Charge'}
                data={graphMap(this.props.data.RPM)}
              />
            </CardBody>
          </Card>
        </DashboardColumn>
      </Dashboard>
    );
  }
}

export default TeleDash;
