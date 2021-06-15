planets = new Array();
suns = new Array();

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 2; i++) {
    planets.push(new Planet(random(-300, 300),
      random(-200, 200), random(20, 70), random(150, 200), random(80, 160)));

  }

  for (let i = 0; i < 2; i++) {
    suns.push(new Sun(random(-300, 300),
      random(-300, 300), random(150, 200), random(50, 80), random(10, 20)));

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(4);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  for (let j = 0; j < suns.length; j++) {
    suns[j].show(null);

  }
  for (let i = 0; i < planets.length; i++) {
    for (let j = 0; j < suns.length; j++) {
      planets[i].show(suns);

    }
  }


}