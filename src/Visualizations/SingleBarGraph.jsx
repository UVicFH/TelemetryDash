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
        this.createBarChart = this.createBarChart.bind(this);
    }

    componentDidMount() {
        this.createBarChart()
    }

    componentDidUpdate() {
        this.createBarChart()
    }

    // todo: move the control of the rectangle to React.  
    // add transition so bar moves smoothly
    // add scale
    // add type label
    createBarChart() {
        const node = this.node
        const dataMax = this.props.max
        const height = this.props.size[1];
        const width = this.props.size[0];
        const barHeight = this.props.size[1] - 15
        const barWidth = this.props.size[0] - 30
        const xScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, barWidth])
        
        // draw the outer border for the bar
        select(node)
            .append('rect')
                .attr('class', 'outerBar')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', xScale(dataMax))
                .attr('height', barHeight)

        // draw the bar
        select(node)
            .append('rect')
            .attr('class', 'innerBar')            
            .attr('y', 0)
            .attr('x', 0)
            .attr('width', xScale(this.props.data))
            .attr('height', barHeight)

        // display the current value
        select(node)
            .append('text')
            .attr('y', (barHeight/2)+7)
            .attr('x', barWidth + 5)
            .text(this.props.data)
            .attr("font-family", "sans-serif")
            .attr("font-size", "20px")
            .attr("fill", "black");

        // display the current value
        select(node)
            .append('text')
            .attr('y', (barHeight/2)+7)
            .attr('x', barWidth + 5)
            .text(this.props.data)
            .attr("font-family", "sans-serif")
            .attr("font-size", "20px")
            .attr("fill", "black");
            
        // display min scale
        select(node)
            .append('text')
            .attr('y', barHeight+10)
            .attr('x', 0)
            .text(0)
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("fill", "black");
        
        // display max scale
        select(node)
            .append('text')
            .attr('y', barHeight+10)
            .attr('x', barWidth-10)
            .text(dataMax)
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("fill", "black");
                
    }

    render() {
        console.log(this.props);
        return (
            <div> 
                <label>{this.props.valueName}</label>
                <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} className='single-bar'></svg>
            </div>
        );
    }
}

export default SingleBarGraph;