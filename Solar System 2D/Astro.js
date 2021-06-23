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
        this.pastV = [];
        // size // 39780000000000000000000000000
        this.size = 5;
        // mass
        this.mass = 1;
        // gravity constant
        this.g = 0;
        // gravity
        this.grav = 0;
        // gravitational acceleration
        this.gravA = 0;
        // tag
        this.type = "Astro";
        // absolute distance to obj // 149600000
        this.dist = 0;
        // diferences in x and y
        this.distX = 0;
        this.distY = 0;
        // direction relative from obj to this
        this.dirRelX = 0;
        this.dirRelY = 0;
        // direction coeficents of the movement vecor of this
        this.dirX = 0;
        this.dirY = 0;
        // life
        this.life = 1;
        // orbit size
        this.orbit = 10;
    }

    // general object is a strokeless circle

    show(a) {
        if (this.life > 0) {

            // calculation of the actual velocity measuring the increment in X and Y
            this.absVel = sqrt((sq(this.velX)) + (sq(this.velY)));
            // orbit size
            this.orbit = (2 * this.size) + this.grav;
            this.g = 6
            this.PastVel();
            this.relativePos(a);
            this.gravity(a);
            this.kinetic();
            // simple circle for now
            noStroke()
            fill(this.col);
            ellipse(this.x, this.y, this.size, this.size);
            stroke(0, 50);
            noFill();
            ellipse(this.x, this.y, this.orbit, this.orbit);
            // acceleration
            this.velX += (this.gravA * this.dirX);
            this.velY += (this.gravA * this.dirY);
            // actual movement
            this.x += this.velX;
            this.y += this.velY;

        }
    }


    // outputs new velocity every 3 frames

    PastVel() {
        if (frameCount % 3) {
            this.pastV.push(this.absVel);
        }
        if (this.pastV.length > 2) {
            this.pastV.shift();
        }
        if (this.pastV.length > 1) {
            this.speedR = this.pastV[1] - this.pastV[0];
        }
    }

    relativePos(c) {

        for (let i = 0; i < c.length; i++) {
            this.dist = (dist(this.x, this.y, c[i].x, c[i].y));
            if (this.dist < (c[i].orbit / 2)) {

                stroke(0, 50);
                line(this.x, this.y, c[i].x, c[i].y);
            }
        }



    }

    // calculates the total damage received, taking into consideration this kinetic and obj´s


    // calculates the gravitation acceleration

    gravity(b) {
        // maximum gravitational pull
        this.grav = this.g * this.mass;
        // gravitational acceleration
        // this.gravA = map

    }

    // calculates the mass and kinetic energy

    kinetic() {
        if (this.type === "sun") {
            this.mass = this.size;
        } else {
            this.mass = (this.size / 10);
        }
        this.kinec = ((this.mass) * (sq(this.absVel))) / 2;
    }

    // outputs relative positions based on the coordinates of obj and this

    damage(d) {

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

    getSpeed() {
        return this.speedR;
    }

    keyPressed() {
        if (key === F5) {
            this.life = 0;
            noCanvas();
        }
    }

}