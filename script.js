
let computerChoice = "";
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 100) +1;
  //console.log(random);
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
  playerChoice = prompt("Enter Rock, Paper, or Scissor: ");
  playerChoice = playerChoice.toUpperCase();
  return playerChoice;
}

function playRound (computerChoice, playerChoice) {
  if ((computerChoice === 'PAPER') && (playerChoice === 'ROCK')) {
    console.log("You lose! Paper beats rock!");
    computerScore++;
  } else if ((computerChoice === 'ROCK') && (playerChoice === 'SCISSOR')) {
    console.log("You lose! Rock beats scissor!");
    computerScore++;
  } else if ((computerChoice === 'SCISSOR') && (playerChoice === 'PAPER')) {
    console.log("You lose! Scissor beats paper!");
    computerScore++;
  } else if ((computerChoice === 'ROCK') && (playerChoice === 'PAPER')) {
    console.log("You win! Paper beats rock!");
    playerScore++;
  } else if ((computerChoice === 'SCISSOR') && (playerChoice === 'ROCK')) {
    console.log("You win! Rock beats scissor!");
    playerScore++;
  } else if ((computerChoice === 'PAPER') && (playerChoice === 'SCISSOR')) {
    console.log("You win! Scissor beats paper!");
    playerScore++;
  } else {
    console.log("It's a tie!");
  }
  return computerScore, playerScore;
}

// function compareScore(computerScore, playerScore) {
//   let topScore = "";
//   if (computerScore > playerScore) {
//     topScore = computerScore;
//   } else if (computerScore < playerScore) {
//     topScore = playerScore;
//   } else {
//     topScore = computerScore;
//   }
//   return topScore;
// }

function game () {
  //let score = compareScore(computerScore, playerScore);

  while ((computerScore < 5) && (playerScore < 5)) {
    getComputerChoice();
    getPlayerChoice();
    console.log("Computer chose: " + computerChoice);
    console.log("You chose: " + playerChoice);
    playRound(computerChoice, playerChoice);
    console.log("The score is: Computer: " + computerScore + ". Your score: " + playerScore);
    if (computerScore === 5) {
      console.log("COMPUTER WINS!!!");
    } else if (playerScore === 5) {
      console.log("YOU WIN!!!");
    }
  }
}

game();
