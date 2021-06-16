// father class of all objects. contains generalities like coordinates, color, velocity, etc
class Astro {
    constructor(x, y, r, g, b) {
        // color
        this.col = color(r, g, b);
        // position
        this.x = x;
        this.y = y;
        // velocity
        this.absVel = 0;
        this.velX = 0;
        this.velY = 0;
        // kinetic
        this.kinec = 0;
        // readable speed
        this.speedR = 0;
        this.pastX = 0;
        this.pastY = 0;
        // size // 39780000000000000000000000000
        this.size = 5;
        // mass
        this.mass = 1;
        // gravity constant
        this.g = 0;
        // gravity
        this.grav = 0;
        // absolute gravity
        this.gravA = 0;
        // tag
        this.type = "Astro";
        // absolute distance to obj // 149600000
        this.dist = 0;
        // diferences in x and y
        this.distX = 0;
        this.distY = 0;
        // direction angle
        this.dir = 0;
        // direction coeficents
        this.dirX = 0;
        this.dirY = 0;
        // life
        this.life = 1;
    }

    // general object is a strokeless circle

    show(a) {
        if (this.life > 0) {

            this.absVel = sqrt((sq(this.velX)) + (sq(this.velY)));
            this.g = 6.674 * (pow(10, -11));
            this.relativePos(a);
            this.gravity(a);
            this.kinetic();
            noStroke()
            fill(this.col);
            ellipse(this.x, this.y, this.size, this.size);
            this.velX += (this.gravA * this.dirX) + ((this.size / 50) * this.dirX * this.velX);
            this.velY += (this.gravA * this.dirY) + ((this.size / 50) * this.dirY * this.velY);

        }
    }

    gravity(b) {

    }

    kinetic() {
        if (this.type === "sun") {
            this.mass = (this.size / 50) * ((3.978) * (pow(10, 29)));
        } else{
            this.mass = (this.size / 50) * ((3.978) * (pow(10, 24)));
        }
        this.kinec = ((this.mass) * (sq(this.absVel))) / 2;
    }

    relativePos(c) {
        this.dist = (dist(this.x, this.y, c.x, c.y)) * (1.496 * (pow(10, 11)));
        
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
            noCanvas();
        }
    }

}