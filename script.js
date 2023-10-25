function playRound(playerSelection, computerSelection) {
    
 

  }
   
  const playerSelection = getplayerselection();
  const computerSelection = GetComputerChoice();
    
  function GetComputerChoice(Min = 1 , Max = 4 ) { 
    let diferencia = Max - Min 
    let Numero= Math.floor(Math.random() * diferencia)
    Numero = Numero + Min;
    return Numero   
  }

  function getplayerselection() {
    let eleccion = prompt("choose between Rock,Paper or Scissors","")
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
    else (
        getplayerselection()
    )
  } 



