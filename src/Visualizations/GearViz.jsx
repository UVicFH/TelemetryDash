// Framework
import React, { Component } from "react";
// import styled from "styled-components";

class GearVisualization extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // CALCULATE GEAR VALUES
        var currentGear = this.props.data == 1 ? "N" : this.props.data;
        var middleLowerGear = this.props.data-1 == 1 ? "N" : (this.props.data-1 < 1 ? "" : this.props.data-1);
        var middleUpperGear = this.props.data+1 > 6 ? "" : this.props.data+1;
        var farthestLowerGear = this.props.data-2 == 1 ? "N" : (this.props.data-2 < 1 ? "" : this.props.data-2);;
        var farthestUpperGear = this.props.data+2 > 6 ? "" : this.props.data+2;
        
        return (
            <div> 
                <label>{this.props.valueName}</label>
                <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]} className='single-bar'>
                    <text className="gearTextLarge" x={this.props.size[0]/2} y={this.props.size[1]-2}>{currentGear}</text>
                    <text className="gearTextMedium" x={this.props.size[0]/2-25} y={this.props.size[1]-2}>{middleLowerGear}</text>
                    <text className="gearTextMedium" x={this.props.size[0]/2+25} y={this.props.size[1]-2}>{middleUpperGear}</text>
                    <text className="gearTextSmall" x={this.props.size[0]/2-45} y={this.props.size[1]-2}>{farthestLowerGear}</text>
                    <text className="gearTextSmall" x={this.props.size[0]/2+45} y={this.props.size[1]-2}>{farthestUpperGear}</text>
                </svg>
            </div>
        );
    }
}

export default GearVisualization;