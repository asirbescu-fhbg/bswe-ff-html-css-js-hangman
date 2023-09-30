const wortEingabe = document.querySelector(".wort");
const eingabe = document.querySelector(".eingabe");

function getText(){
    var wort = document.querySelector(".wort").value;
    console.log(wort);
    wortEingabe.style.display = "none";
}

eingabe.addEventListener("click", getText);