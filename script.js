//Code to play Rock, Paper, Scissors

//FUNCTION to run to start the game
function playGame() {
  //ASSIGN counters for points of each player
  let humanCounter = 0;
  let computerCounter = 0;
  //PRINT message to announce the start of the game
  console.log("Let's play!");
  //LOOP to play each of the 5 rounds
  for (i = 0; i < 5; i++) {
    //FUNCTION to play each round
    playRound();
    //PRINT messages to announce the current state of the game
    console.log(`Round ${i + 1}`);
    console.log(`You have: ${humanCounter} points`);
    console.log(`Computer has: ${computerCounter} points`);
  } //Once the 5 rounds finish...

  //IF the human player has more points than the computer...
  if (humanCounter > computerCounter) {
    //Print that the human won the game
    console.log("You won the game! :D");
  } // IF the computer has more points than the human...
  else if (computerCounter < humanCounter) {
    //PRINT that the human lost the game
    console.log("You lost the game :C");
  } else {
    //OTHERWISE PRINT that it's a tie
    console.log("it was a tie!");
  }
  //FUNCTION to play each round of the game
  function playRound() {
    //PROMPT the human for their choice
    humanChoice = prompt("Choose R,P,S to play!", "").toLowerCase();
    //GET the computer's choice
    let computerChoice = getComputerChoice();
    //GET winner from both choices of hand
    let winner = getWinner(humanChoice, computerChoice);

    //IF the winner was...
    switch (winner) {
      //the human...
      case "humanWon":
        //ADD a win to the human's counter
        humanCounter++;
        //PRINT that the human won the round
        console.log("You won the round!");
        break;
      //the computer...
      case "computerWon":
        //ADD a win to the computer's counter
        computerCounter++;
        //PRINT that the computer won the round
        console.log("You lost the round :C");
      //no one...
      case "tie":
        //PRINT that it was a tie
        console.log("the round is a tie!");
    }
  }
}
//FUNCTION to get the computer's choice of hand
function getComputerChoice() {
  //CREATE variable to get the computer's choice
  let computerChoice;
  //SWITCH between Rock, Paper, Scissors
  switch (getRandomInt(3)) {
    //Rock
    case 0:
      //ASSIGN Rock as the computer's choice
      computerChoice = "r";
      //Return the computer's choice
      return computerChoice;
      break;
    //Paper
    case 1:
      //ASSIGN Paper as the computer's choice
      computerChoice = "p";
      //Return the computer's choice
      return computerChoice;
      break;
    //Scissors
    case 2:
      //ASSIGN Scissors as the computer's choice
      computerChoice = "s";
      //Return the computer's choice
      return computerChoice;
      break;
  }
  //console.log(computerChoice);
}
//FUNCTION to get a 1,2 or 3 randomly
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//FUNCTION to decide the winner of each round
function getWinner(humanChoice, computerChoice) {
  //console.log(`human - ${humanChoice} computer - ${computerChoice}`);
  //IF both players choose the same...
  if (humanChoice == computerChoice) {
    //RETURN that it's a tie
    return "tie";
    //IF the human wins...
  } else if (
    (humanChoice == "r" && computerChoice == "s") ||
    (humanChoice == "p" && computerChoice == "r") ||
    (humanChoice == "s" && computerChoice == "p")
  ) {
    //console.log("humanreturnwon");
    //RETURN that the human won
    return "humanWon";
  }
  //If it wasn't a tie, and the human didn't win...
  else {
    //console.log("computerreturnwon");
    //RETURN that the computer won
    return "computerWon";
  }
}
