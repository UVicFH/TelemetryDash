// Framework
import React, { Component } from "react";

// import styled from "styled-components";
import { Label, Viz, VizGroup, LabelValue } from "./VizContainers";
import styled from "styled-components";

// D3 imports
import { scaleLinear } from "d3-scale";

class SingleBarGraph extends Component {
  render() {
    const dataMin = this.props.possibleRange[0];
    const dataMax = this.props.possibleRange[1];
    const barHeight = this.props.size[1] - 15;
    const valueLableMargin = 75;
    const xScale = scaleLinear().domain([0, dataMax]).range([0, 100]);
    const barWidth = xScale(dataMax);

    // BAR BORDER
    const borderBar = {
      x: 0,
      y: 0,
      width: barWidth + "%",
      height: barHeight,
    };

    // VALUE BAR
    const valueBar = {
      x: 0,
      y: 0,
      width: xScale(this.props.data) + "%",
      height: barHeight,
    };

    // CURRENT VALUE
    const valueLable = {
      x: (barWidth + 15),
      y: ((barHeight/2)+7),
      value: (this.props.unit ? (this.props.data + this.props.unit) : (this.props.data)),
    };

    // SCALES -- not sure if this is better than using the axis method...
    // display min scale
    const axisMin = {
      x: 0,
      y: barHeight + 15,
      value: 0,
    };
    // display max scale
    const axisMax = {
      x: barWidth + "%",
      y: barHeight + 15,
      value: dataMax,
    };

    return (
      <VizGroup>
        <Label>{this.props.valueName}</Label>
        <Viz>
          <svg
            ref={this.props.valueName}
            width='100%'
            height={this.props.size[1]}
            className='single-bar'
          >
            <rect className="outerBar"
              x={borderBar.x + "%"}
              y={borderBar.y + borderBar.height/4}
              width={borderBar.width}
              width={borderBar.width}
              height={borderBar.height/2} />
            <rect className="innerBar"
              x={valueBar.x + "%"}
              y={valueBar.y}
              width={valueBar.width}
              height={valueBar.height} />
            <text className="axisText" x={axisMin.x} y={axisMin.y}>
              {axisMin.value}
            </text>
            <text className="axisText" x={axisMax.x} y={axisMax.y} textAnchor="end">
              {axisMax.value}
            </text>
          </svg>
        </Viz>
        <LabelValue>
          {this.props.data}
          {this.props.unit}
        </LabelValue>
      </VizGroup>
    );
  }
}

export default SingleBarGraph;
