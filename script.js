


let myArray = [
    "Rock",
    "Paper",
    "Scissors",
];


let playerScore = 0 
let computerScore = 0



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
        let x = playerScore++
         return "You chose " + (playerSelection) + " and the computer chose " + (computerSelection) + " so, You win!" +
         this.scoreKeeping()
       
    } else if ((playerSelection === "rock" &&  computerSelection === "Rock") || 
        (playerSelection == "paper" &&  computerSelection ===  "Paper") || 
        (playerSelection === "scissors" &&  computerSelection ===  "Scissors")) {
        return "You chose " + (playerSelection) + " and the computer chose " + (computerSelection) + " so, Tie!" + this.scoreKeeping()
    }   else if ((playerSelection === "rock" &&  computerSelection === "Paper") || 
        (playerSelection == "paper" &&  computerSelection ===  "Scissors") || 
        (playerSelection === "scissors" &&  computerSelection ===  "Rock")) {
        let y = computerScore++
        return "You chose " + (playerSelection) + " and the computer chose " + (computerSelection) + " so, You Lose!" + this.scoreKeeping()
        
} else {
    return "Please submit Rock, Paper or Scissors"
}  
}  

function scoreKeeping(x, y) {
   if (playerScore === 5) {
    return " You win! Well played"
} else if (computerScore === 5) {
    return " You lose! Better luck next time"
}   else {
    return " Your score is " + (playerScore) + " and the computer has " + (computerScore)
}
}


        
    


