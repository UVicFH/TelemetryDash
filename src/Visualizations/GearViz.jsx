// Framework
import React, { Component } from "react";
// import styled from "styled-components";

class GearVisualization extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // CALCULATE GEAR VALUES -- fix...
        var currentGear = this.props.data;
        var middleLowerGear = "";
        var middleUpperGear = "";
        var farthestLowerGear = "";
        var farthestUpperGear = "";

        if (currentGear == "N") {
            middleLowerGear = "1";
            middleUpperGear = "2";
            farthestLowerGear = "";
            farthestUpperGear = "3";
        } else if (currentGear == "1") {
            middleLowerGear = "";
            middleUpperGear = "N";
            farthestLowerGear = "";
            farthestUpperGear = "2";
        } else if (currentGear == "2") {
            middleLowerGear = "N";
            middleUpperGear = "3";
            farthestLowerGear = "1";
            farthestUpperGear = "4";
        } else {
            var currentValue = parseInt(currentGear);
            middleLowerGear = currentValue-1;
            middleUpperGear = currentValue < 6 ? currentValue+1 : "";
            farthestLowerGear = currentValue-2;
            farthestUpperGear = currentValue < 5 ? currentValue+2 : "";
        }
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