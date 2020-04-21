import React from "react";
import PropTypes from "prop-types";
import styles from "./SignalGraph.module.scss";
import * as d3 from "d3";

class SignalGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data.x.map((x, i) => ({
        x,
        value: this.props.data.y[i],
      })),

      yAxisAttr: "value",
      xAxisAttr: "x",
      width: window.innerWidth,
      height: 400,
    };
    this.chartRef = React.createRef();
    this.drawChart = this.drawChart.bind(this);
  }

  // DrawChart method
  drawChart() {
    let margin = { top: 20, right: 30, bottom: 40, left: 90 },
      width = this.state.width - margin.left - margin.right,
      height = this.state.height - margin.top - margin.bottom;

    // append svg object to body of the page
    let svg = d3
      .select(".SignalGraph")
      .style("background-color", "cornsilk")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add X axis
    let x = d3
      .scaleLinear()
      .domain([0, d3.max(this.props.data.x)])
      .range([0, width]);
    svg
      .append("g")
      .style("color", "black")
      .attr("transform", "translate(0," + height + ")")
      .attr("class", "axis x")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("color", "black")
      .attr("transform", "translate(2,0)")
      .style("text-anchor", "end");

    // add Y axis
    let y = d3
      .scaleLinear()
      .domain([d3.min(this.props.data.y), d3.max(this.props.data.y)])
      .range([height, 0]);
    svg.append("g").style("color", "black").call(d3.axisLeft(y));


    // Add the line
    svg
      .append("path")
      .datum(this.state.data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.x))
          .y((d) => y(d.value))
      );
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.data.x.map((x, i) => ({ x, value: props.data.y[i] })));
    return {
      data: props.data.x.map((x, i) => ({ x, value: props.data.y[i] })),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("new update");
    d3.select("svg").remove();
    this.drawChart();
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.drawChart();
  }

  render() {
    return <div className="SignalGraph"></div>;
  }
}

export default SignalGraph;
