

function setup() {
  createCanvas(windowWidth, windowHeight);
  examSun = new Sun(0, 0, 255, 50, 0);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(4);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  examSun.show();
}