function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)

    if(randomNumber == 0){
        return "rock"
    } else if(randomNumber == 1) {
        return "paper"
    } else {
        return "scissors"
    }

}

function play() {
    let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase()
    let computerSelection= getComputerChoice()

    parseInt(playRound(playerSelection, computerSelection))
}


function playRound(playerSelection, computerSelection){

    if(computerSelection === "rock" && playerSelection === "paper") {

        console.log("You win! Paper beats Rock!")
        return 1;

    } else if(computerSelection === "scissors" && playerSelection === "rock"){

        console.log("You win! Rock beats Scissors!")
        return 1;
        
    } else if(computerSelection === "paper" && playerSelection === "scissors"){

        console.log("You win! Scissors beats Paper!")
        return 1;

    } else if(computerSelection === playerSelection) {
        
        console.log("Draw!")
        return 0;

    } else {

        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        return 0;
    }
}

function game() {
    let score = 0;

    console.log(typeof score)

    for(let i=1;i<=5;i++){
        score += parseInt(play());
    }

    console.log(`Final score: ${score} / 5`)
}

game();