// an Astro that revolves around a Sun and has Moons revolving around it. It can destroy Asteroids
class Planet extends Astro {
    constructor(x, y, r, g, b) {
        super(x, y, r, g, b);
        this.size = random(18, 25);
        this.type = "pla";
    }
}