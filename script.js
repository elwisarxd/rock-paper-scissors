let eleccion = "hola";
let Pointsj1 = 0;
let Numero =  "hola";
let Pointscpu = 0;
let i = 0;
let inicio =prompt("Start just press ok","start")
if(inicio =="start"){
  for(;i<6;i++) {
    playRound()
}
}
if(i === 6) {
  let winner = "";
  if(Pointsj1 > Pointscpu) {
    winner = "PLAYER 1 WINS"
  }
  else {
    winner ="COMPUTER WINS GOOD LUCK FOR THE NEXT ONE"
  }
  alert(winner)
  alert(`the score was ${Pointsj1} at your favor and the computer got ${Pointscpu}`)
}




function playRound(player = eleccion , computer = Numero) {  
  
  if(player && computer ==="hola" ){
    calculo();
    
  } 
  else {
    if(player === 1 && computer ===1){
      alert("DRAW. ROCK CAN'T DAMAGE ROCK!")
      i--
    }
    else if(player === 2 && computer ===1){
      alert("WIN. PAPER BEAT  ROCK!")
      Pointsj1++
    }
    else if(player === 3 && computer ===1){
      alert("Lose. SCISSORS CAN'T BEAT ROCK!")
      Pointscpu++
    }


    else if(player === 1 && computer ===2){
      alert("Lose. ROCK CAN'T BEAT  PAPER!")
      Pointscpu++
    }
    else if(player === 2 && computer ===2){
      alert("DRAW. PAPER CAN'T DAMAGE  PAPER!")
      i--
    }
    else if(player === 3 && computer ===2){
      alert("WIN. SCISSORS BEAT  PAPER!")
      Pointsj1++
    }


    else if(player === 1 && computer ===3){
      alert("WIN. ROCK BEAT  SCISSORS!")
      Pointsj1++
    }
    else if(player === 2 && computer ===3){
      alert("Lose. PAPER CAN'T BEAT SCISSORS!")
      Pointscpu++
    }
    else if(player === 3 && computer ===3){
      alert("DRAW. SCISSORS CAN'T DAMAGE SCISSORS!")
      i--
    }
      calculo()}
}
 
  function calculo() {
    getplayerselection();
    GetComputerChoice();
  }
  function GetComputerChoice(Min = 1 , Max = 4 ) { 
    let diferencia = Max - Min 
     Numero= Math.floor(Math.random() * diferencia)
    Numero = Numero + Min;
    return Numero   
  }

  function getplayerselection() {
    eleccion = prompt("choose between Rock,Paper or Scissors","")
    let real = eleccion.toLowerCase();

    if (real =="rock"){
        eleccion = 1;
      
        return eleccion
    }
    else if(real == "paper") {
        eleccion = 2;
        return eleccion
    }
    else if(real == "scissors") {
        eleccion = 3;
        return eleccion
    }
    
    else if (real =="") {
      alert("TYPE SOMETHING!")
      getplayerselection()
    }
  
  } 
  




