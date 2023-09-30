const wortEingabe = document.querySelector(".wort");
const eingabe = document.querySelector(".eingabe");
const raten = document.getElementById("raten");
const vorschlag = document.querySelector(".vorschlag");
var wort;

function wortEingegeben() {
    wort = document.querySelector(".wort").value;
    wortEingabe.style.display = "none";
    eingabe.style.display = "none";
    vorschlag.style.display = "block";
    
}

eingabe.addEventListener("click", wortEingegeben);