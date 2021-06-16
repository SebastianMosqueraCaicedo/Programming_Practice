// father class of all objects. contains generalities like coordinates, color, velocity, etc
class Astro {
    constructor(x, y, r, g, b) {
        // position
        this.x = x;
        this.y = y;
        // color
        this.col = color(r, g, b);
        // readable speed
        this.speedR;
        // size
        this.size;
        // tag
        this.type = "Astro";
    }

    // general object is a strokeless circle

    show() {

        noStroke()
        fill(this.col);
        ellipse(this.x, this.y, this.size, this.size);


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

    getSpeed() {
        return this.speedR;
    }

    // gets coordinates every 3 frames

    getPastX() {
        if (frameCount % 3) {
            this.pastX.push(this.x);
        }
        if (this.pastX.length > 2) {
            this.pastX.shift();
        }
    }
    getPastY() {
        if (frameCount % 3) {
            this.pastY.push(this.y);
        }
        if (this.pastY.length > 2) {
            this.pastY.shift();
        }
    }

    keyPressed() {
        if (key === F5) {
            this.life = 0;
        }
    }

}