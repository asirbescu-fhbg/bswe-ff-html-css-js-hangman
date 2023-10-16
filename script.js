const rateBox = document.querySelector(".rateBox");
const rateTextfeld = document.querySelector(".rateTextfeld");
let loesung = rateTextfeld;
const rateEingabeBtn = document.querySelector(".rateEingabeBtn");

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
    erstelleBtns();
}

function erstelleBtns(){
    let btns = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    for (let i = 0; i < btns.length; i++) {
        document.getElementById("buchstabenBtns").innerHTML +=  
        "<button id=\"" + btns[i] + "\" " + 
        "onClick=\"vorschlagen(\'" + btns[i] + "\')\">"  + btns[i] + "</button>";
    }
}

function vorschlagen(buchstabe) {
    document.getElementById(buchstabe).disabled = true;
    if (loesung.includes(buchstabe)) {
        richtigErraten(buchstabe);
    } else {
        falschErraten();
    }
}

function richtigErraten(buchstabe) {
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
        console.log("yes");
    }
}

function falschErraten() {
    document.querySelector(".svg").style.display = "inline";
}


rateEingabeBtn.addEventListener("click", wortEingegeben);

