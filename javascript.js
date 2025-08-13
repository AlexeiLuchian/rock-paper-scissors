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
    let humanChoice = prompt("Make your choice! rock, paper or scissors: ");
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

console.log(getHumanChoice());