class MovingObject{
    constructor(x, y, direction, speed) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = speed;
        this.diameter = 30;
    }
    update(deltaTime) {
        this.x += deltaTime * Math.cos(this.direction) * this.speed;
        this.y += deltaTime * Math.sin(this.direction + Math.PI) * this.speed;
    }

    draw() {
        fill(255,150,150);
        circle(this.x, this.y, this.diameter);
    }
}
