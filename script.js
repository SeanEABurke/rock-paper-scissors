


let myArray = [
    "Rock",
    "Paper",
    "Scissors",
];



function playRound(playerSelection) {
    
    playerPlay = prompt("Rock, Paper or Scissors?");
    playerSelection = playerPlay.toLowerCase();

    let computerSelection = computerPlay()

    function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
    }
   
    if ((playerSelection === "rock" && computerSelection == "Scissors") || 
    (playerSelection === "paper" &&  computerSelection ===  "Rock") || 
    (playerSelection === "scissors" &&  computerSelection === "Paper")) {
        return "You chose " + (playerSelection) + " and the computer chose " + (computerSelection) + " so, You win!"
    } else if ((playerSelection === "rock" &&  computerSelection === "Rock") || 
    (playerSelection == "paper" &&  computerSelection ===  "Paper") || 
    (playerSelection === "scissors" &&  computerSelection ===  "Scissors")) {
        return "You chose " + (playerSelection) + " and the computer chose " + (computerSelection) + " so, Tie!"
}   else if ((playerSelection === "rock" &&  computerSelection === "Paper") || 
(playerSelection == "paper" &&  computerSelection ===  "Scissors") || 
(playerSelection === "scissors" &&  computerSelection ===  "Rock")) {
    return "You chose " + (playerSelection) + " and the computer chose " + (computerSelection) + " so, You Lose!"
} else {
    return "Please submit Rock, Paper or Scissors"
}
}



