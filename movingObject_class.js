class MovingObject{
    constructor(x, y, direction, speed) {
        self.x = x;
        self.y = y;
        self.direction = direction;
        self.speed = speed;
    }
    changeDirection(change) {
        self.direction += change
    }
    update(deltaTime) {
        self.x += deltaTime * Math.cos(self.direction) * self.speed;
        self.y += deltaTime * Math.sin(self.direction + Math.PI) * self.speed;
    }
    draw() {
        fill(255,150,150);
        circle(x, y, 30);
    }
}
