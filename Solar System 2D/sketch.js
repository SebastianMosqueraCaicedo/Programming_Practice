function setup() {
  createCanvas(windowWidth, windowHeight);
  examSun = new Sun(0, 0, 255, 50, 0);
  examPla = new Planet(100, 100, 20, 200, 50);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(4);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  examSun.show();
  examPla.show(examSun);
  console.log(examPla.ang);
}