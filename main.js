let player;
let children = [];

function setup() 
{
	createCanvas(1000, 1000);
    player = new Player(400,400,Math.PI*0.5,250);
}

function addChild() {
    randint = Math.floor(Math.random()*4)
}

function draw()
{
    let deltaTime = 0.016;
    //UPDATE
    player.update(deltaTime)
    player.changeDirection(0.000001)

    //DRAW
    background(220,220,220)
    player.draw()
}