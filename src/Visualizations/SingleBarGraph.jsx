// Framework
import React, { Component } from "react";
import styled from "styled-components";

// D3 imports
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { selectionMulti } from "d3-selection-multi";

class SingleBarGraph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dataMax = this.props.max
        const height = this.props.size[1];
        const width = this.props.size[0];
        const barHeight = this.props.size[1] - 15
        const barWidth = this.props.size[0] - 50
        const xScale = scaleLinear().domain([0, dataMax]).range([0, barWidth])
        
        // BAR BORDER
        var borderBar = { x: 0, y: 0, width: xScale(dataMax), height: barHeight};

        // VALUE BAR
        var valueBar = { x: 0, y: 0, width: xScale(this.props.data), height: barHeight};

        // CURRENT VALUE
        var valueLable = { 
            x: (barWidth + 5), 
            y: ((barHeight/2)+7), 
            value: (this.props.percent ? (this.props.data + "%") : (this.props.data))
        };
            
        // SCALES -- not sure if this is better than using the axis method...
        var axisMin = { x: 0, y: barHeight+10, value: 0}; // display min scale
        var axisMax = { x: barWidth-10, y: barHeight+10, value: dataMax}; // display max scale
        

        console.log(this.props);
        return (
            <div> 
                <label>{this.props.valueName}</label>
                <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} className='single-bar'>
                    <rect className="outerBar"
                        x={borderBar.x}
                        y={borderBar.y}
                        width={borderBar.width}
                        height={borderBar.height} />
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

export default SingleBarGraph;