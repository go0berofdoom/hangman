let playerChoice = "";
let computerChoice = "";

computerChoice = getComputerChoice();
playerChoice = prompt("Please enter your choice (rock, paper, scissors):");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie!"
    }
    if (playerChoice != computerChoice) {
        if (playerChoice === "rock" && computerChoice === "paper") {
            return "Computer wins!"
        } else if (playerChoice === "rock" && computerChoice === "scissors") {
            return "Player wins!"
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            return "Player wins!"
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            return "Computer wins!"
        } else if (playerChoice === "scissors" && computerChoice ==="rock") {
            return "Computer wins!"
        } else {
            return "Player wins!"
        }
    }
}

console.log("Computer's choice:", computerChoice);
console.log("Player's choice:", playerChoice);
const winner = getWinner(playerChoice, computerChoice)
console.log(winner)