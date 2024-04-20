let angle = 0;
let circleSize = 20;
let numCircles = 10;

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  for (let i = 0; i < numCircles; i++) {
    let x = cos(angle + i * TWO_PI / numCircles) * 100;
    let y = sin(angle + i * TWO_PI / numCircles) * 100;
    let diameterOffset = cos(angle + i * TWO_PI / numCircles) * 10;

    stroke(0);
    ellipse(x, y, circleSize + diameterOffset, circleSize + diameterOffset);
  }

  angle += 0.02;
}
