class Vector2D {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getA() {
        return this.a;
    }
    getB() {
        return this.b;
    }
    getLength() {
        return Math.sqrt(this.a**2+this.b**2)
    }
    getDirection() {
        return Math.acos(this.a/this.b);
    }
    addAB(a, b) {
        this.a += a;
        this.b += b;
    }
    add(vec) {
        this.a += vec.getA();
        this.b += vec.getB();
    }
    subAB(a, b) {
        this.a -= a;
        this.b -= b;
    }
    multiply(k) {
        this.a *= k;
        this.b *= k;
    }
}
class Player
{
    constructor(x, y, direction, acceleration) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.acceleration = acceleration;
        this.diameter = 60;

        this.velocity = new Vector2D(0,0);
        this.turnfactor = 3;
        this.turn = 0;
    }
    draw(){
        push()
        translate(this.x, this.y);
        imageMode(CENTER);
        rotate(this.direction + Math.PI/2) // + this.turn
        image(IMAGE_Others[3], 0, 0, 120, 120)
        pop()
    } 
    update(deltaTime) {
        this.move(deltaTime);
        //Stay within screen
        this.resolveOutOfBounds();
        //collision
        for(let i = 0; i < children.length; i++) {
            if(this.circleCollision(this, children[i])){
                particles.push(new SplatParticle(children[i].x, children[i].y))
                children[i].alive = false
                countdown -= 5
            }
        }
        for(let i = 0; i < lollipops.length; i++) {
            if(this.circleCollision(this, lollipops[i])){
                lollipops[i].alive = false
                countdown += 5
            }
        }

    }
    circleCollision(obj1, obj2){
        let dist = Math.sqrt((obj2.x - obj1.x)**2 + (obj2.y - obj1.y)**2);
        return dist < obj2.diameter/2 + obj1.diameter/2;
    }
    resolveOutOfBounds() {
        if(this.x > 1000 - this.diameter/2) {
            //Out of bonds RIGHT
            this.x = 1000 - this.diameter/2
        }
        if(this.x < 0 + this.diameter/2) {
            //Out of bonds LEFT
            this.x = 0 + this.diameter/2
        }
        if(this.y > 1000 - this.diameter/2) {
            //Out of bonds BOTTOM
            this.y = 1000 - this.diameter/2;
        }
        if(this.y < 0 + this.diameter/2) {
            //Out of bonds TOP
            this.y = 0 + this.diameter/2
        }
    }
    move(deltaTime) {

        if(keyIsDown(39)){  //RIGHT
            this.direction += this.turnfactor * deltaTime;
        } else if(keyIsDown(37)){ //LEFT
            this.direction += -this.turnfactor * deltaTime;
        }

        if(keyIsDown(38)){  //RIGHT
            this.accelerateV = new Vector2D(Math.cos(this.direction + this.turn) * this.acceleration * deltaTime, Math.sin(this.direction + this.turn) * this.acceleration * deltaTime)
            this.velocity.add(this.accelerateV)
        }

        if(this.velocity.getLength() > 0) {
            this.velocity.multiply(0.965)
        }
        this.x += this.velocity.getA() * deltaTime;
        this.y += this.velocity.getB() * deltaTime;
    }
}