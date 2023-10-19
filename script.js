console.log("hola bienvenido para comenzar el juego escribe start().")
let intro = "";
let Eleccionj1 = "";
let valorj1 ="";
let Comp = "";
let Puntosj1 = "";
let PuntosComp = "";
random()
function start() {
    intro = prompt("te sientes con suerte?, responde con si o no.","")
    if (intro == "si") {
        alert("buena suerte!")
        ultrapesadilla()
    }
    else if (intro == "no") {
        alert("ok!");
        standard()
    }
    else {alert("texto en blanco para reintentar vuelve a colocar start")}
}

function random () {
    Comp = Math.floor(Math.random() * 10 )
    if (Comp === 0) {
        Comp = 3
    }
    else if (Comp === 1 || Comp === 2) {
         for(let i = 0; i < 4;  i++) {
            Comp = i }
    }
    else if (Comp === 4 || Comp === 5){
        for(let i = 0; i < 8;  i++) {
            Comp = i }
        }
    
    else if (Comp ===7 || Comp === 8) {
        for(let i = 0; i < 12;  i++) {
            Comp = i }
        
    }

}

function standard() {
    
    random ();

    Eleccionj1 = prompt("haz tu eleccion, responde con piedra, papel o tijera.","")
    if (Eleccionj1 =="piedra") {
        valorj1 = 1;
    }
    else if (Eleccionj1 == "papel") {
        valorj1 = 2;
    }
    else if (Eleccionj1 == "papel") {
        valorj1 = 3;
    }
    else {
        alert("juego cancelado")
    }

}

function Duelo () {

}