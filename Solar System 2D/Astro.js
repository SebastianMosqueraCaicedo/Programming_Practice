// father class of all objects. contains generalities like coordinates, color, velocity, etc
class Astro {
    constructor(x, y, r, g, b) {
        // position
        this.x = x;
        this.y = y;
        // color
        this.col = color(r, g, b);
        // velocity
        this.vel = 0;
        // density (will be used for "gravity" simulation)
        this.dens = 0;
        // actual size
        this.size = random(10, 15);
        // type
        this.type = "Astro";
        // rotation speed
        this.rot = 1;
        // angle
        this.ang = 0
        // rotation counter
        this.countR = 0;
        // life amount, -1 is indestructable
        this.life = 1;
    }

    // general object is a strokeless circle

    show(obj) {
        if (this.life != 0) {
            this.revolve(obj);
            noStroke()
            fill(this.col);
            ellipse(this.x, this.y, this.size, this.size);
        }
    }

    // allows for rotation

    revolve(obj) {
        if (obj != null) {
            this.ang = 180 - (360 - (this.rot * this.countR));
            this.countR++;
            if (this.countR > 360) {
                this.countR = 0;
            }
            translate(obj.getX(), obj.getY());
            rotate(radians(this.ang));
        }
    }

    // getters

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getCol() {
        return this.col;
    }

    getDens() {
        return this.dens;
    }

    getVel() {
        return this.vel;
    }
}