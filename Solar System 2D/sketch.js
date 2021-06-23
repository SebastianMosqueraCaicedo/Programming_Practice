// backed up in two different computers
everything = new Array();
planets = new Array();
suns = new Array();

function setup() {
  createCanvas(windowWidth, windowHeight);



  for (let i = 0; i < 10; i++) {
    planets.push(new Planet(random(-100, 100),
      random(-100, 100), random(20, 70), random(150, 200), random(80, 160)));
    everything.push(planets[i]);
  }

  for (let i = 0; i < 2; i++) {
    suns.push(new Sun(random(-100, 100),
      random(-300, 300), random(150, 200), random(50, 80), random(10, 20)));
    everything.push(suns[i]);
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

    planets[i].show(everything);
    planets[0].col = color(0, 255, 255);
  }
  /*
  console.log(planets[0].dist);
  console.log(suns[0].orbit);
  */

}

function keyPressed() {
  switch (keyCode) {
    case 113:
      for (let i = 0; i < everything.length; i++) {
        everything[i].lines = true;
        console.log(suns[0].lines);
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