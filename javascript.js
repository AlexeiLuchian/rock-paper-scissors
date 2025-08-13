function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = undefined;
    switch (randomNumber){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice
}

function getHumanChoice(){
    let choiceValid = false;
    let humanChoice = prompt("Make your choice! rock, paper or scissors: ").toLowerCase();
    while (!choiceValid){
        if (humanChoice === "rock"
            || humanChoice === "paper"
            || humanChoice === "scissors" ) {
                choiceValid = true;
            } else {
                alert("This wasn't an option you schewpid! Try again!");
                humanChoice = prompt("Make your choice! rock, paper or scissors: ");
            }
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("You'll probably go to a wedding. It's a tie.");
        console.log(`Human ${humanScore} - ${computerScore} Computer`);
        return;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(`Damn u unlucky! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else {
            console.log(`Daaaamn boy, u on fire! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice === "scissors") {
            console.log(`Damn u unlucky! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else {
            console.log(`Daaaamn boy, u on fire! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log(`Damn u unlucky! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else {
            console.log(`Daaaamn boy, u on fire! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }
    console.log(`Human ${humanScore} - ${computerScore} Computer`);
}

function playGame(){
    let gameOver = false;

    while (!gameOver){
        playRound(getHumanChoice(), getComputerChoice());
        if (humanScore === 5) {
            console.log("The humanity finally WON!!!");
            gameOver = true;
        }
        if (computerScore === 5) {
            console.log("Meeeh, nothing special. (computer wins)");
            gameOver = true;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();