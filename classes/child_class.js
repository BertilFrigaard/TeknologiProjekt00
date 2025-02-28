class Child extends MovingObject {
    constructor(x, y, direction, speed) {
        super(x, y, direction, speed);
        this.image = IMAGE_Children[Math.floor(Math.random()*2)]
        this.alive = true;
        this.diameter = 80;
    }
    isAlive() {
        return this.alive;
    }
    update(deltaTime) {
        super.update(deltaTime);
        if(this.x > 1000 + this.diameter/2) {
            //Out of bonds RIGHT
            this.alive = false;
        }
        if(this.x < 0 - this.diameter/2) {
            //Out of bonds LEFT
            this.alive = false;
        }
        if(this.y > 1000 + this.diameter/2) {
            //Out of bonds BOTTOM
            this.alive = false;
        }
        if(this.y < 0 - this.diameter/2) {
            //Out of bonds TOP
            this.alive = false;
        }
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