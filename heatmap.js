const svg = d3.select("svg")

svg
  .attr("width", 800)
  .attr("height", data.length * 150)

const dataPoints = svg
  .selectAll("g.data-point")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "data-point")
  .attr("transform", (d, i) => { return `translate(0, ${i * 150})` })
