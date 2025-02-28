class Player extends MovingObject
{
    draw(){
        fill('Blue')
        circle(this.x,this.y,50)
    } 
    changeDirection(change) {
        if(keyIsDown(39)){
        this.direction += Math.sqrt((this.speed*change)**2+(this.speed)**2)
        }
        if(keyIsDown(37)){
            this.direction -= Math.sqrt((this.speed*change)**2+(this.speed)**2)
        }
    }
}