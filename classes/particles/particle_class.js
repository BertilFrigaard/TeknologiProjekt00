class Particle {
    constructor(lifespan){
        this.countdown = lifespan
        this.alive = true
    }
    draw(deltaTime) {
        if(!this.alive) return
        this.countdown -= deltaTime
        if(this.countdown < 0) {
            this.alive = false
            return
        }
    }
} 