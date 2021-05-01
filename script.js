//Global variables
var countP = 0;
var countC = 0;
var num = 0;

//Computer selector
function computerPlay(min = 1, max = 3) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min); 
    switch(randomNum) {
        case 1:
            return 'rock';    
        case 2:
            return 'paper';
        case 3: 
            return 'scissors';
        default:
            break;
    }
    
    return randomNum;
    
}

//Gameplay
function letsPlay() {
    message = "";
    // let playerSelection = prompt('Enter: rock, paper or scissors');
    while(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors' ) {
         playerSelection = prompt('Check your spelling! Enter: rock, paper or scissors');
    };

    let computerSelection = computerPlay();
     
    if (playerSelection.toLowerCase() == computerSelection) {
        countC += 1
        countP += 1
        scoreAdder()
        let result = ((num == 3) ? message = "The End" : message = "It's a tie!");
        return message;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        countC += 1
        scoreAdder()
        let result = ((num == 3) ? message = "The End" : message = "You lost! paper beats rock!");
        return message;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        countP += 1
        scoreAdder()
        let result = ((num == 3) ? message = "The End" : message = "You won! rock beats scissors");
        return message;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        countC += 1
        scoreAdder()
        let result = ((num == 3) ? message = "The End" : message = "You lost! scissors beats paper!");
        return message;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        countP += 1
        scoreAdder()
        let result = ((num == 3) ? message = "The End" : message = "You won! paper beats rock!");
        return message;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        countC += 1
        scoreAdder()
        let result = ((num == 3) ? message = "The End" : message = "You lost! rock beats scissors");
        return message;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        countP += 1
        scoreAdder()
        let result = ((num == 3) ? message = "The End" : message = "You won! scissors beats paper");
        return message;
    }
   
}

//How many rounds should we play?
function gameRounds() {
    while(num < 3) {
        num += 1;
        console.log(letsPlay())
    }
}

//starts the game
gameRounds();

//Counting the score
function scoreAdder() {
    if (num == 3 && countC > countP) {
        counter = (`Final Score: You Lost, Computer ${countC} vs you ${countP}`);
    }
    else if (num == 3 && countP > countC) {
        counter = (`Final Score: You Won, You ${countP} vs Computer ${countC}`);
    }
    else if (num == 3 && countP == countC) {
        counter = (`Final Score: It's a tie! You ${countP} vs Computer ${countC}`);
    }
    else {
        counter = (`Score: Computer ${countC} vs you ${countP}`)
    }
    return console.log(counter)
};