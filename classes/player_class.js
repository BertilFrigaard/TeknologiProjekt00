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
    getLength() {
        return Math.sqrt(this.a**2+this.b**2)
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

        this.speed = 0;
        this.pointing = direction;
    }
    draw(){
        push()
        translate(this.x, this.y);
        imageMode(CENTER);
        rotate(this.pointing + Math.PI/2)
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
        console.log(this.speed);
        this.x += deltaTime * Math.cos(this.direction) * this.speed;
        this.y += deltaTime * Math.sin(this.direction) * this.speed;
        if(keyIsDown(39)){  //RIGHT
            this.pointing += 0.1;
        }
        if(keyIsDown(37)){ //LEFT
            this.pointing -= 0.1;
        }
        if(this.direction != this.pointing) {
            let diff = this.direction - this.pointing;
            if(diff < 0.2 && diff > -0.2 && !keyIsDown(39) && !keyIsDown(37)) {
                console.log("set");
                this.direction = this.pointing;
            } else if(diff < 0) {
                this.direction += 0.05;
            } else if(diff > 0) {
                this.direction -= 0.05;
            }
        }
        if(keyIsDown(38)){ //UP
            this.speed += deltaTime*this.acceleration;
        } else {
            this.speed = Math.floor(this.speed*0.96);
        }
        if(this.speed > 750) {
            this.speed = 750;
        } else if(this.speed < -75) {
            this.speed = -75;
        }
    }
}