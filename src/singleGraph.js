import * as d3 from 'd3';
import { dataTotals as data } from './data.js'

// Setup project:
// https://code.likeagirl.io/how-to-set-up-d3-js-with-webpack-and-babel-7bd3f5e20df7
// Add basic d3 graph:
// https://d3-graph-gallery.com/graph/barplot_basic.html

// Add hover effects:
// https://medium.com/@kj_schmidt/show-data-on-mouse-over-with-d3-js-3bf598ff8fc2

// Show value on hover
// https://atdyer.github.io/d3-chart/examples/26.html

// set the dimensions and margins of the graph
const margin = {top: 60, right: 30, bottom: 120, left: 60},
    width = 460 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

const palettes = [["rgb(219, 219, 255)", "blue"], ["rgb(255, 219, 219)", "red"], ["pink", "purple"], ["yellow", "purple"], ["grey", "pink"]]

// append the svg object to the body of the page
const svg = d3.select("#singleGraph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const attachEvents = () => {
  console.log('attaching')
  svg.selectAll("rect")
         //Our new hover effects
  .on('mouseover', function (d, i) {
      d3.select(this).transition()
           .duration('50')
           .attr('opacity', '1');

      d3.select(this.parentNode).select('.textLabel').style("visibility", "visible");
  })
  .on('mouseout', function (d, i) {
      d3.select(this).transition()
           .duration('50')
           .attr('opacity', '.75');

      d3.select(this.parentNode).select('.textLabel').style("visibility", "hidden");
  })
}

const singleGraph = () => {
  const maxValue = Math.max(...data.map(d => d.Value))
  const roundedMaxValue = Math.round(maxValue / 100) * 100 + 100

  svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 0 - (margin.top - 30))
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("padding-bottom", "10px")
    .text("Total Sanctions by Country");

  // X axis
  const x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(d => d.Country))
    .padding(0.2);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .attr('font-weight', 'bold');

  var colors = d3.scaleLinear().domain([0, data.length - 1]).range(palettes[Math.floor(Math.random() * palettes.length)])

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, roundedMaxValue])
    .range([ height, 0]);

  svg.append("g")
    .call(d3.axisLeft(y))
    // calling axisRight appends the labels to the right hand side
    .attr("class", "y axis")
    .selectAll("text")
      .attr('font-weight', 'bold');

  // Append a group to append the rectangles and labels to to facilitate the hover events
  var bars = svg.selectAll("bar")
               .data(data)
               .enter().append("g")
               .attr("class", "barWithLabel");

  // Attach the labels
  bars.append("text")
    .attr("x", d => x(d.Country) + x.bandwidth() / 2 - (d.Value.toString().length * 3))
    .attr("y", d => y(d.Value) - 5)
    .attr("class", "textLabel")
    .style("font-size", "12px")
    .style("visibility", "hidden")
    .text(d => d.Value)

  // Attach the bars in the bar graph
  bars.append("rect")
      .attr("x", d => x(d.Country))
      .attr("y", d => y(0))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(0))
      .attr("fill", (d, i) => colors(i))
      .attr("stroke", "black")
      .attr("opacity", "0.75")

  // Animate the bars on page load
  svg.selectAll("rect")
    .transition()
    .duration(600)
    .attr("y", d => y(d.Value))
    .attr("height", d => height - y(d.Value))
    .delay((d,i) => i * 60)
    .end()
    .then(() => {
      // Add hover effects only once loading animation finishes
      svg.selectAll("rect")
      .on('mouseover', function (d, i) {
        d3.select(this).transition()
          .duration('50')
          .attr('opacity', '1');

        d3.select(this.parentNode).select('.textLabel').style("visibility", "visible");
      })
      .on('mouseout', function (d, i) {
        d3.select(this).transition()
          .duration('50')
          .attr('opacity', '.75');

        d3.select(this.parentNode).select('.textLabel').style("visibility", "hidden");
      })
    })
}

export default singleGraph;

// This chooses a color based on the value
// var colors = d3.scaleQuantize()
//   .domain([0, 900])
//   .range(["#5E4FA2", "#3288BD", "#66C2A5", "#ABDDA4", "#E6F598",
//   "#FFFFBF", "#FEE08B", "#FDAE61", "#F46D43", "#D53E4F", "#9E0142"]);