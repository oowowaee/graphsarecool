"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var d3 = _interopRequireWildcard(require("d3"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Setup project:
// https://code.likeagirl.io/how-to-set-up-d3-js-with-webpack-and-babel-7bd3f5e20df7
// Add basic d3 graph:
// https://d3-graph-gallery.com/graph/barplot_basic.html
// Add hover effects:
// https://medium.com/@kj_schmidt/show-data-on-mouse-over-with-d3-js-3bf598ff8fc2
// set the dimensions and margins of the graph
var margin = {
  top: 60,
  right: 30,
  bottom: 120,
  left: 60
},
    width = 460 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom; // append the svg object to the body of the page

var svg = d3.select("#my_dataviz").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(".concat(margin.left, ",").concat(margin.top, ")")); // Parse the Data

d3.csv("./data.csv").then(function (data) {
  var maxValue = Math.max.apply(Math, _toConsumableArray(data.map(function (d) {
    return d.Value;
  })));
  var roundedMaxValue = Math.round(maxValue / 100) * 100 + 100;
  svg.append("text").attr("x", width / 2).attr("y", 0 - (margin.top - 30)).attr("text-anchor", "middle").style("font-size", "18px").style("text-decoration", "underline").style("padding-bottom", "10px").text("Total Sanctions by Country"); // X axis

  var x = d3.scaleBand().range([0, width]).domain(data.map(function (d) {
    return d.Country;
  })).padding(0.2);
  svg.append("g").attr("transform", "translate(0, ".concat(height, ")")).call(d3.axisBottom(x)).selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('font-weight', 'bold');
  var colors = d3.scaleLinear().domain([0, data.length - 1]).range(["rgb(219, 219, 255)", "blue"]); // Add Y axis

  var y = d3.scaleLinear().domain([0, roundedMaxValue]).range([height, 0]);
  svg.append("g").call(d3.axisLeft(y)) // calling axisRight appends the labels to the right hand side
  .attr("class", "y axis").selectAll("text").attr('font-weight', 'bold'); // Bars

  svg.selectAll("bar").data(data).join("rect").attr("x", function (d) {
    return x(d.Country);
  }).attr("y", function (d) {
    return y(0);
  }).attr("width", x.bandwidth()).attr("height", function (d) {
    return height - y(0);
  }).attr("fill", function (d, i) {
    return colors(i);
  }).attr("stroke", "black").attr("opacity", "0.75") //Our new hover effects
  .on('mouseover', function (d, i) {
    d3.select(this).transition().duration('50').attr('opacity', '1');
  }).on('mouseout', function (d, i) {
    d3.select(this).transition().duration('50').attr('opacity', '.75');
  }); // Animation

  svg.selectAll("rect").transition().duration(800).attr("y", function (d) {
    return y(d.Value);
  }).attr("height", function (d) {
    return height - y(d.Value);
  }).delay(function (d, i) {
    return i * 100;
  });
}); // This chooses a color based on the value
// var colors = d3.scaleQuantize()
//   .domain([0, 900])
//   .range(["#5E4FA2", "#3288BD", "#66C2A5", "#ABDDA4", "#E6F598",
//   "#FFFFBF", "#FEE08B", "#FDAE61", "#F46D43", "#D53E4F", "#9E0142"]);