// const pi = 3.14;
// let radius = 3;
// let area = 0;
// area = radius * radius * pi;
// console.log("A1", area)
// radius = 4;
// area = radius * radius * pi;
// console.log("A2", area)

let radius = 3;
const PI = 3.14;
let area = 0;
function circleArea(radius) {
  const area = radius *radius * PI;
  return area
}

area = circleArea(radius);
console.log(area);
