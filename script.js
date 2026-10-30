//Program to play rock papers scissors

//PRINT "Want to play rock papers scissors? Just choose an
// option and we can start!"
// R -> Rock P -> Paper, S -> Scissors
//PROMPT the player for their option
//console.log(getHumanChoice());
//NORMALIZE answers to be all lowercase
//GENERATE random number
// ASSIGN one of three options
// R -> 0-0.32 P -> 0.33-0.65  S -> everything else
//PRINT what the computer chose
//SWITCH to choose between the 9 possible answers
//IF Rock vs Rock OR Paper vs Paper OR Scissors vs Scissors
//PRINT "It's a tie!"
//IF Rock vs Scissors OR Paper vs Rock OR Scissors vs Paper
//PRINT "You won!"
//ELSE
//PRINT "You lost :C"

function playGame() {
  let humanCounter = 0;
  let computerCounter = 0;
  console.log("Let's play!");
  for (i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    console.log(`Your have: ${humanCounter} points`);
    console.log(`Computer has: ${computerCounter} points`);
    playRound();
  }

  if (humanCounter > computerCounter) {
    console.log("You won the game! :D");
  } else if (computerCounter < humanCounter) {
    console.log("You lost the game :C");
  } else {
    console.log("it was a tie!");
  }
  function playRound() {
    humanChoice = prompt("Choose R,P,S to play!", "").toLowerCase();
    let computerChoice = getComputerChoice();
    let winner = getWinner(humanChoice, computerChoice);
    switch (winner) {
      case "humanWon":
        humanCounter++;
        console.log("You won the round!");
        break;
      case "computerWon":
        computerCounter++;
        console.log("You lost the round :C");
      case "tie":
        console.log("the round is a tie!");
    }
  }
}

function getComputerChoice() {
  let computerChoice;
  switch (getRandomInt(3)) {
    case 0:
      computerChoice = "r";
      return computerChoice;
      break;
    case 1:
      computerChoice = "p";
      return computerChoice;
      break;
    case 2:
      computerChoice = "s";
      return computerChoice;
      break;
  }
  //console.log(computerChoice);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getWinner(humanChoice, computerChoice) {
  console.log(`human - ${humanChoice} computer - ${computerChoice}`);
  if ((humanChoice == computerChoice)) {
    return "tie";
  } else if (
    ((humanChoice == "r") && (computerChoice == "s")) ||
    ((humanChoice == "p") && (computerChoice == "r")) ||
    ((humanChoice == "s") && (computerChoice == "p"))
  ) {
    console.log("humanreturnwon");

    return "humanWon";
  } else {
    console.log("computerreturnwon");
    return "computerWon";
  }
}
