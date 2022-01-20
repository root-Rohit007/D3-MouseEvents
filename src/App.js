import React from "react";

import BarChart from "./BarChart";

import "./App.css";

const data = [
  { x: 100, y: 110 },
  { x: 83, y: 43 },
  { x: 92, y: 28 },
  { x: 49, y: 74 },
  { x: 51, y: 10 },
  { x: 25, y: 98 },
  { x: 77, y: 30 },
  { x: 20, y: 83 },
  { x: 11, y: 63 },
  { x: 4, y: 55 },
  { x: 0, y: 0 },
  { x: 85, y: 100 },
  { x: 60, y: 40 },
  { x: 70, y: 80 },
  { x: 10, y: 20 },
  { x: 40, y: 50 },
  { x: 25, y: 31 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChart data={data} />
      </header>
    </div>
  );
}

export default App;

// import "./App.css";
// import { useState, useCallback, useEffect } from "react";
// import * as d3 from "d3";
// import { csv, arc, pie, scaleBand, scaleLinear, max } from "d3";

// //

// // import BackGroundCircle from "./components/backgroundCircle";
// // import mouthArc from "./components/mouthArc";

// const height = 480;
// const width = 960;
// const padding = 40;
// const cX = height / 2;
// const cY = width / 2;
// const margin = { top: 20, right: 20, bottom: 20, left: 200 };

// // const initialPosition = { x: width / 2, y: height / 2 };
// // const url =
// // "https://gist.githubusercontent.com/root-Rohit007/629d90ca0c479a44b533759f19fdf564/raw/3becf44d41a25aaa706aa5859224b6fe2c719c39/colors.csv";

// const url =
//   "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

// function App() {
//   // const [mousePosition, setMousePosition] = useState(initialPosition);

//   // const handleMouseMove = useCallback(
//   //   (event) => {
//   //     // console.log(event.clientX);
//   //     // console.log(event.clientY);

//   //     // ES6
//   //     const { clientX, clientY } = event;
//   //     setMousePosition({ x: clientX, y: clientY });
//   //     console.log("mouseMoved!");
//   //   },
//   //   [setMousePosition]
//   // );

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const row = (d) => {
//       d.Population = +d["2020"];
//       return d;
//     };

//     d3.csv(url, row).then((data) => {
//       setData(data.slice(0, 10));
//       // console.log("Fetching data");
//     });
//   }, []);

//   // console.log(data[0]);

//   // console.log(data);

//   // return (
//   // <>
//   //   <svg width={width} height={height}>
//   //     <g transform={`translate (${cX}, ${cY})`}>
//   //       <BackGroundCircle radius={height / 2 - padding} />
//   //       <circle cx={-60} cy={-100} r="20" />
//   //       <circle cx={60} cy={-100} r="20" />

//   //       <path d={mouthArc()} />
//   //     </g>
//   //   </svg>
//   // </>

//   // Mouse follower program
//   // <>
//   //   <svg height={height} width={width} onMouseMove={handleMouseMove}>
//   //     <circle cx={mousePosition.x} cy={mousePosition.y} r="40" />
//   //   </svg>
//   // </>
//   // );

//   // arc
//   // const pieArc = arc()
//   //   .innerRadius(0)
//   //   .outerRadius(width / 2);
//   // .startAngle(Math.PI / 2)
//   // .endAngle((Math.PI * 3) / 2);

//   if (!data) {
//     return <h1>Loading</h1>;
//   }

//   // data.map((d) => (
//   // color boxes

//   // <div
//   //   style={{
//   //     backgroundColor: d["RGB hex value"],
//   //     width: "100px",
//   //     height: "10px",
//   //   }}
//   // />
//   // ));

//   // pie chart

//   // const colorPie = pie().value(1);
//   // return (
//   //   <svg height={height} width={width}>
//   //     <g transform={`translate(${cX}, ${cY})`}>
//   //       {colorPie(data).map((d) => (
//   //         <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
//   //       ))}
//   //     </g>
//   //   </svg>
//   // <svg height={height} width={width}>
//   //   <g transform={`translate(${cX}, ${cY})`}>
//   //     {data.map((d, i) => (
//   //       <path
//   //         fill={d["RGB hex value"]}
//   //         d={pieArc({
//   //           startAngle: (i / data.length) * 2 * Math.PI,
//   //           endAngle: ((i + 1) / data.length) * 2 * Math.PI,
//   //         })}
//   //       />
//   //     ))}
//   //   </g>
//   // </svg>
//   // );

//   // bar chart
//   const innerHeight = height - margin.top - margin.bottom;
//   const innerWidth = width - margin.left - margin.right;

//   const xScale = scaleLinear()
//     .domain([0, max(data, (d) => d.Population)])
//     .range([0, innerWidth]);

//   const yScale = scaleBand()
//     .domain(data.map((d) => d.Country))
//     .range([0, innerHeight])
//     .paddingInner(0.3);

//     var w = window.innerWidth,
//     h = window.innerHeight;

//     var svg = d3.select("body").append("svg").attr({
//       width: w,
//       height: h
//     });

//     svg.on("click", function() {
//       console.log("you clicked mtlb");
//     //   var coords = d3.mouse(this);

//     //   // Normally we go from data to pixels, but here we're doing pixels to data
//     //   var newData= {
//     //     x: Math.round( xScale.invert(coords[0])),  // Takes the pixel number to convert to number
//     //     y: Math.round( yScale.invert(coords[1]))
//     //   };

//     //   console.log(newData);
//     })

//   // console.log(xScale.ticks());
//   // console.log(yScale.domain());

//   return (
//     <></>
//     // <svg width={width} height={height}>
//     //   <g
//     //     className="tick"
//     //     transform={`translate(${margin.left}, ${margin.top})`}
//     //   >
//     //     {xScale.ticks().map((tickValue) => (
//     //       <g transform={`translate(${xScale(tickValue)}, 0)`}>
//     //         <line x1={0} y1={0} x2={0} y2={innerHeight} />
//     //         <text style={{ textAnchor: "middle" }} dy=".71em" y={innerHeight}>
//     //           {tickValue}
//     //         </text>
//     //       </g>
//     //     ))}

//     //     {yScale.domain().map((val) => (
//     //       <text
//     //         x={-3}
//     //         y={yScale(val) + yScale.bandwidth() / 2}
//     //         style={{ textAnchor: "end" }}
//     //         dy=".32em"
//     //       >
//     //         {val}
//     //       </text>
//     //     ))}

//     //     {data.map((d) => (
//     //       <rect
//     //         key={d.Country}
//     //         y={yScale(d.Country)}
//     //         width={xScale(d.Population)}
//     //         height={yScale.bandwidth()}
//     //       />
//     //     ))}
//     //   </g>
//     // </svg>
//   );
// }

// export default App;
