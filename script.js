function computerPlay() {
  let myArray = ["rock", "paper", "scissors"];
  return myArray[Math.floor(Math.random() * myArray.length)];
}
/*
function playerSelection() {
  let check = 1;
  while (check == 1) {
    let playerChoose = prompt("Choose your action: ", "rock");
    //alert(playerChoose.toLowerCase());
    if (
      playerChoose.toLowerCase() == "rock" ||
      playerChoose.toLowerCase() == "paper" ||
      playerChoose.toLowerCase() == "scissors"
    ) {
      return playerChoose.toLowerCase();
      check = 0;
      break;
    } else {
      alert("wrong move! Choose between: rock, stone or scissors");
    }
  }
}
*/

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Scissors" && computerSelection == "rock") {
    alert(
      "YOU LOSE HAHA! " +
        playerSelection +
        " destroyed by computer " +
        computerSelection
    );
    return "loose";
  } else if (playerSelection == "Rock" && computerSelection == "scissors") {
    alert(
      "WOW, you won! " +
        playerSelection +
        " beats computer " +
        computerSelection
    );
    return "won";
  } else if (playerSelection == "Paper" && computerSelection == "scissors") {
    alert(
      "YOU LOSE HAHA! " +
        playerSelection +
        " destroyed by computer " +
        computerSelection
    );
    return "loose";
  } else if (playerSelection == "Scissors" && computerSelection == "paper") {
    alert(
      "WOW, you won! " +
        playerSelection +
        " beats computer " +
        computerSelection
    );
    return "won";
  } else if (playerSelection == "Rock" && computerSelection == "paper") {
    alert(
      "YOU LOSE HAHA! " +
        playerSelection +
        " destroyed by computer " +
        computerSelection
    );
    return "loose";
  } else if (playerSelection == "Paper" && computerSelection == "rock") {
    alert(
      "WOW, you won! " +
        playerSelection +
        " beats computer " +
        computerSelection
    );
    return "won";
  } else {
    alert(
      "Draw game between: " +
        playerSelection +
        " and computer " +
        computerSelection
    );
    return "drawn";
  }
}
let playerScore = 0;
  let computerScore = 0;
function game() {
  /*
  let playerScore = 0;
  let computerScore = 0;
  let i = 0;
  let round;
*/
  ///////////////////////////////////////
  

  window.addEventListener("mousedown", function(e) {
    let round;

    const playerChoose = e.target.className;
    console.log(playerChoose);
    if (
      playerChoose !== "Paper" &&
      playerChoose !== "Rock" &&
      playerChoose !== "Scissors"
    )
      return;

    console.log("Round " + ": ");
    console.log((round = playRound(playerChoose, computerPlay())));
    if (round == "won") {
       
      document.getElementById("playerScore").innerHTML = ++playerScore;
      
    } else {
      document.getElementById("computerScore").innerHTML = ++computerScore;
      
    }
  });

  ///////////////////////////////////////////////////
}
/*
  //for (i = 0; i < 5; i++) {
    console.log("Round " + (i + 1) + ": ");
    console.log((round = playRound(playerSelection(), computerPlay())));
    if (round == "won") {
      playerScore++;
    } else {
      computerScore++;
    }
    i++;
  //}End of the FOR

  if (playerScore > computerScore) {
    console.log("YOU WON, CHAMPION!!");
  } else {
    console.log("tsc tsc tsc... More luck next time!");
  }
  console.log("Player: " + playerScore + " vs Computer: " + computerScore);
}
*/
//document.getElementsByClassName("handPaper").addEventListener("onclick", alert("foi papel"));
console.log(game());

// className: "handPaper"
