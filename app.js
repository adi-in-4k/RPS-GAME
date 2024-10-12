// Select elements from the DOM using IDs
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const userChoiceElement = document.getElementById("user-choice");
const computerChoiceElement = document.getElementById("computer-choice");
const resetButton = document.getElementById("rst");

let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to play one round and update the choices and scores
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  // Display user and computer choices
  userChoiceElement.textContent = `You chose: ${capitalizeFirstLetter(
    playerChoice
  )}`;
  computerChoiceElement.textContent = `Computer chose: ${capitalizeFirstLetter(
    computerChoice
  )}`;

  if (playerChoice === computerChoice) {
    return; // It's a tie, no score update
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }

  // Update the score display
  updateScore();
}

// Function to update the score on the page
function updateScore() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Capitalize the first letter of choices for better display
function capitalizeFirstLetter(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

// Add event listeners to images for player's selection
document.querySelector(".rock").addEventListener("click", () => {
  playRound("rock");
});
document.querySelector(".paper").addEventListener("click", () => {
  playRound("paper");
});
document.querySelector(".scissors").addEventListener("click", () => {
  playRound("scissors");
});

// Reset game
resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScore();

  // Reset choices display
  userChoiceElement.textContent = "You chose: ";
  computerChoiceElement.textContent = "Computer chose: ";
});
