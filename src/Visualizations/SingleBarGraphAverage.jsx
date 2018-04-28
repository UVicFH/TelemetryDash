// Framework
import React, { Component } from "react";
// import styled from "styled-components";

// D3 imports
import { scaleLinear } from "d3-scale";

class SingleBarGraphAverage extends Component {
    constructor(props) {
        super(props);
    }

    // todo: needs to have the average bar made once we get that data
    render() {
        const dataMin = this.props.possibleRange[0];
        const dataMax = this.props.possibleRange[1];
        const barHeight = this.props.size[1] - 15
        const barWidth = this.props.size[0] - 30
        const xScale = scaleLinear().domain([dataMin, dataMax]).range([0, barWidth])
        
        // BAR BORDER
        var borderBar = { x: 0, y: 0, width: xScale(dataMax), height: barHeight};

        // RANGE BAR
        var rangeBar = { x: xScale(this.props.low), y: 0, width: xScale(this.props.high - this.props.low), height: barHeight};

        // VALUE BAR
        var valueBar = { x: xScale(this.props.data), y: 0, width: 8, height: barHeight};

        // CURRENT VALUE
        var valueLable = { x: (barWidth + 5), y: ((barHeight/2)+7), value: this.props.data};
            
        // SCALES -- not sure if this is better than using the axis method...
        var axisMin = { x: 0, y: barHeight+10, value: 0}; // display min scale
        var axisMax = { x: barWidth-10, y: barHeight+10, value: dataMax}; // display max scale
        
        return (
            <div> 
                <label>{this.props.valueName}</label>
                <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} className='single-bar'>
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
                    <text className="axisText" x={axisMin.x} y={axisMin.y}>{axisMin.value}</text>
                    <text className="axisText" x={axisMax.x} y={axisMax.y}>{axisMax.value}</text>
                    <text className="valueLable" x={valueLable.x} y={valueLable.y}>{valueLable.value}</text>
                </svg>
            </div>
        );
    }
}

export default SingleBarGraphAverage;