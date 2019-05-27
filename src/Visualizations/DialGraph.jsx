// Framework
import React, { Component } from 'react';
// import styled from 'styled-components';

// D3 imports
import { arc } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { Card, CardLabel, CardBody } from './DialContainer';

class DialGraph extends Component {
  render() {
    const dataMin = this.props.possibleRange[0];
    const dataMax = this.props.possibleRange[1];
    const acceptableMin = this.props.acceptableRange[0];
    const acceptableMax = this.props.acceptableRange[1];
    const width = this.props.size[0];
    const height = this.props.size[1];
    const radius = (width/2)-10;
    const donutWidth = 15;
    const data = this.props.data;

    // CREATE SCALE FOR ARC ANGLE
    const scaleArc = scaleLinear()
      .range([-.75, .75])
      .domain([dataMin, dataMax]);

    // CALCULATE BORDER ARC
    const getArcBorder= arc()
      .innerRadius(radius - donutWidth + donutWidth/4)
      .outerRadius(radius - donutWidth/4)
      .startAngle(-0.75 * Math.PI)
      .endAngle(0.75 * Math.PI);

    // CALCULATE VALUE ARC
    const getArcValue = arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius)
      .startAngle(-0.75 * Math.PI)
      .endAngle(scaleArc(data) * Math.PI);

    // CURRENT VALUE
    const valueLable = { x: width/2, y: (height/2)+12, value: data};

    // SCALES -- not sure if this is better than using the axis method...
    const axisMin = { x: 0, y: height-5, value: dataMin}; // display min scale
    const axisMax = { x: width, y: height-5, value: dataMax}; // display max scale
    const translateArc = `translate(${width/2},${(height/2)+5})`;

    return (
      <Card>
        <CardBody>
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
            <text
              className='axisText'
              x={axisMin.x}
              y={axisMin.y}
            >
              {axisMin.value}
            </text>
            <text
              className='axisText'
              x={axisMax.x}
              y={axisMax.y} textAnchor='end'
            >
              {axisMax.value}
            </text>
            <text
              className='valueLable'
              x={valueLable.x}
              y={valueLable.y}
            >
              {valueLable.value}
            </text>
          </svg>
        </CardBody>
        <CardLabel>
          <label>{this.props.valueName}</label>
        </CardLabel>
      </Card>
    );
  }
}

export default DialGraph;
