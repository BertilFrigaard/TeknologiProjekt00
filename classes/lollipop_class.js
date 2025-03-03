class Lollipop {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.image = IMAGE_Others[2]
        this.alive = true;
        this.diameter = 80;
    }
    isAlive() {
        return this.alive;
    }
    draw() {
        push()
        translate(this.x, this.y);
        imageMode(CENTER);
        rotate(this.direction + Math.PI/2)
        image(this.image, 0, 0, 80, 80)
        pop()
    }
}