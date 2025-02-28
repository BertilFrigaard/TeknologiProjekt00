let player;
let children;

function setup() 
{
	createCanvas(1000, 1000);
    children = [];
    player = new Player(400,400,Math.PI*0.5,250);
}

function addChild() {
    speed = 50;
    direction = 0;
    startX = 0;
    startY = 0;

    randint = Math.floor(Math.random()*4)
    switch(randint) {
        case 0: //TOP
            startX = Math.random()*1000;
            startY = 0;
            direction = Math.PI;
            break
           
        case 1: //BOTTOM
            startX = Math.random()*1000;
            startY = 1000;
            direction = 0;
            break
            
        case 2: //LEFT
            startX = 0;
            startY = Math.random()*1000;
            direction = Math.PI*1.5;
            break
            
        case 3: //RIGHT
            startX = 1000;
            startY = Math.random()*1000;
            direction = Math.PI*0.5;
            break 
    }

    direction += Math.random()*Math.PI;
    children.push(new MovingObject(startX, startY, direction, speed))

}

function draw()
{
    //UPDATE
    //player.update(0.016)
    for(let i = 0; i < children.length; i++) {
        children[i].update(0.016)
    }

    //DRAW
    background(220,220,220)
    //player.draw()
    for(let i = 0; i < children.length; i++) {
        console.log(i)
        children[i].draw()
    }
}
