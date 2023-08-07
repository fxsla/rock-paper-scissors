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


function  play(playerSelect){
    let playerSelection = playerSelect
    let computerSelection= getComputerChoice()

    return parseInt(playRound(playerSelection, computerSelection))
}


function playRound(playerSelection, computerSelection){

    if(computerSelection === "rock" && playerSelection === "paper") {

        createParagraph("You win! Paper beats Rock!");
        return 1;

    } else if(computerSelection === "scissors" && playerSelection === "rock"){

    
        createParagraph("You win! Rock beats Scissors!");
        return 1;
        
    } else if(computerSelection === "paper" && playerSelection === "scissors"){

        createParagraph("You win! Scissors beats Paper!");
        
        return 1;

    } else if(computerSelection === playerSelection) {
        
        createParagraph("Draw!");
        return 0;

    } else {

        createParagraph(`You lose, ${computerSelection} beats ${playerSelection}`)
        return -1;
    }
}

function createParagraph(text){
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    container.before(paragraph)
}



let buttons = document.querySelectorAll("button");
let container = document.querySelector(".results");
let playerPara = document.createElement("p");
let computerPara = document.createElement("p");
playerPara.textContent = "Player Score: ";
computerPara.textContent = "Computer Score: ";
container.appendChild(playerPara);
container.appendChild(computerPara);

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let singleRound = play(button.value);
        if(singleRound == 1){
            playerScore++;
            playerPara.textContent = `Player Score: ${playerScore}`;
        } else if(singleRound == -1){
            computerScore ++;
            computerPara.textContent = `Computer Score: ${computerScore}`;
        }

        if(playerScore == 5){
            console.log("player wins")
            winnerText.textContent = "Player wins!";
            winnerContainer.appendChild(winnerText);
        } else if(computerScore == 5) {
            console.log("computer wins")
            winnerText.textContent = "Computer wins!";
            winnerContainer.appendChild(winnerText);

        }
    })
})

let winnerContainer = document.querySelector(".winnerContainer")
let winnerText = document.createElement("p");





/*
function game() {
    let score = 0;

    for(let i=1;i<=5;i++){
        score += play()
    }

    console.log("Final score: ", score + " / 5")
}

game();

*/