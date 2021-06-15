function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(4);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
}