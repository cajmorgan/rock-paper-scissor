//Global variables
const btn = document.querySelectorAll('.sButton');
const btnName = document.querySelector('.enterName');
const btnGood = document.querySelector('.goodButton');
const btnEvil = document.querySelector('.evilButton');
const nameApply = document.querySelector('.nameApply');


//Battle Log Global Selections
let nameType = document.querySelector('.name')
let selectSide = document.querySelector('.select');
let battleReady = document.querySelector('.battle')

function nameScreen() {
    nameType.style.display = "initial";
    selectSide.style.display = "none";
    battleReady.style.display = "none";
    for(i = 0; i < btn.length; i++)
    btn[i].disabled = true;
}

let getName = () => {
    playerName = document.querySelector('.nameApply').value;
    selectScreen();
};
nameApply.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        getName();
    }
});

btnName.addEventListener('click', getName);


//Select Screen
function selectScreen() { 
    nameType.style.display = "none";
    selectSide.style.display = "initial";
    console.log(playerName);
}

function goodSelect() {
    applyName = document.querySelector('.goodName')
    applyName.textContent = `${playerName.toUpperCase()}`; 
    if(applyName.textContent.length == 0) {
        applyName.textContent = 'GOOD';
    }
    console.log('You Are Good');
    for(i = 3; i < 6; i++)
    btn[i].disabled = false;
    //Change Content
    selectSide.style.display = "none";
    battleReady.style.display = "initial";
    document.querySelector('body').style.backgroundColor = "hsl(185, 94%, 88%)";
}
btnGood.addEventListener('click', goodSelect);

function evilSelect() {
    console.log('You Are Evil');
    applyName = document.querySelector('.evilName')
    applyName.textContent = `${playerName.toUpperCase()}`;
    if(applyName.textContent.length == 0) {
        applyName.textContent = 'EVIL';
    }
    for(i = 0; i < 3; i++)
    btn[i].disabled = false;
    //Change Content
    selectSide.style.display = "none";
    battleReady.style.display = "initial";
    document.querySelector('body').style.backgroundColor = "red"; 
}
btnEvil.addEventListener('click', evilSelect);










// //Computer selector
// function computerPlay(min = 1, max = 3) {
//     let randomNum = Math.floor(Math.random() * (max - min + 1) + min); 
//     switch(randomNum) {
//         case 1:
//             return 'rock';    
//         case 2:
//             return 'paper';
//         case 3: 
//             return 'scissors';
//         default:
//             break;
//     }
    
//     return randomNum;
    
// }

// //Gameplay
// function letsPlay() {
//     message = "";
//     // let playerSelection = prompt('Enter: rock, paper or scissors');
//     while(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors' ) {
//          playerSelection = prompt('Check your spelling! Enter: rock, paper or scissors');
//     };

//     let computerSelection = computerPlay();
     
//     if (playerSelection.toLowerCase() == computerSelection) {
//         countC += 1
//         countP += 1
//         scoreAdder()
//         let result = ((num == 3) ? message = "The End" : message = "It's a tie!");
//         return message;
//     }
//     else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
//         countC += 1
//         scoreAdder()
//         let result = ((num == 3) ? message = "The End" : message = "You lost! paper beats rock!");
//         return message;
//     }
//     else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
//         countP += 1
//         scoreAdder()
//         let result = ((num == 3) ? message = "The End" : message = "You won! rock beats scissors");
//         return message;
//     }
//     else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
//         countC += 1
//         scoreAdder()
//         let result = ((num == 3) ? message = "The End" : message = "You lost! scissors beats paper!");
//         return message;
//     }
//     else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
//         countP += 1
//         scoreAdder()
//         let result = ((num == 3) ? message = "The End" : message = "You won! paper beats rock!");
//         return message;
//     }
//     else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
//         countC += 1
//         scoreAdder()
//         let result = ((num == 3) ? message = "The End" : message = "You lost! rock beats scissors");
//         return message;
//     }
//     else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
//         countP += 1
//         scoreAdder()
//         let result = ((num == 3) ? message = "The End" : message = "You won! scissors beats paper");
//         return message;
//     }
   
// }

// //How many rounds should we play?
// function gameRounds() {
//     while(num < 3) {
//         num += 1;
//         console.log(letsPlay())
//     }
// }

// //starts the game
// gameRounds();

// //Counting the score
// function scoreAdder() {
//     if (num == 3 && countC > countP) {
//         counter = (`Final Score: You Lost, Computer ${countC} vs you ${countP}`);
//     }
//     else if (num == 3 && countP > countC) {
//         counter = (`Final Score: You Won, You ${countP} vs Computer ${countC}`);
//     }
//     else if (num == 3 && countP == countC) {
//         counter = (`Final Score: It's a tie! You ${countP} vs Computer ${countC}`);
//     }
//     else {
//         counter = (`Score: Computer ${countC} vs you ${countP}`)
//     }
//     return console.log(counter)
// };