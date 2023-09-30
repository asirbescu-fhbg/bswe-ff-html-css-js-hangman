const wortEingabe = document.querySelector(".wort");
const eingabe = document.querySelector(".eingabe");
const raten = document.getElementById("raten");

function getText(){
    var wort = document.querySelector(".wort").value;
    wortEingabe.style.display = "none";
    eingabe.style.display = "none";
    for (let i = 0; i < wort.length; i++) {
        raten.innerHTML += "<input type='text'>";
    }
}

eingabe.addEventListener("click", getText);