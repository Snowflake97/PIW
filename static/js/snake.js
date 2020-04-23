var canvas = document.getElementById('myCanvas');

var divHeight = document.getElementById('myCanvas').offsetHeight
var divWidth = document.getElementById('myCanvas').offsetWidth

canvas.setAttribute('width', divWidth);
canvas.setAttribute('height', divHeight);

var context = canvas.getContext('2d');

var data = context.getImageData(0, 0, divWidth, divHeight);

var map;

var last_colum = 0;
var last_row = 0;
var direction = null;
var game = false;
var game_end = false
var l;
var interval = null;
var food_spawned = null;
var map_size;
var size = 1;
var points_list = [];
var top_3 = []
var food = null

var player_name;
var score = 0;


function initMap() {
    map_size = divHeight / 10;
    map = new Array(map_size)
    i = 0;
    j = 0;
    for (var row = 0; row < divHeight; row = row + 10) {
        map[i] = new Array(map_size)
        j = 0
        for (var column = 0; column < divWidth; column = column + 10) {
            cell = {
                x: row,
                y: column
            }
            map[i][j] = cell
            j++;
        }
        i++;
    }
}

function drawRect(row, col, color) {

    cell = map[row][col]
    context.beginPath();
    context.rect(cell.x, cell.y, 10, 10)
    context.closePath()
    context.fillStyle = color;
    context.fill();

}

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            direction = "left";
            if (game == false) {
                document.getElementById("h2").innerText = "Gra w toku";
                game = true;
                play()
            }
            break;
        case 38:
            direction = "up";
            if (game == false) {
                document.getElementById("h2").innerText = "Gra w toku";
                game = true
                play()
            }
            break;
        case 39:
            direction = "right";
            if (game == false) {
                document.getElementById("h2").innerText = "Gra w toku";
                game = true
                play()
            }
            break;
        case 40:
            direction = "down";
            if (game == false) {
                document.getElementById("h2").innerText = "Gra w toku";
                game = true
                play()
            }
            break;
    }
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}


function start() {
    x = getRandomInt(0, map_size - 1);
    y = getRandomInt(0, map_size - 1);

    last_colum = y;
    last_row = x;

    drawRect(last_row, last_colum, "#0000FF")
    point = {x_pos: last_row, y_pos: last_colum}
    points_list.push(point);
    spawnFood();
    food_spawned = true

}


function spawnFood() {
    x = getRandomInt(0, map_size - 1);
    y = getRandomInt(0, map_size - 1);


    food = {x_pos: x, y_pos: y};
    p = context.getImageData(x * 10, y * 10, 1, 1).data
    if (p[0] == 0 && p[1] == 0 && p[2] == 0) {
        drawRect(x, y, "#FF0000")
    } else {
        spawnFood();
    }
}


function detectColision() {
    if (last_colum < 0 || last_colum >= map_size || last_row < 0 || last_row >= map_size) {
        return true;
    } else {
        var p = context.getImageData(last_row * 10, last_colum * 10, 1, 1).data
        if (p[0] == 0 && p[1] == 0 && p[2] == 255) {
            return true;
        } else {
            return false;
        }
    }
}

function eat() {
    if (food.x_pos == last_row && food.y_pos == last_colum) {
        size += 1
        score++;
        document.getElementById("score").innerText = "Wynik: " + score
        spawnFood()
    }

}

function go_next() {
    if (game_end == false) {


        // next move
        if (direction == "left") {
            last_row -= 1;
        } else if (direction == "right") {
            last_row += 1;
        } else if (direction == "up") {
            last_colum -= 1;
        } else if (direction == "down") {
            last_colum += 1;
        }

        //colision detector
        if (detectColision() == true) {
            game_end = true
            //    no colision
        } else {
            eat()
            point = {x_pos: last_row, y_pos: last_colum}
            points_list.unshift(point);
            if (points_list.length > size) {
                var point_to_delete = points_list.pop()
                del_x = point_to_delete.x_pos;
                del_y = point_to_delete.y_pos;
                drawRect(del_x, del_y, "#FFFFFF")
            }
            drawRect(last_row, last_colum, "#0000FF")
        }


        //    game over
    } else {
        overwriteResults();
        clearInterval(interval)
        document.getElementById("h2").innerText = "Koniec gry";
    }
}

player_name = prompt("Nazwa gracza: ")
document.getElementById("playerName").innerText = "Imię gracza: " + player_name
initMap();
readResults()

start()

function play() {
    interval = setInterval(go_next, 100);
}

function overwriteResults() {
    if (score > localStorage.getItem("top_1_score")) {
        localStorage.setItem("top_3_score", localStorage.getItem("top_2_score"))
        localStorage.setItem("top_3_name", localStorage.getItem("top_2_name"))
        localStorage.setItem("top_2_score", localStorage.getItem("top_1_score"))
        localStorage.setItem("top_2_name", localStorage.getItem("top_1_name"))
        localStorage.setItem("top_1_score", score)
        localStorage.setItem("top_1_name", player_name)

    } else if (score > localStorage.getItem("top_2_score")) {
        localStorage.setItem("top_3_score", localStorage.getItem("top_2_score"))
        localStorage.setItem("top_3_name", localStorage.getItem("top_2_name"))
        localStorage.setItem("top_2_score", score)
        localStorage.setItem("top_2_name", player_name)

    } else if (score > localStorage.getItem("top_3_score")) {
        localStorage.setItem("top_3_score", score)
        localStorage.setItem("top_3_name", player_name)
    }
}


function readResults() {
    if (localStorage.getItem("top_1_name")) {
        obj = {
            name: localStorage.getItem("top_1_name"),
            score: localStorage.getItem("top_1_score")
        }
        top_3.push(obj)
    }
    if (localStorage.getItem("top_2_name")) {
        obj = {
            name: localStorage.getItem("top_2_name"),
            score: localStorage.getItem("top_2_score")
        }
        top_3.push(obj)
    }

    if (localStorage.getItem("top_3_name")) {
        obj = {
            name: localStorage.getItem("top_3_name"),
            score: localStorage.getItem("top_3_score")
        }
        top_3.push(obj)
    }
}

document.getElementById("resetButton").addEventListener('click', function () {
    document.location.reload();
})