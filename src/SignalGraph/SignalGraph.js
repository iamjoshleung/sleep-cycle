import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignalGraph.module.scss';
import * as d3 from "d3";

class SignalGraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          { x: 0, value: -70 },
          { x: 1, value: -68 },
          { x: 2, value: -64 },
          { x: 3, value: -56 },
          { x: 4, value: -44 },
          { x: 5, value: -42 },
          { x: 6, value: -34 },
          { x: 7, value: -36 },
          { x: 8, value: -41 },
          { x: 9, value: -53 },
          { x: 10, value: -62 },
          { x: 11, value: -65 },
          { x: 12, value: -60 },
          { x: 13, value: -45 },
          { x: 14, value: -32 },
          { x: 15, value: -18 },
          { x: 16, value: -8 },
          { x: 17, value: -5 },
          { x: 18, value: -10 },
          { x: 19, value: -21 },
          { x: 20, value: -30 },
          { x: 21, value: -28 },
          { x: 22, value: -19 },
          { x: 23, value: -13 },
          { x: 24, value: -2 },
          { x: 25, value: 7 },
          { x: 26, value: 11 },
          { x: 27, value: 16 },
          { x: 28, value: 15 },
          { x: 29, value: 8 },
          { x: 30, value: 5 },
        ],
        yAxisAttr: "value",
        xAxisAttr: "x",
        width: window.innerWidth,               // old val of 1500 also looked good
        height: 400,
      }
      this.chartRef = React.createRef();
      this.drawChart = this.drawChart.bind(this);
    }

    // DrawChart method
    drawChart() {
      let margin = {top: 20, right: 30, bottom: 40, left: 90},
                  width = this.state.width - margin.left - margin.right,
                  height = this.state.height - margin.top - margin.bottom;

      // append svg object to body of the page
      let svg = d3.select(".SignalGraph")
                .style("background-color", 'cornsilk')
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");



      // add X axis
      let x = d3.scaleLinear()
              .domain([0, d3.max(this.state.data, function(d) {return d.x;})])
              .range([0, width]);
      svg.append("g")
            .style("color", 'black')
            .attr("transform", "translate(0," + height + ")")
            .attr('class','axis x')
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("color", 'black')
            .attr("transform", "translate(2,0)")
            .style("text-anchor", "end");


      // add Y axis
      let y = d3.scaleLinear()
              .domain([d3.min(this.state.data, function(d) {return d.value;}), d3.max(this.state.data, function(d) {return d.value;})])
              .range([height, 0])
      svg.append("g")
              .style("color", 'black')
              .call(d3.axisLeft(y))

      // Add the line
      svg.append("path")
          .datum(this.state.data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", d3.line()
              .x(d => x(d.x))
              .y(d => y(d.value)))

    }

    componentDidMount() {
      this.drawChart();
    }

      render() {
          return (
            <div className="SignalGraph">
            </div>
          )
    }
}

export default SignalGraph;
