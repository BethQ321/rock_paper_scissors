//Assign initial score values.
let computerScore = 0;
let humanScore = 0;

const playAgainButton = document.querySelector("#playAgainButton");
playAgainButton.style.display = "none";

//Assign the choice clicked to humanChoice and call the playRound function
let humanChoice = "";
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        return playRound(humanChoice, getComputerChoice());
    });
});

//Use Math.random to choose a number between 0 and 2. 
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

function playRound(humanChoice, computerChoice) {

    //Logic for determining the winner.
    let winner = "";
    if(computerChoice === "rock" && humanChoice === "rock"
        || computerChoice === "paper" && humanChoice === "paper"
        || computerChoice === "scissors" && humanChoice === "scissors"
    ) {
        winner = "tie";
    } else if(computerChoice === "rock" && humanChoice === "scissors"
        || computerChoice === "paper" && humanChoice === "rock"
        || computerChoice === "scissors" && humanChoice === "paper"
    ) {
        winner = "computer";
    } else {
        winner = "human";
    }

    //A declaration is chosen based on the winner and scores are incremented.
    let outcome = "";
    if(winner === "tie") {
        outcome = "No points. Try again human!";
    } else if(winner === "computer") {
        outcome = "Aww! Too bad. The computer uprising has begun! +1 for me.";
        computerScore++;
    } else {
        outcome = "What?? How could a lowly human beat a computer? +1 for you.";
        humanScore++;
    };

    //Results are displayed
    const roundResults = document.querySelector("#roundResults");
    const roundContent = document.createElement("p");
    roundContent.classList.add("roundContent");

    roundContent.innerHTML = `
        You chose ${humanChoice}.<br>
        The computer chose ${computerChoice}.<br>
        ${outcome}<br>
        Human score: ${humanScore}<br>
        Computer score: ${computerScore}<br><br>
    `
    roundResults.innerHTML = "";
    roundResults.appendChild(roundContent);


    if(humanScore === 5 || computerScore === 5) {
        // const disableButtons = document.getElementsByClassName(".button");
        buttons.forEach((button) => {
            button.disabled = true;
        })
        const finalResults = document.querySelector("#finalResults");
        const finalContent = document.createElement("h3");
        finalContent.classList.add("finalContent");
        if(humanScore > computerScore) {
            finalContent.innerHTML = 'Congratulations human! After five rounds, you have won. . . this time.';
        } else if(humanScore === computerScore) {
            finalContent.innerHTML = 'After five rounds, it is a tie. I guess I have met my intellectual equal.';
        } else {
            finalContent.innerHTML = 'After five rounds, I have proven that the computer has the superior intellect! Better luck next time, puny human!!!';
        }
        finalResults.appendChild(finalContent);
        playAgainButton.style.display = "block";
    }
}








