var spaceShip = document.getElementById("animacja");
spaceShip.style.left = 1 + "px";
var i = 0;
var direction = "right";
var range = document.body.clientWidth - 70;

var myTime = 50;

function moveShip() {

    spaceShip = document.getElementById("animacja")
    if (parseInt(spaceShip.style.left) < range && direction === "right") {
        current_x = parseInt(spaceShip.style.left)
        current_x = current_x + 10 + "px";
        spaceShip.style.left = current_x;
    } else if (parseInt(spaceShip.style.left) > range && i != 185) {
        direction = "left"
        var rotation = "rotate(" + i + "deg)"
        spaceShip.style.transform = rotation;
        i = i + 5;
    } else {
        if (parseInt(spaceShip.style.left) > 1) {
            current_x = parseInt(spaceShip.style.left)
            current_x = current_x - 10 + "px";
            spaceShip.style.left = current_x;
        } else if (i < 365) {
            var rotation = "rotate(" + i + "deg)"
            spaceShip.style.transform = rotation;
            i = i + 5;
        } else {
            i = 0;
            direction = "right"
        }

    }
}

document.getElementById("faster").onclick = function () {
    if (myTime > 0) {
        myTime -= 10;
    } else {
        this.disabled = true;
    }

}

document.getElementById("slower").onclick = function () {
    myTime += 10;
    if (myTime > 0 && document.getElementById("faster").disabled == true) {
        document.getElementById("faster").disabled = false
    }
}

setTimeout(function run() {
    moveShip()
    setTimeout(run, myTime);
}, myTime);
