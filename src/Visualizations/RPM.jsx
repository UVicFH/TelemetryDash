// Framework
import React, { Component } from 'react';
// import styled from 'styled-components';

// D3 imports
import { arc } from 'd3-shape';
import { scaleLinear } from 'd3-scale';

class RPM extends Component {
  render() {
    const dataMin = this.props.possibleRangeRPM[0];
    const dataMax = this.props.possibleRangeRPM[1];
    const width = this.props.size[0];
    const height = this.props.size[1];
    const radius = (width/2)-25;
    const donutWidth = 25;

    // CREATE SCALE FOR ARC ANGLE
    const scaleArc = scaleLinear()
      .range([-.5, .5])
      .domain([dataMin, dataMax]);

    // CALCULATE BORDER ARC
    const getArcBorder= arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius)
      .startAngle(-0.5 * Math.PI)
      .endAngle(0.5 * Math.PI);

    // CALCULATE VALUE ARC
    const getArcValue = arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius)
      .startAngle(-0.5 * Math.PI)
      .endAngle(scaleArc(this.props.dataRPM) * Math.PI); // this calc is off?

    // CURRENT VALUE
    const speedLable = {
      x: (width/2),
      y: ((height/2)+10),
      value: `${this.props.dataSpeed} km/h`,
    };

    const RPMLable = {
      x: (width/2),
      y: ((height/2) + 70),
      value: `${this.props.dataRPM} RPM`,
    };

    // SCALES -- not sure if this is better than using the axis method...
    const axisMin = { x: 15, y: height, value: dataMin}; // display min scale
    const axisMax = { x: width-15, y: height, value: dataMax}; // display max scale
    const translateArc = `translate(${height},${width / 2})`;

    // console.log(typeof this.props.dataRPM);
    // console.log(this.props.dataRPM)
    // console.log(scaleArc(10))
    // console.log(getArcValue())

    return (
      <div>
        <svg
          ref={node => this.node = node}
          width={this.props.size[0]}
          height={this.props.size[1]}
          className='dial-chart'
        >
          <path className='outerBar'
            d={getArcBorder()}
            transform={translateArc}
          />
          <path className='innerBar'
            d={getArcValue()}
            transform={translateArc}
          />
          <text className='axisText' x={axisMin.x} y={axisMin.y}>
            {axisMin.value}
          </text>
          <text className='axisText' x={axisMax.x} y={axisMax.y}>
            {axisMax.value}
          </text>
          <text className='valueLable' x={speedLable.x} y={speedLable.y}>
            {speedLable.value}
          </text>
          <text className='valueLable' x={RPMLable.x} y={RPMLable.y}>
            {RPMLable.value}
          </text>
        </svg>
      </div>
    );
  }
}

export default RPM;
