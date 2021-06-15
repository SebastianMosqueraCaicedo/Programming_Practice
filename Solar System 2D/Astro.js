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
        // proportions
        this.w = 0;
        this.h = 0;
    }

    // general object is a strokeless circle

    show() {
        noStroke()
        fill(this.col);
        ellipse(this.x, this.y, this.w, this.h);
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