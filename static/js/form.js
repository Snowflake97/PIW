phone_pattern = "^[+][4][8][\\d]{9}$";
// phone_pattern ="^[+][4][8]"
name_pattern = "[a-ząćęłńóśżźA-ZĄĆĘŁŃÓŚŹŻ]+$";
date_pattern = "^[0-3][0-9][.][0-1][0-9][.][0-9]{4}$";
login_pattern = "[a-ząćęłńóśżź]+$";


var error

function check() {
    var first_name = document.getElementById("imie").value;
    var last_name = document.getElementById("nazwisko").value;
    var phone = document.getElementById("telefon").value;
    var date = document.getElementById("data").value;
    var login = document.getElementById("login").value;
    var password = document.getElementById("haslo").value;
    var password_rep = document.getElementById("haslo_2").value;

    var results ="";

    //imie
    if (first_name.match(name_pattern)) {
        document.getElementById("imieHelp").textContent = "";
        results+="Imię: "+first_name+"<br>";

    } else {
        error = document.getElementById("imieHelp")
        error.style.color = "#FF0000";
        error.textContent = "Błędne imię"
    }

    // nazwisko
    if (last_name.match(name_pattern)) {
        document.getElementById("nazwiskoHelp").textContent = "";
        results+="Nazwisko: "+last_name+"<br>";
    } else {
        error = document.getElementById("nazwiskoHelp")
        error.style.color = "#FF0000";
        error.textContent = "Błędne nazwisko";
    }

    //telefon
    if (phone.match(phone_pattern)) {
        document.getElementById("telefonHelp").textContent = "";
        results+="Numer telefonu: "+phone+"<br>";
    } else {
        error = document.getElementById("telefonHelp")
        error.style.color = "#FF0000";
        error.textContent = "Błędny numer telefonu"
    }

    //data
    if (date.match(date_pattern)) {
        date_array= date.split(".");
        results+="Dzień: "+date_array[0]+"<br>";
        results+="Miesiąc: "+date_array[1]+"<br>";
        results+="Rok: "+date_array[2]+"<br>";
        document.getElementById("dataHelp").textContent = "";
    } else {
        error = document.getElementById("dataHelp")
        error.style.color = "#FF0000";
        error.textContent = "Błędna data urodzenia"
    }

    // login
    if (login.match(login_pattern)) {
        results+="Login: "+login+"<br>";
        document.getElementById("loginHelp").textContent = "";
    } else {
        error = document.getElementById("loginHelp")
        error.style.color = "#FF0000";
        error.textContent = "Błędny login"
    }

    if (password === password_rep && password!="") {
        results+="Hasła zgodne<br>";
        document.getElementById("haslo_2Help").textContent = "";
    } else {
        error = document.getElementById("haslo_2Help")
        error.style.color = "#FF0000";
        error.textContent = "Hasła nie są zgodne"
    }

    document.getElementById("results").style.color = "green";
    document.getElementById("results").innerHTML = results;
}

document.getElementById("myButton").addEventListener("click", check);

