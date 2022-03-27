import * as d3 from 'd3';
import { dataPoints } from './data.js'

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
const svg = d3.select("#graphOverTime")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

let index = 1;

var colors = d3.scaleLinear().domain([0, dataPoints[0].data.length - 1]).range(palettes[Math.floor(Math.random() * palettes.length)])

const graphOverTime = () => {
  const maxValue = Math.max(...dataPoints[0].data.map(d => d.Value))
  const roundedMaxValue = Math.round(maxValue / 100) * 100 + 100

  svg.append("text")
    .attr("class", "titleText")
    .attr("x", (width / 2))
    .attr("y", 0 - (margin.top - 30))
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("padding-bottom", "10px")
    .text(`Sanctions imposed until ${dataPoints[0].date}`);

  // X axis
  const x = d3.scaleBand()
    .range([ 0, width ])
    .domain(dataPoints[0].data.map(d => d.Country))
    .padding(0.2)

  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .attr('font-weight', 'bold');

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([ height, 0]);

  svg.append("g")
    .call(d3.axisLeft(y))
    // calling axisRight appends the labels to the right hand side
    .attr("class", "y axis")
    .selectAll("text")
      .attr('font-weight', 'bold');

  // A function that create / update the plot for a given variable:
  function updateData() {
    const dataIndex = index % dataPoints.length
    const currentData = dataPoints[dataIndex]
    var u = svg.selectAll("rect")
      .data(currentData.data)

    u.enter()
      .append("rect")
      .merge(u)
      .transition()
      .duration(600)
        .attr("x", function(d) { return x(d.Country); })
        .attr("y", function(d) { return y(d.Value); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.Value); })
      .attr("fill", (d, i) => colors(i))

    // Attach the labels
    var u2 = svg.selectAll("text.textLabel")
                .data(currentData.data)

    u2.enter()
       .merge(u2)
       .transition()
       .duration(600)
       .attr("x", d => x(d.Country) + x.bandwidth() / 2 - (d.Value.toString().length * 3))
       .attr("y", d => y(d.Value) - 5)
       .attr("class", "textLabel")
       .style("font-size", "12px")
       .text(d => d.Value)

    svg.select('text').text(`Sanctions imposed until ${currentData.date}`)
    index++
  }

  // Append a group to append the rectangles and labels to to facilitate the hover events
  var bars = svg.selectAll("bar")
               .data(dataPoints[0].data)
               .enter().append("g")
               .attr("class", "barWithLabel");

  // Attach the bars in the bar graph
  bars.append("rect")
      .attr("x", d => x(d.Country))
      .attr("y", d => y(0))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(0))
      .attr("fill", (d, i) => colors(i))
      .attr("stroke", "black")
      .attr("opacity", "0.75")

  // Attach the labels
  bars.append("text")
    .attr("x", d => x(d.Country) + x.bandwidth() / 2 - (d.Value.toString().length * 3))
    .attr("y", d => y(d.Value) - 5)
    .attr("class", "textLabel")
    .style("font-size", "12px")
    .text(d => d.Value)

  // Animate the bars on page load
  svg.selectAll("rect")
    .transition()
    .duration(600)
    .attr("y", d => y(d.Value))
    .attr("height", d => height - y(d.Value))
    .delay((d,i) => i * 40)

  let calls = 1
  const intervalID = setInterval(() => {
    if (++calls == dataPoints.length) {
      window.clearInterval(intervalID);
    }

    updateData()
    }, 1800);  
}

export default graphOverTime;