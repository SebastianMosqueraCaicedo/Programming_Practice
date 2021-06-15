// an Astro who is larger in size than all of the other Astros, which revolve around it and are destroyed by coming into contact with it 
class Sun extends Astro {
    constructor(x, y, r, g, b) {
        super(x, y, r, g, b);
        this.size = random(50, 80);
        this.rot = 5;
        this.type = "sun";
    }

    show() {
        if (this.life != 0) {
            // only allows rotations depending on the "gravity field"
            this.dens = this.size * this.rot;
            noStroke()
            fill(this.col);
            ellipse(this.x, this.y, this.size, this.size);
        }
    }

    revolve() {

    }
}