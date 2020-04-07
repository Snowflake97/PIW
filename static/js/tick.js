var tds = document.querySelectorAll("td");
var last = "X"

function tdClick(){
    if(last ==="O"){
        this.textContent = "X"
        last = "X"
    }
    else if(last ==="X"){
        this.textContent = "O"
        last = "O"
    }
}

for (var i = 0; i < tds.length; i++) {
    tds[i].addEventListener("click", tdClick)
}

var buts = document.querySelector("#but")

buts.addEventListener("click", function () {
    for (var i = 0; i < tds.length; i++) {
        tds[i].textContent = ""
    }
})

