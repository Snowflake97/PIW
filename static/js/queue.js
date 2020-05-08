var time = 200;
var minClientTime;
var maxClientTime

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function try_add_new_person() {

        time = time*1.1
        var client_time = getRandomInt(minClientTime, maxClientTime)
        var client = {name:"Klient", time: client_time};
        this.postMessage(client);
        setTimeout("try_add_new_person()", time);
}

this.addEventListener('message', function (e) {
    var times = e.data.split(".")
    minClientTime = times[0]
    maxClientTime = times[1]
    try_add_new_person()
}, false);