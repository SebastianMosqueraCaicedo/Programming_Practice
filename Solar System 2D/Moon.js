// an Astro that revolves around Planets and cant destroy anything
class Moon extends Astro {
    constructor(x, y, r, g, b) {
        super(x, y, r, g, b);
        this.size = random(8, 14);
        this.type = "moo";
    }
}