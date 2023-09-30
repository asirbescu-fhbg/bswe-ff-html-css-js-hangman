const wortEingabe = document.querySelector(".wort");
const eingabe = document.querySelector(".eingabe");
const raten = document.getElementById("raten");
const vorschlag = document.querySelector(".vorschlag");
const vorschlageEingabe = document.querySelector(".enter");

var wort;

function wortEingegeben() {
    wort = document.querySelector(".wort").value.toLowerCase();
    wortEingabe.style.display = "none";
    eingabe.style.display = "none";
    vorschlag.style.display = "block";
    vorschlageEingabe.style.display = "block";
}

function vorschlagAbgegeben() {
    var buchstabe =  vorschlag.value.toLowerCase();
    for (let i = 0; i < wort.length; i++) {
        if (buchstabe == wort[i]) {
            alert("YES");
            break;
        }
    }
}

eingabe.addEventListener("click", wortEingegeben);
vorschlageEingabe.addEventListener("click", vorschlagAbgegeben)
