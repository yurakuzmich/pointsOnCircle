const inputX = document.getElementById("center-x");
const inputY = document.getElementById("center-y");
const inputR = document.getElementById("radius");
const inputStep = document.getElementById("step");
const inputFind = document.getElementById("find");
const output = document.getElementById("output");

inputFind.addEventListener("click", findCoords);

function findCoords(e) {
  let x = Number(inputX.value) || 0;
  let y = Number(inputY.value) || 0;
  let r = Number(inputR.value) || 1;
  let s = Number(inputStep.value) || 90;
  let coords = [];

  steps = (360 - (360 % s)) / s;

  for (let i = 0; i < steps; i++) {
    let xCircle = x + Math.round(1000 * r * Math.cos((Math.PI * (i * s)) / 180)) / 1000;
    let yCircle = y + Math.round(1000 * r * Math.sin((Math.PI * (i * s)) / 180)) / 1000;
    let pointOnCircle = {
        x: xCircle,
        y: yCircle
    };
    coords = [...coords, pointOnCircle];
    addToOutput(coords);
  }
}

function addToOutput(out) {
    let res = '';
    out.forEach(element => {
        res += `x: ${element.x}; y: ${element.y} <br>`
    });
    output.innerHTML = res;
}
