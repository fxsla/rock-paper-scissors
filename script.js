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
    let playerSelection = prompt("Enter rock, paper or scissors")
    return playerSelection.toLowerCase();
}


function playRound(playerSelection, computerSelection){

    if(computerSelection === "rock" && playerSelection === "paper") {

        console.log("You win! Paper beats Rock!")

    } else if(computerSelection === "scissors" && playerSelection === "rock"){

        console.log("You win! Rock beats Scissors!")
        
    } else if(computerSelection === "paper" && playerSelection === "scissors"){

        console.log("You win! Scissors beats Paper!")

    } else if(computerSelection === playerSelection) {
        
        console.log("Draw!")

    } else {

        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
    }
}

console.log(getComputerChoice())