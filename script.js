const rateBox = document.querySelector(".rateBox");
const rateTextfeld = document.querySelector(".rateTextfeld");
const beschreibungTextfeld = document.querySelector(".beschreibungTextfeld");
let loesung = rateTextfeld;
const rateEingabeBtn = document.querySelector(".rateEingabeBtn");
let errorZaehler = 0;

rateTextfeld.addEventListener("keyup", function(event) {
    event.preventDefault();
    rateTextfeld.value = rateTextfeld.value.toUpperCase();
});

function wortEingegeben() {
    rateBox.style.display = "none";
    loesung = rateTextfeld.value;
    rateTextfeld.value = "";
    document.getElementById("platzhalter").innerHTML += 
        loesung.replaceAll(/[A-Z]/g, "_");
    document.getElementById("beschreibung").innerHTML += "Tipp: " + beschreibungTextfeld.value;
    beschreibungTextfeld.value = "";
    erstelleBtns();
}

function erstelleBtns(){
    let btns = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    for (let i = 0; i < btns.length; i++) {
        document.getElementById("buchstabenBtns").innerHTML +=  
        "<button id=\"" + btns[i] + "\" " + "style=\"" + "font-size: 20px; margin-left: 4px; padding: 8px 12px;" + "\"" + "onClick=\"vorschlagen(\'" + btns[i] + "\')\">"  + btns[i] + "</button>";
    }
}

function vorschlagen(buchstabe) {
    document.getElementById(buchstabe).disabled = true;
    if (loesung.includes(buchstabe)) {
        richtigErraten(buchstabe);
    } else {
        errorZaehler++;
        falschErraten();
    }
}

function richtigErraten(buchstabe) {
    document.getElementById("score").innerHTML += "💞";
    let p;
    for (let i = 0; i < loesung.length; i++) {
        if (loesung[i] == buchstabe) {
            p = document.getElementById("platzhalter").innerHTML;
            document.getElementById("platzhalter").innerHTML = 
                p.substring(0, i) + buchstabe + p.substring(i + 1);
        }
    }
    p = document.getElementById("platzhalter").innerHTML;
    if (p == loesung) {
        document.getElementById("gewonnenText").style.display = "block";
        document.getElementById("buchstabenBtns").style.display = "none";
    }
}

function falschErraten() {
    document.getElementById("score").innerHTML += "💩";
    if (errorZaehler == 1) {
        document.getElementById("bogen").style.display = "block";
    } else if (errorZaehler == 2) {
        document.getElementById("mast").style.display = "block";
    } else if (errorZaehler == 3) {
        document.getElementById("balken").style.display = "block";
    } else if (errorZaehler == 4) {
        document.getElementById("strick").style.display = "block";
    } else {
        var maxerl = document.getElementsByClassName("maxerl");
        for(var i = 0; i < maxerl.length; i++){
            maxerl[i].style.display = "block";
        }
        document.getElementById("verlorenText").innerHTML += 
            "<p>Das Wort wäre " + loesung + " gewesen!<p>";
        document.getElementById("verlorenText").style.display = "block";
        document.getElementById("buchstabenBtns").style.display = "none";
    } 
}

rateEingabeBtn.addEventListener("click", wortEingegeben);