// Framework
import React, { Component } from "react";
import styled from "styled-components";

// D3 imports
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { arc} from "d3-shape";

class RPM extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const node = this.node
        const dataMin = 0;
        const dataMax = this.props.max;
        const width = this.props.size[0];
        const height = this.props.size[1];
        const radius = (width/2)-25;
        const donutWidth = 25;

        var tau = (.5 * Math.PI);  // this calc is off?
        
        // CALCULATE BORDER ARC
        var getArcBorder= arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius)
            .startAngle(-0.5 * Math.PI)
            .endAngle(tau);

        // CALCULATE VALUE ARC        
        var getArcValue = arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius)
            .startAngle(-0.5 * Math.PI)
            .endAngle((this.props.data/dataMax)*tau); // this calc is off?
        
        // CURRENT VALUE
        var valueLable = { x: (width/2), y: ((height/2)+10), value: (this.props.data+"km/h")};

        // SCALES -- not sure if this is better than using the axis method...
        var axisMin = { x: 15, y: height, value: dataMin}; // display min scale
        var axisMax = { x: width-15, y: height, value: dataMax}; // display max scale

        // RPM LABLE
        var rpmLableTop = { x: width*.80, y: height*.25, value: "x1000"}; // display max scale
        var rpmLableBottom = { x: width*.80, y: height*.25+20, value: "RPM"}; // display max scale

        const translateArc = 'translate(' + (height) + ',' + (width / 2) + ')';

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
                    <text className="valueLable" x={rpmLableTop.x} y={rpmLableTop.y}>{rpmLableTop.value}</text>
                    <text className="valueLable" x={rpmLableBottom.x} y={rpmLableBottom.y}>{rpmLableBottom.value}</text>
                </svg>
            </div>
        );
    }
}

export default RPM;