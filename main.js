let test

function setup() 
{
	createCanvas(1000, 1000);
    test = new Player(400,400,Math.PI*0.5,250);
}

function draw()
{
    //UPDATE
    test.update(0.016)
    test.changeDirection(Math.PI*0.016*0.5)

    //DRAW
    background(220,220,220)
    test.draw()
}
