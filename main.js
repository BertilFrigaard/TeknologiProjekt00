let FONT_PressStart2P;
let IMAGE_Children;
let IMAGE_Others;

let player;
let children;
let particles;
let lollipops;

let running;
let time;
let countdown;

function preload() {
    FONT_PressStart2P = loadFont("/assets/PressStart2P-Regular.ttf");
    IMAGE_Children = [];
    IMAGE_Others = [];
    let toLoad = ["Child1.png", "Child2.png"]
    for(let i = 0; i < toLoad.length; i++) {
        let img = loadImage("/assets/" + toLoad[i]);
        IMAGE_Children.push(img);
    }
    
    toLoad = ["splat.png", "explosion.png", "Lollipop.png", "car.png", "morten.png"]
    for(let i = 0; i < toLoad.length; i++) {
        let img = loadImage("/assets/" + toLoad[i]);
        IMAGE_Others.push(img);
    }
}

function setup() {
	createCanvas(1000, 1000);
    children = [];
    particles = [];
    lollipops = [];
    player = new Player(400,400,Math.PI*0.5,2000);
    time = 0;
    countdown = 20;
    running = true;
}

function getScore() {
    return time*100
}

function drawUI() {
    textFont(FONT_PressStart2P);
    textAlign(LEFT)
    textSize(25)
    fill("red")
    text("SCORE: " + Math.floor(getScore()/10)*10, 10, 45)
    text("BOOM:  "+ Math.round(countdown), 10, 80)
}

function draw() {
    let deltaTime = 0.016;
    if(running) {
        //UPDATE
        time += deltaTime
        countdown -= deltaTime

        if(countdown <= 0) {
            particles = []
            running = false
            return
        }

        player.update(deltaTime)
        for(let i = children.length - 1; i > -1; i--) {
            if(children[i].isAlive()) {
                children[i].update(deltaTime);
            } else {
                children.splice(i, 1);
            }
        }
        updateLevel(time)

        //DRAW
        background(70, 147, 9)
        for(let i = particles.length - 1; i > -1; i--) {
            if(particles[i].alive) {
                particles[i].draw(deltaTime);
            } else {
                particles.splice(i, 1);
            }
        }
        player.draw(deltaTime)
        for(let i = 0; i < children.length; i++) {
            children[i].draw()
        }
        
        for(let i = lollipops.length - 1; i > -1; i--) {
            if(lollipops[i].isAlive()) {
                lollipops[i].draw();
            } else {
                lollipops.splice(i, 1);
            }
        }
        drawUI()
    } else {
        if(particles.length < 100) {
            particles.push(new BoomParticle(Math.random()*800-400+500,Math.random()*800-400+500))
        } else {   
            background(70, 147, 9)    
        }
        for(let i = 0; i < particles.length; i++) {
            particles[i].draw(0)
        }
        if(particles.length >= 100) {
            textFont(FONT_PressStart2P);
            textSize(75)
            textAlign(CENTER)
            fill("black")
            text("SCORE: " + Math.floor(getScore()/10)*10, 505, 505)
            fill("red")
            text("SCORE: " + Math.floor(getScore()/10)*10, 500, 500)
            
            image(IMAGE_Others[4], 0, 0, 200, 200)
            textAlign(LEFT)
            textSize(25)
            fill("black")
            text("DØ BØRN! DØØØ!", 200, 100)
        }
    }
}
