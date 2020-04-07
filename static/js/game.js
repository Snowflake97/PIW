var width = document.body.clientWidth - 100
var height = document.documentElement.clientHeight - 100;

var obiekt = document.getElementById("obiekt");

var score = 0;
var block = false;

obiekt.style.left = "1px"
obiekt.style.top = "100px"

//boundries
// y >100 and y< height
// x>0 and x< width


myTime = 2000;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

function updatePoints() {
    document.getElementById("result").textContent = "Wynik: " + score
}

function nextPosition() {
    x = getRandomInt(0, width);
    y = getRandomInt(100, height);
    position = {x_pos: x, y_pos: y};
    return position;
}

function generateWrong() {
    rand = getRandomInt(0,100)
    return rand
}

function moveObject() {
    position = nextPosition()
    obiekt.style.top = position.y_pos + "px"
    obiekt.style.left = position.x_pos + "px"
    block = false
    rand = generateWrong()
    if(rand<30){
        obiekt.src = "{%"
    }
}

obiekt.onclick = function () {
    if (block == false) {
        block = true;
        score++;
        updatePoints()
    }
}


setTimeout(function run() {
    moveObject()
    setTimeout(run, myTime);
}, myTime);

