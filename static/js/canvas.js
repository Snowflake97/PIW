var start_x, start_y, end_x, end_y;
var color = "#FF0000";

var canvas = document.getElementById('myCanvas');

var divHeight = document.getElementById('myCanvas').offsetHeight
var divWidth = document.getElementById('myCanvas').offsetWidth

canvas.setAttribute('width', divWidth);
canvas.setAttribute('height', divHeight);
var context = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();
var obj = "rectangle";
var fill = true;


function getMousePos(canvas, evt) {
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

canvas.addEventListener('mousedown', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    start_x = mousePos.x;
    start_y = mousePos.y;
}, false);

canvas.addEventListener('mouseup', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    end_x = mousePos.x;
    end_y = mousePos.y;
    draw();
}, false);

function getColor() {
    color = document.getElementById("favcolor").value
}

function ifFill() {
    fill = document.getElementById('fill').checked
}

function draw() {
    getColor();
    ifFill();
    context.fillStyle = color;
    if (obj === "circle") {
        context.beginPath();
        context.arc(start_x, start_y, 40, 0, 2 * Math.PI);
        context.stroke();
        context.closePath()
    } else if (obj === "rectangle") {
        context.beginPath();
        context.rect(start_x, start_y, end_x - start_x, end_y - start_y)
        context.stroke();
        context.closePath()
    }
    if (fill === true) {
        // context.fillStyle = color;
        context.fill();
    }
}

document.getElementById("circleBtn").addEventListener('click', function () {
    obj = "circle"
})
document.getElementById("rectangleBtn").addEventListener('click', function () {
    obj = "rectangle"
})
document.getElementById("clearBtn").addEventListener('click', function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
})

