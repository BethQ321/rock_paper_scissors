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

//Prompt the user to input a choice.
function getHumanChoice() {
    let choice = prompt("Type rock, paper, or scissors", "");
    choice = choice.toLowerCase();
    if(choice != "rock" && choice != "paper" && choice != "scissors") {
        alert("That is not an option, human! Try again.");
        getHumanChoice();
    }
    return choice;
}

function playGame() {
    //Play one round of the game declaring a winner.
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

        //Results are displayed.
        alert(`
            You chose ${humanChoice}.\r
            The computer chose ${computerChoice}.\r
            ${outcome}\r
            Human score: ${humanScore}\r
            Computer score: ${computerScore}
        `);
    }

    //Assign initial score values.
    let computerScore = 0;
    let humanScore = 0;

    //Create a loop to run through the game 5 times.
    for(let i = 0; i < 5; i++) {
        //Calls the choice functions for each side.
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        alert('Congratulations human! After five rounds, you have won. . . this time.')
    } else if(humanScore === computerScore) {
        alert('After five rounds, it is a tie. I guess I have met my intellectual equal.')
    } else {
        alert('After five rounds, I have proven that the computer has the superior intellect! Better luck next time, puny human!!!')
    }
}

playGame();




