class BoomParticle extends Particle {
    constructor(x, y) {
        super(5)
        this.x = x
        this.y = y
        this.direction = Math.PI*2*Math.random()
        this.size = 200 + 200*Math.random()
    }
    draw(deltaTime) {
        super.draw(deltaTime)
        push()
        translate(this.x, this.y);
        imageMode(CENTER);
        rotate(this.direction)
        image(IMAGE_Others[1], 0, 0, this.size, this.size)
        pop()
    }
}