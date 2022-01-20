import React from "react";

import * as d3 from "d3";

import { useD3 } from "./hooks/useD3";

function BarChart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      const margin = { top: 40, right: 30, bottom: 30, left: 40 };

      const x =
        // .scaleBand()

        // .domain(data.map((d) => d.year))

        // .rangeRound([margin.left, width - margin.right])

        // .padding(0.1);

        d3
          .scaleLinear()
          .domain([0, d3.max(data, (d) => d.x + 10)])
          .range([margin.left, width - margin.right]);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.y + 10)])
        .range([margin.top, height - margin.bottom]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${margin.top})`).call(d3.axisTop(x));

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y1));

      // .call((g) => g.select(".domain").remove())

      // .call((g) =>
      //   g

      //     .append("text")

      //     .attr("x", -margin.left)

      //     .attr("y", 10)

      //     .attr("fill", "currentColor")

      //     .attr("text-anchor", "start")

      //     .text(data.y1)
      // );

      svg.select(".x-axis").call(xAxis);

      svg.select(".y-axis").call(y1Axis);

      // svg

      //   .select(".plot-area")

      //   .attr("fill", "steelblue")

      //   .selectAll(".bar")

      //   .data(data)

      //   .join("rect")

      //   .attr("class", "bar")

      //   .attr("x", (d) => x(d.year))

      //   .attr("width", x.bandwidth())

      //   .attr("y", (d) => y1(d.sales))

      //   .attr("height", (d) => y1(0) - y1(d.sales))

      //   .on("click", (e) => {
      //     var co = d3.pointer(e);
      //     console.log(co);
      //     console.log("hello world");
      //   });

      svg
        .select(".plot-area")
        .selectAll(".circle")
        .data(data)
        .join("circle")
        .attr("class", "circle")
        // .attr(circleAttrs)
        .attr("cx", (d) => x(d.x))
        .attr("cy", (d) => y1(d.y))
        .attr("r", 6)

        .attr("fill", "red");

      svg.on("click", function (e) {
        let cos = d3.pointer(e);
        console.log(cos);

        var newData = {
          x: Math.round(x.invert(cos[0])),
          y: Math.round(y1.invert(cos[1])),
          // year: Math.round(x.invert(cos[0])), // Takes the pixel number to convert to number
          // sales: Math.round(y1.invert(cos[1])),
        };

        data.push(newData);

        console.log(data);

        svg
          .select(".plot-area")
          .selectAll(".circle")
          .data(data)
          .join("circle")
          .attr("class", "circle")
          .attr("cx", (d) => x(d.x))
          .attr("cy", (d) => y1(d.y))
          .attr("r", 6)
          .attr("fill", "red");
      });
    },

    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: window.innerHeight,

        width: window.innerWidth,

        marginRight: "0px",

        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />

      <g className="x-axis" />

      <g className="y-axis" />
    </svg>
  );
}

export default BarChart;
