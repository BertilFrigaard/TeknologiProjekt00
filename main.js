let player;
let children;

function setup() 
{
	createCanvas(1000, 1000);
    children = [];
    player = new Player(400,400,Math.PI*0.5,250);
}

function addChild() {
    speed = 120;
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
    children.push(new Child(startX, startY, direction, speed))

}

function draw()
{
    let deltaTime = 0.016;
    //UPDATE
    player.update(deltaTime)
    for(let i = children.length - 1; i > -1; i--) {
        if(children[i].isAlive()) {
            children[i].update(deltaTime);
        } else {
            children.splice(i, 1);
        }
    }

    //DRAW
    background(220,220,220)
    player.draw(deltaTime)
    for(let i = 0; i < children.length; i++) {
        children[i].draw()
    }
}
