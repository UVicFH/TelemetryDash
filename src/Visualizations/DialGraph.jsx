// Framework
import React, { Component } from "react";
import styled from "styled-components";

// D3 imports
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { selectionMulti } from "d3-selection-multi";
import { arc} from "d3-shape";

class DialGraph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const node = this.node
        const dataMin = 0;
        const dataMax = this.props.max;
        const width = this.props.size[0];
        const height = this.props.size[1];
        const radius = Math.min(width, height) * 0.40;
        const donutWidth = radius * 0.20;

        var tau = (.75 * Math.PI);  // this calc is off?
        
        // CALCULATE BORDER ARC
        var getArcBorder= arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius)
            .startAngle(-0.75 * Math.PI)
            .endAngle(tau);

        // CALCULATE VALUE ARC        
        var getArcValue = arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius)
            .startAngle(-0.75 * Math.PI)
            .endAngle((this.props.data/dataMax)*tau); // this calc is off?
        
        // CURRENT VALUE
        var valueLable = { x: (width/2), y: ((height/2)+10), value: this.props.data};

        // SCALES -- not sure if this is better than using the axis method...
        var axisMin = { x: (width*.15), y: height-20, value: dataMin}; // display min scale
        var axisMax = { x: (width*.85), y: height-20, value: dataMax}; // display max scale

        const translateArc = 'translate(' + (height / 2) + ',' + (width / 2) + ')';

        return (
            <div> 
                <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} className='dial-chart'>
                    <path className="outerBar"
                        d={getArcBorder()} 
                        transform={translateArc}
                        />
                    <path className="innerBar"
                        d={getArcValue()} 
                        transform={translateArc}
                        />
                    <text className="axisText" x={axisMin.x} y={axisMin.y}>{axisMin.value}</text>
                    <text className="axisText" x={axisMax.x} y={axisMax.y}>{axisMax.value}</text>
                    <text className="valueLable" x={valueLable.x} y={valueLable.y}>{valueLable.value}</text>
                </svg>
                <label>{this.props.valueName}</label>
            </div>
        );
    }
}

export default DialGraph;