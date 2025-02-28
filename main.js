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
    //UPDATE
    player.update(0.016)

    //DRAW
    background(220,220,220)
    player.draw()
}
