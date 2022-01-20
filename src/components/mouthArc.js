import { arc } from "d3";

const mouthArc = arc()
  .innerRadius(90)
  .outerRadius(100)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

export default mouthArc;
