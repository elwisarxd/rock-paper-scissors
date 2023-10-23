console.log("hola bienvenido para comenzar el juego escribe start().")
let intro = "";
let Eleccionj1 = "";
let valorj1 ="";
let Comp = "";
let Puntosj1 = "";
let PuntosComp = "";
let Rondas = 0;

if(Rondas === 5) {
    marcador()
}

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
    else if (Comp === 4 || Comp === 5 || Comp === 6){
        for(let i = 0; i < 8;  i++) {
            Comp = i }
        }
    
    else if (Comp ===7 || Comp === 8 || Comp === 9) {
        for(let i = 0; i < 12;  i++) {
            Comp = i }
        
    }

}

function standard() {
    
    random ();

    Eleccionj1 = prompt("haz tu eleccion, responde con piedra, papel o tijera.","")
    if (Eleccionj1 =="piedra") {
        valorj1 = 1;
        Duelo()
    }
    else if (Eleccionj1 == "papel") {
        valorj1 = 2;
        Duelo()
    }
    else if (Eleccionj1 == "tijera") {
        valorj1 = 3;
        Duelo()
    }
    else {
        alert("juego cancelado")
    }

}

function Duelo () {
    if(valorj1 === 1 && Comp === 3 ) {
        console.log("Empate!")
        standard()
        Rondas++;
    }
    else if(valorj1 === 1 && Comp == 7) {
        console.log("perdiste!") 
        standard()
        Rondas++;
        
    } else if(valorj1 === 1 && Comp == 11) {
        console.log("Ganaste!")
        standard()
        Rondas++;
    } 

    if(valorj1 === 2 && Comp === 3 ) {
        console.log("Ganaste!")
        standard()
        Rondas++;
    }
    else if(valorj1 === 2 && Comp == 7) {
        console.log("Empate!") 
        standard()
        Rondas++;
        
    } else if(valorj1 === 2 && Comp == 11) {
        console.log("Perdiste!")
        standard()
        Rondas++;
    } 


    if(valorj1 === 3 && Comp === 3 ) {
        console.log("Perdiste!")
        standard()
        Rondas++;
    }

    else if(valorj1 === 3 && Comp == 7) {
        console.log("Ganaste!") 
        standard()
        Rondas++;
        
    } else if(valorj1 === 3 && Comp == 11) {
        console.log("Empate!")
        standard()
        Rondas++;
    } 

}