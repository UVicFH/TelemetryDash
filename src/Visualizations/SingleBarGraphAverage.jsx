// Framework
import React, { Component } from "react";

// import styled from "styled-components";
import { Label, Viz, VizGroup, LabelValue } from "./VizContainers";

// D3 imports
import { scaleLinear } from "d3-scale";

class SingleBarGraphAverage extends Component {
  // todo: needs to have the average bar made once we get that data
  render() {
    const dataMin = this.props.possibleRange[0];
    const dataMax = this.props.possibleRange[1];
    const barHeight = this.props.size[1] - 15;
    // const barWidth = this.props.size[0];
    const xScale = scaleLinear().domain([dataMin, dataMax]).range([0, 100]);
    const barWidth = xScale(dataMax); 

    // BAR BORDER
    const borderBar = { x: 0, y: 0, width: xScale(dataMax) + "%", height: barHeight};

    // RANGE BAR
    const rangeBar = { 
      x: xScale(this.props.low),
      y: 0,
      width: xScale(this.props.high - this.props.low) + "%",
      height: barHeight,
    };

    // VALUE BAR
    const valueBar = { x: xScale(this.props.data), y: 0, width: 8, height: barHeight};

    // CURRENT VALUE
    const valueLable = { x: (barWidth + 5), y: ((barHeight/2)+7), value: this.props.data};

    // SCALES -- not sure if this is better than using the axis method...
    const axisMin = { x: 0, y: barHeight+10, value: 0}; // display min scale
    const axisMax = { x: barWidth + "%", y: barHeight+10, value: dataMax}; // display max scale

    return (
      <VizGroup> 
        <Label>{this.props.valueName}</Label>
        <Viz>
          <svg
            ref={node => this.node = node}
            width='100%'
            height={this.props.size[1]}
            className='single-bar'
          >
            <rect className="outerBar"
              x={borderBar.x}
              y={borderBar.y + borderBar.height/4}
              width={borderBar.width}
              height={borderBar.height/2} />
            {/* <rect className="innerBar"
                            x={rangeBar.x}
                            y={rangeBar.y + rangeBar.height/4}
                            width={rangeBar.width}
                            height={rangeBar.height/2} /> */}
            <rect className="innerBar"
              x={valueBar.x}
              y={valueBar.y}
              width={valueBar.width}
              height={valueBar.height} />
            <text
              className="axisText"
              x={axisMin.x}
              y={axisMin.y}
            >
              {this.props.possibleRange[0]}
            </text>
            <text
              className="axisText"
              x={axisMax.x}
              y={axisMax.y}
              textAnchor="end"
            >
              {this.props.possibleRange[1]}
            </text>
          </svg>
        </Viz>
        <LabelValue>{this.props.data}{this.props.units}</LabelValue>                
      </VizGroup>
    );
  }
}

export default SingleBarGraphAverage;
