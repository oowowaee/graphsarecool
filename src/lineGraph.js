import * as d3 from 'd3';
import { dataPoints } from './data.js'

// https://bl.ocks.org/d3noob/bdaf9d5abc467a4895fb115330be35b2
// https://bl.ocks.org/LemoNode/a9dc1a454fdc80ff2a738a9990935e9d

// set the dimensions and margins of the graph
const margin = {top: 60, right: 250, bottom: 120, left: 60},
    width = 860 - margin.left - margin.right,
    height = 480 - margin.top - margin.bottom;

const palettes = [["blue", "red"]]

// append the svg object to the body of the page
const svg = d3.select("#lineGraph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

let index = 1;

var colors = d3.scaleLinear().domain([0, dataPoints[0].data.length - 1]).range(palettes[Math.floor(Math.random() * palettes.length)])

const lineGraph = () => {
  const maxValue = Math.max(...dataPoints[0].data.map(d => d.Value))
  const roundedMaxValue = Math.round(maxValue / 100) * 100 + 100

  svg.append("text")
    .attr("class", "titleText")
    .attr("x", (width / 2))
    .attr("y", 0 - (margin.top - 30))
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("padding-bottom", "10px")
    .text('Total Russia Sanctions');

  // X axis
  const x = d3.scaleBand()
    .range([0, width])
    .domain(dataPoints.map(d => d.date))

  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .attr('font-weight', 'bold');

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, 900])
    .range([ height, 0]);

  svg.append("g")
    .call(d3.axisLeft(y))
    // calling axisRight appends the labels to the right hand side
    .attr("class", "y axis")
    .selectAll("text")
      .attr('font-weight', 'bold');

  const lines = dataPoints.map(d => {

  })

  const dataBySource = {}

  dataPoints.forEach(d => {
    d.data.forEach(object => {
      if (dataBySource[object.Country] !== undefined) {
        dataBySource[object.Country].push({ date: d.date, value: object.Value })
      } else {
        dataBySource[object.Country] = [{ date: d.date, value: object.Value }]
      }
    })
  })

  const keys = Object.keys(dataBySource)

  keys.forEach(key => {
    let group = svg.append('g')

    group.append("path")
        .datum(dataBySource[key])
          .attr("class", "line")
          .attr("fill", "none")
          .attr("stroke", colors(keys.indexOf(key)) )
          .attr("stroke-width", 2)
          .attr("opacity", '0.6')
          .attr("d", d3.line()
                       .curve(d3.curveBasis)
                       .x(d => x(d.date))
                       .y(d => y(d.value))
          )
      .on('mouseover', function (d, i) {
        d3.select(this.parentNode).select('.line')
          .attr('opacity', '1')
          .style('stroke-width', 3);

          d3.select(this.parentNode).select('.icon').style("opacity", "1");
          d3.select(this.parentNode).select('.labelText').style("font-weight", "bold");
      })
      .on('mouseout', function (d, i) {
        d3.select(this.parentNode).select('.line')
          .attr('opacity', '0.6')
          .style('stroke-width', 2);

          d3.select(this.parentNode).select('.icon').style("opacity", "0.75");
          d3.select(this.parentNode).select('.labelText').style("font-weight", "normal");
      })

    let labelGoup = group.append('g')
                        .on('mouseover', function (d, i) {
                          d3.select(this.parentNode).select('.line').style("opacity", "1").style('stroke-width', 3);
                          d3.select(this.parentNode).select('.icon').style("opacity", "1");
                          d3.select(this.parentNode).select('.labelText').style("font-weight", "bold");
                        })
                        .on('mouseout', function (d, i) {
                          d3.select(this.parentNode).select('.line').style("opacity", "0.6").style('stroke-width', 2);
                          d3.select(this.parentNode).select('.icon').style("opacity", "0.75");
                          d3.select(this.parentNode).select('.labelText').style("font-weight", "normal");
                        })

    labelGoup.append("rect")
         .attr("stroke", "black")
         .attr("class", "icon")
         .style("fill", colors(keys.indexOf(key)))
         .attr("x", width)
         .attr("y", y(keys.indexOf(key) * 100 + 130))
         .attr("height", 10)
         .attr("width", 10)
         .attr("opacity", "0.75")

    labelGoup.append("text")
        .attr("class", "labelText")
        .attr("x", width + 15)
        .attr("y", y(keys.indexOf(key) * 100 + 100))
        .attr("text-anchor", "start")
        .style("fill", "black")
        .text(key)
  })
}

export default lineGraph
