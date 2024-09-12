// Use Math.random to choose a number between 0 and 2. 
//Based on this number, a value of rock, paper, or scissors will be assigned.

function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    let choice = "";
    if(number === 0) {
        choice = "rock";
    } else if(number === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Type rock, paper, or scissors", "");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`The computer chose ${computerChoice}.`);
    console.log(`You chose ${humanChoice}.`);

    let winner = "";
    if(computerChoice === "rock" && humanChoice === "scissors"
        || computerChoice === "paper" && humanChoice === "rock"
        || computerChoice === "scissors" && humanChoice === "paper"
    ) {
        winner = "computer";
    } else {
        winner = "human";
    }

    // let outcome = "";
    // if(winner === "computer") {

    // }
}

let computerScore = 0;
let humanScore = 0;

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice().toLowerCase();

playRound(humanSelection, computerSelection);