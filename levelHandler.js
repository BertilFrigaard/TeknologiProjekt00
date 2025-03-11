//Handles children and bonus object handling
function childrenOverTime(time) {
    return Math.floor(1.1**time+3)
}

function speedOverTime(time) {
    return Math.floor(time+100)
}

function updateLevel(updateTime) {
    let childrenAtTime = childrenOverTime(updateTime);
    while(children.length < childrenAtTime) {
        addChild(speedOverTime(time))
    }
    let lollipopsAtTime = 1;
    while(lollipops.length < lollipopsAtTime) {
        addLollipop()
    }
}

function addLollipop() {
    let lollipop = new Lollipop(Math.random()*800+100,Math.random()*800+100,Math.PI*(Math.random()*0.5+1));
    lollipops.push(lollipop);
}

function addChild(speed) {
    speed = speed;
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

