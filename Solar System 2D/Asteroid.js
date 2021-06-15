// an Astro that does not explicitly revolve around anything and can be destroyed by everything except moons
class Asteroid extends Astro {
    constructor(x, y, r, g, b) {
        super(x, y, r, g, b);
        this.size = random(2, 6);
        this.type = "ast";
    }
}