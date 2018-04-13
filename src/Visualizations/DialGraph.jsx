// Framework
import React, { Component } from "react";
import styled from "styled-components";

// D3 imports
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select,selectAll } from "d3-selection";
import { selectionMulti } from "d3-selection-multi";
import { arc,pie } from "d3-shape";

class DialGraph extends Component {
    constructor(props) {
        super(props);
        this.createDialChart = this.createDialChart.bind(this);
    }

    componentDidMount() {
        this.createDialChart()
    }

    componentDidUpdate() {
        this.createDialChart()
    }


    createDialChart() {
        const node = this.node
        const dataMin = 0;
        const dataMax = this.props.max;
        const width = this.props.size[0];
        const height = this.props.size[1];
        const radius = Math.min(width, height) * 0.40;
        const donutWidth = radius * 0.20;

        var tau = (.75 * Math.PI);
        var getArc = arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius)
            .startAngle(-0.75 * Math.PI);
        
        var background = select(node).append("path")
            .datum({endAngle: tau})
            .attr("d", getArc)
            .style("stroke", "#000")
            .style("fill", "#FFF")            
            .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

        //todo: something is still kinda off with the tau calc
        var bar = select(node).append("path")
            .datum({endAngle: (this.props.data/dataMax)*tau})
            .attr("d", getArc)
            .style("fill", "#ddd")
            .style("stroke", "#000")            
            .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');
        
        var labelValue = select(node)
            .append("text")
            .attr('y', (height/2)+10)
            .attr('x', (width/2))
            .text(this.props.data)
            .attr("font-family", "sans-serif")
            .attr("font-size", "25px")
            .attr("text-anchor","middle")
            .attr("fill", "black");
        
        var labelMin = select(node)
            .append("text")
            .attr('y', height-20)
            .attr('x', (width*.15))
            .text(dataMin)
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("text-anchor","end")
            .attr("fill", "black");

        var labelMax = select(node)
            .append("text")
            .attr('y', height-20)
            .attr('x', (width*.85))
            .text(dataMax)
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("text-anchor","start")
            .attr("fill", "black");
            
    }

    render() {
        return (
            <div> 
                <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} className='dial-chart'></svg>
                <label>{this.props.valueName}</label>
            </div>
        );
    }
}

export default DialGraph;