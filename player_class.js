class Player extends MovingObject
{
    constructor(x, y, direction, speed) {
        super(x, y, direction, speed)
        this.diameter = 50;
    }
    draw(){
        fill('Blue');
        circle(this.x,this.y,50);
    } 
    update(deltaTime) {
        super.update(deltaTime);
        this.changeDirection(deltaTime);
        this.resolveOutOfBounds();
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
    changeDirection(deltaTime) {
        let change = 5;
        if(keyIsDown(39)){
        this.direction += Math.sqrt((this.speed*change)**2+(this.speed)**2)*deltaTime;
        }
        if(keyIsDown(37)){
        this.direction -= Math.sqrt((this.speed*change)**2+(this.speed)**2)*deltaTime;
        }
    }
}