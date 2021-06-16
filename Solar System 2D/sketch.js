planets = new Array();
suns = new Array();

function setup() {
  createCanvas(windowWidth, windowHeight);



  for (let i = 0; i < 10; i++) {
    planets.push(new Planet(random(-100, 100),
      random(-100, 100), random(20, 70), random(150, 200), random(80, 160)));

  }

  for (let i = 0; i < 2; i++) {
    suns.push(new Sun(random(-100, 100),
      random(-300, 300), random(150, 200), random(50, 80), random(10, 20)));
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(3);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);

  rect(100, 100, 10, 10);
  for (let j = 0; j < suns.length; j++) {
    suns[j].show(planets[0]);
    suns[0].col = color(0, 0, 255);

  }
  for (let i = 0; i < planets.length; i++) {

    planets[i].show(suns[0]);

  }
  console.log(planets[0].kinec);
}