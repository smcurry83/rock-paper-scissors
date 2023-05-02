
let computerChoice = "";
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

const consoleDisplay = document.getElementById("console");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 100) +1;
  if (random <= 33) {
    computerChoice = "Rock";
  } else if (random >= 66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissor";
  }
  computerChoice = computerChoice.toUpperCase();
  return computerChoice;
}

function getPlayerChoice() {
  document.addEventListener("DOMContentLoaded", function(event) {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorButton = document.getElementById("scissor");

    rockButton.addEventListener("click", function () {
      playerChoice = rockButton.value.toUpperCase();
      getComputerChoice();
      console.log("Computer chose: " + computerChoice);
      console.log("You chose: " + playerChoice);
      logMessage("Computer chose: " + computerChoice);
      logMessage("You chose: " + playerChoice);
      playRound(computerChoice, playerChoice);
    });
    
    paperButton.addEventListener("click", function() {
      playerChoice = paperButton.value.toUpperCase();
      getComputerChoice();
      console.log("Computer chose: " + computerChoice);
      console.log("You chose: " + playerChoice);
      logMessage("Computer chose: " + computerChoice);
      logMessage("You chose: " + playerChoice);
      playRound(computerChoice, playerChoice);
    });

    scissorButton.addEventListener("click", function () {
      playerChoice = scissorButton.value.toUpperCase();
      getComputerChoice();
      console.log("Computer chose: " + computerChoice);
      console.log("You chose: " + playerChoice);
      logMessage("Computer chose: " + computerChoice);
      logMessage("You chose: " + playerChoice);
      playRound(computerChoice, playerChoice);
    });
  });
  }

function logMessage(message) {
  const consoleDiv = document.getElementById("console");
  const p = document.createElement("p");
  p.textContent = message;
  consoleDiv.appendChild(p);
}

function playRound (computerChoice, playerChoice) {
  if ((computerChoice === 'PAPER') && (playerChoice === 'ROCK')) {
    console.log("You lose! Paper beats rock!");
    logMessage("You lose! Paper beats rock!");
    computerScore++;
  } else if ((computerChoice === 'ROCK') && (playerChoice === 'SCISSOR')) {
    console.log("You lose! Rock beats scissor!");
    logMessage("You lose! Rock beats scissor!");
    computerScore++;
  } else if ((computerChoice === 'SCISSOR') && (playerChoice === 'PAPER')) {
    console.log("You lose! Scissor beats paper!");
    logMessage("You lose! Scissor beats paper!");
    computerScore++;
  } else if ((computerChoice === 'ROCK') && (playerChoice === 'PAPER')) {
    console.log("You win! Paper beats rock!");
    logMessage("You win! Paper beats rock!");
    playerScore++;
  } else if ((computerChoice === 'SCISSOR') && (playerChoice === 'ROCK')) {
    console.log("You win! Rock beats scissor!");
    logMessage("You win! Rock beats scissor!");
    playerScore++;
  } else if ((computerChoice === 'PAPER') && (playerChoice === 'SCISSOR')) {
    console.log("You win! Scissor beats paper!");
    logMessage("You win! Scissor beats paper!");
    playerScore++;
  } else {
    console.log("It's a tie!");
    logMessage("It's a tie!");
  }
  console.log("The score is: Computer: " + computerScore + " - You: " + playerScore);
  //logMessage("The score is: Computer: " + computerScore + " - You: " + playerScore);
  playerScoreDisplay.textContent = "Player score: " + playerScore;
  computerScoreDisplay.textContent = "Computer score: " + computerScore;
}

function game () {

  console.log("Game started. First to 5 wins.");
  logMessage("Game started. First to 5 wins.");
  getPlayerChoice();

  /*while ((computerScore < 5) && (playerScore < 5)) {
    for (let i = 0; i < 5; i++) {
      getComputerChoice();
      console.log(computerChoice);
      getPlayerChoice(computerChoice);  
    }
    getComputerChoice();
    console.log(computerChoice);
    getPlayerChoice(computerChoice);
    
    playRound(computerChoice, playerChoice);
    console.log("The score is: Computer: " + computerScore + " - You: " + playerScore);
    if (computerScore === 5) {
      console.log("COMPUTER WINS!!!");
    } else if (playerScore === 5) {
      console.log("YOU WIN!!!");
    }
  } */
}

game();
