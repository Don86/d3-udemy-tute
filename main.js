
// Create canvas
// note that "select" also creates stuff
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 400);

// append stuff to `svg`
var circle = svg.append("circle")
.attr("cx", 100)
.attr("cy", 100)
.attr("r", 100)
.attr("fill", "blue")

var rect = svg.append("rect")
.attr("x", 250)
.attr("y", 80)
.attr("width", 200)
.attr("height", 100)
.attr("fill", "red")