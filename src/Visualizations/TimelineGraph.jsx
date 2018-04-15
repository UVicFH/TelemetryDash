// Framework
import React, { Component } from "react";
// import styled from "styled-components";

// D3 imports
import { scaleLinear, scaleTime } from "d3-scale";
import { line } from "d3-shape";
import { extent } from "d3-array";
import { timeParse } from "d3-time-format";
import { select } from "d3-selection";
import { axisBottom,axisLeft } from "d3-axis";

class TimelineGraph extends Component {
    constructor(props) {
        super(props);
    }

    // TODO: switcher for data type, tooltip hovering, 
    render() {
        const dataMin = 0;
        const dataMax = this.props.max;
        const width = this.props.size[0];
        const height = this.props.size[1];
        const margin = 20;
        
        // todo: time based scale if required
        // var parseTime = timeParse("%d-%b-%y");

        // CREATE SCALE FOR X-AXIS
        var scaleX = scaleLinear()
            .range([0, width - margin*2])
            .domain(extent(this.props.data, function(d) { return d.time; }));
        
        // CREATE SCALE FOR Y-AXIS
        var scaleY = scaleLinear()
            .range([height - margin*2, 0])
            .domain([dataMin, dataMax]);

        // GENERATE X-AXIS FOR BOTTOM
        const xAxis = axisBottom()
            .scale(scaleX)
            .ticks(this.props.data.length);
        
        // GENERATE Y-AXIS FOR LEFT SIDE        
        const yAxis = axisLeft()
            .scale(scaleY)
            .ticks(5);

        // CREATE SOME GRIDE LINES        
        const yAxisGrid = axisLeft()
            .scale(scaleY)
            .ticks(10)
            .tickSize(-width)
            .tickFormat("");
        
        // DRAW THE GRAPH LINE
        var getLine = line()
            .x(function(d) { return scaleX(d.time); })
            .y(function(d) { return scaleY(d.value); });

        // CREATE THE LIST OF DATA POINTS    
        const circlePoints = this.props.data.map(d => ({
            x: scaleX(d.time),
            y: scaleY(d.value),
        }));
        
        // TRANSLATE GRAPH BASED ON MARGINS
        const translateMargins = 'translate(' + margin + ',' + margin + ')';
        const translateAxisBottom = 'translate(' + margin + ',' + (height - margin) + ')';

        return (
            <div> 
                <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} className='single-bar'>
                    <g className="yAxisGrid" ref={node => select(node).call(yAxisGrid)} transform={translateMargins}/>
                    <path className="line" d={getLine(this.props.data)} transform={translateMargins} />
                    <g className="yAxis" ref={node => select(node).call(yAxis)} transform={translateMargins}/>
                    <g className="xAxis" ref={node => select(node).call(xAxis)} transform={translateAxisBottom}/>
                    <g className="scatter" transform={translateMargins}>
                        {circlePoints.map(circlePoint => (
                            <circle cx={circlePoint.x} cy={circlePoint.y} key={`${circlePoint.x},${circlePoint.y}`} r={3} />
                        ))}
                    </g>
                </svg>
            </div>
        );
    }
}

export default TimelineGraph;