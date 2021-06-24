// backed up in two different computers
everything = new Array();
planets = new Array();
suns = new Array();
let spacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);



  for (let i = 0; i < 1; i++) {
    planets.push(new Planet(random(width / 2 - spacing, width / 2 + spacing),
      random(height / 2 - spacing, height / 2 + spacing), random(20, 70), random(150, 200), random(80, 160)));
    everything.push(planets[i]);
  }

  for (let i = 0; i < 1; i++) {
    suns.push(new Sun(random(width / 2 - spacing, width / 2 + spacing),
      random(height / 2 - spacing, height / 2 + spacing), random(150, 200), random(50, 80), random(10, 20)));
    everything.push(suns[i]);
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(3);
}

function draw() {
  background(220);
  //translate(width / 2, height / 2);


  if (everything[0].lines === true) {
    push();
    fill(0, 50);
    stroke(250, 50);
    textSize(30);
    textAlign(CENTER);
    text("press any key to hide", windowWidth / 2, windowHeight - 200);
    pop();
  }

  rect(100, 100, 10, 10);
  for (let j = 0; j < suns.length; j++) {
    suns[j].show(everything);
    suns[0].col = color(0, 0, 255);


  }
  for (let i = 0; i < planets.length; i++) {

    planets[i].show(everything);
    planets[0].col = color(255, 0, 255);
    planets[i].type = "planet" + i;
  }
  /*
  console.log(planets[0].dist);
  console.log(suns[0].orbit);
  */
  console.log(planets[0].absVel);

}

function keyPressed() {
  switch (keyCode) {
    case 113:
      for (let i = 0; i < everything.length; i++) {
        everything[i].lines = true;

      }

      break;

    case 116:
      for (let i = 0; i < everything.length; i++) {
        everything[i].life = 0;

      }

      break;

    default:
      for (let i = 0; i < everything.length; i++) {
        everything[i].lines = false;

      }
      break;
  }
}