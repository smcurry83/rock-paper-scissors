
let computerChoice = "";
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const playAgainButton = document.getElementById("playAgain");
playAgainButton.disabled = true;

const consoleDisplay = document.getElementById("console");
const computerScoreDisplay = document.getElementById("computerScore");
const playerScoreDisplay = document.getElementById("playerScore");

const computerChoiceDisplay = document.getElementById("computerChoice");
const playerChoiceDisplay = document.getElementById("playerChoice");
const roundResultDisplay = document.getElementById("roundResult");
const gameResultDisplay = document.getElementById("gameResult");

playerScoreDisplay.textContent = "Player score: " + playerScore;
computerScoreDisplay.textContent = "Computer score: " + computerScore; 

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

    playerScoreDisplay.style.display = "block";
    computerChoiceDisplay.style.display = "block";
    playerChoiceDisplay.style.display = "block";
    computerScoreDisplay.style.display = "block";
    roundResultDisplay.style.display = "block";
    gameResultDisplay.style.display = "block";

    rockButton.addEventListener("click", function () {
      playerChoice = rockButton.value.toUpperCase();
      getComputerChoice();
      console.log("Computer chose: " + computerChoice);
      console.log("You chose: " + playerChoice);
      computerChoiceDisplay.textContent = "Computer chose: " + computerChoice;
      playerChoiceDisplay.textContent = "You chose: " + playerChoice;
      playRound(computerChoice, playerChoice);
    });
    
    paperButton.addEventListener("click", function() {
      playerChoice = paperButton.value.toUpperCase();
      getComputerChoice();
      console.log("Computer chose: " + computerChoice);
      console.log("You chose: " + playerChoice);
      computerChoiceDisplay.textContent = "Computer chose: " + computerChoice;
      playerChoiceDisplay.textContent = "You chose: " + playerChoice;
      playRound(computerChoice, playerChoice);
    });

    scissorButton.addEventListener("click", function () {
      playerChoice = scissorButton.value.toUpperCase();
      getComputerChoice();
      console.log("Computer chose: " + computerChoice);
      console.log("You chose: " + playerChoice);
      computerChoiceDisplay.textContent = "Computer chose: " + computerChoice;
      playerChoiceDisplay.textContent = "You chose: " + playerChoice;
      playRound(computerChoice, playerChoice);
    });

    playAgainButton.addEventListener("click", function () {
      playAgain();
    });
  });
  }

function playRound (computerChoice, playerChoice) {
  if ((computerChoice === 'PAPER') && (playerChoice === 'ROCK')) {
    console.log("You lose! Paper beats rock!");
    roundResultDisplay.textContent = "You lose! Paper beats rock!";
    computerScore++;
  } else if ((computerChoice === 'ROCK') && (playerChoice === 'SCISSOR')) {
    console.log("You lose! Rock beats scissor!");
    roundResultDisplay.textContent = "You lose! Rock beats scissor!";
    computerScore++;
  } else if ((computerChoice === 'SCISSOR') && (playerChoice === 'PAPER')) {
    console.log("You lose! Scissor beats paper!");
    roundResultDisplay.textContent = "You lose! Scissor beats paper!";
    computerScore++;
  } else if ((computerChoice === 'ROCK') && (playerChoice === 'PAPER')) {
    console.log("You win! Paper beats rock!");
    roundResultDisplay.textContent = "You win! Paper beats rock!";
    playerScore++;
  } else if ((computerChoice === 'SCISSOR') && (playerChoice === 'ROCK')) {
    console.log("You win! Rock beats scissor!");
    roundResultDisplay.textContent = "You win! Rock beats scissor!";
    playerScore++;
  } else if ((computerChoice === 'PAPER') && (playerChoice === 'SCISSOR')) {
    console.log("You win! Scissor beats paper!");
    roundResultDisplay.textContent = "You win! Scissor beats paper!";
    playerScore++;
  } else {
    console.log("It's a tie!");
    roundResultDisplay.textContent = "It's a tie!";
  }
  console.log("The score is: Computer: " + computerScore + " - You: " + playerScore);
  computerScoreDisplay.textContent = "Computer score: " + computerScore;
  playerScoreDisplay.textContent = "Player score: " + playerScore;
  endgame();
}

function game () {
  getPlayerChoice();
}

function endgame () { 
  if (computerScore === 5) {
    gameResultDisplay.textContent = "COMPUTER WINS, " + computerScore + " to " + playerScore + "!!!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    playAgainButton.disabled = false;
  } else if (playerScore === 5) {
    gameResultDisplay.textContent = "YOU WIN, " + playerScore + " to " + computerScore + "!!!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    playAgainButton.disabled = false;
  }
}

function playAgain() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorButton.disabled = false;
  playAgainButton.disabled = true;
  computerScore = 0;
  console.log("Computer score: " + computerScore);
  playerScore = 0;
  console.log("Player score: " + playerScore);
  playerScoreDisplay.textContent = "Player score: " + playerScore;
  computerScoreDisplay.textContent = "Computer score: " + computerScore;
  
  computerChoiceDisplay.textContent = "";
  playerChoiceDisplay.textContent = "";
  roundResultDisplay.textContent = "";
  gameResultDisplay.textContent = "";

  game();
}

game();
