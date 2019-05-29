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

class GraphDash extends Component {
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
              <span className='cardLabel'>Speed</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={105}
                min={0}
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
                data={graphMap(this.props.data.RPM)}
              />
            </CardBody>
          </Card>
        </DashboardColumn>
        <DashboardColumn>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Spark Advance</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={65}
                min={0}
                data={graphMap(this.props.data.spkadv)}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Air/Fuel Ratio</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={22}
                min={4}
                data={graphMap(this.props.data.AFR)}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Pulse Width</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={100}
                min={0}
                data={graphMap(this.props.data.pw)}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <span className='cardLabel'>Coolant Temp</span>
            </CardHeader>
            <CardBody>
              <TimelineGraph
                size={[450,150]}
                max={220}
                min={60}
                data={graphMap(this.props.data.engineTemp)}
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
                data={graphMap(this.props.data.RPM)}
              />
            </CardBody>
          </Card>
        </DashboardColumn>
      </Dashboard>
    );
  }
}

export default GraphDash;
