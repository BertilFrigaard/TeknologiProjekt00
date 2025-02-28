let FONT_PressStart2P;

let player;
let children;

let time;
let countdown;

function preload() {
    FONT_PressStart2P = loadFont("/assets/PressStart2P-Regular.ttf");
}

function setup() {
	createCanvas(1000, 1000);
    children = [];
    player = new Player(400,400,Math.PI*0.5,1000);
    time = 0;
    countdown = 20;
}

function getScore() {
    return time*100
}

function drawUI() {
    textFont(FONT_PressStart2P);
    textSize(25)
    fill("red")
    text("SCORE: " + Math.floor(getScore()/10)*10, 10, 45)
    text("BOOM:  "+ Math.round(countdown), 10, 80)
}

function draw() {
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
    updateLevel(time)

    time += deltaTime
    countdown -= deltaTime

    //DRAW
    background(220,220,220)
    player.draw(deltaTime)
    for(let i = 0; i < children.length; i++) {
        children[i].draw()
    }
    drawUI()
}
