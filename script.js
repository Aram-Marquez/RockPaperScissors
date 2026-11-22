//Code to play Rock, Paper, Scissors
const buttons = document.getElementById("buttons");
const humanCounter = document.getElementById("humanCounter");
const computerCounter = document.getElementById("computerCounter");
const whoWonLast = document.getElementById("whoWonLast");

let humanWins = 0;
let computerWins = 0;

buttons.addEventListener("click", (event) => {
  if (event.target.tagName == "UL") return;
  let winner;
  switch (event.target.closest("li").id) {
    case "rock":
      winner = getWinner("r", getComputerChoice());
      break;
    case "paper":
      winner = getWinner("p", getComputerChoice());
      break;
    case "scissors":
      winner = getWinner("s", getComputerChoice());
      break;
  }

  switch (winner) {
    case "humanWon":
      humanWins++;
      humanCounter.textContent = `You have ${humanWins} points`;
      whoWonLast.textContent = "You won last game!";
      break;
    case "computerWon":
      computerWins++;
      computerCounter.textContent = `Computer has ${computerWins} points`;
      whoWonLast.textContent = "Computer won last game!";
      break;
    case "tie":
      whoWonLast.textContent = "Last game was a tie!";
      break;
  }
});

function getComputerChoice() {
  let computerChoice;
  switch (Math.floor(Math.random() * 3)) {
    //Rock
    case 0:
      computerChoice = "r";
      return computerChoice;
    //Paper
    case 1:
      computerChoice = "p";
      return computerChoice;
    //Scissors
    case 2:
      computerChoice = "s";
      return computerChoice;
  }
}

function getWinner(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "tie";
  } else if (
    (humanChoice == "r" && computerChoice == "s") ||
    (humanChoice == "p" && computerChoice == "r") ||
    (humanChoice == "s" && computerChoice == "p")
  ) {
    return "humanWon";
  } else {
    return "computerWon";
  }
}
