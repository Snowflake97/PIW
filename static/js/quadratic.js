var a;
var b;
var c;
var delta;
var x1;
var x2;


function calc() {
    document.getElementById("results1").textContent = "";
    document.getElementById("results2").textContent = "";
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("results1").textContent = "Nie podano współczynników"

    } else {
        delta = (b * b) - (4 * a * c);
        if (delta > 0) {
            delta = Math.sqrt(delta)
            x1 = ((-1 * b) - delta) / (2 * a);
            x2 = ((-1 * b) + delta) / (2 * a);
            console.log(x1)
            document.getElementById("results1").textContent = "x1: " + x1;
            document.getElementById("results2").textContent = "x2: " + x2;
        } else if (delta == 0) {
            x1 = ((-1 * b)) / (2 * a);
            document.getElementById("results1").textContent = "x: " + x1;
        } else {
            document.getElementById("results1").textContent = "Delta ujemna, brak rozwiązań"
        }
    }

}

document.getElementById("calculate").addEventListener("click", calc);

