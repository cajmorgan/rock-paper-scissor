//Button Declarations
const gMagicBtn = document.querySelector('#gMagicBtn');
const gShieldBtn = document.querySelector('#gShieldBtn');
const gWeaponBtn = document.querySelector('#gWeaponBtn');
const eMagicBtn = document.querySelector('#eMagicBtn');
const eShieldBtn = document.querySelector('#eShieldBtn');
const eWeaponBtn = document.querySelector('#eWeaponBtn');
const newBtn = document.querySelectorAll('.sButton');
const eHealthLoss = document.querySelector('.eHealthLoss');
const gHealthLoss = document.querySelector('.gHealthLoss');
const battleTxt = document.querySelector('.battleTxt');
const restartBtn = document.querySelector('.restart');

//Global
let eHealth = 100;
let gHealth = 100; 
let eHealthLossTxt = document.createElement('h2');
let gHealthLossTxt = document.createElement('h2');

function restart() {
        location.reload();
}
restartBtn.addEventListener('click', restart); 

function changeHealth() {
    //Evil Health
    (eHealth == 100) ? document.querySelector('.eHealthBar').style.transform = "scale(1, 1)"  
    : (eHealth == 95) ? document.querySelector('.eHealthBar').style.transform = "scale(0.95, 1)" 
    : (eHealth == 90) ? document.querySelector('.eHealthBar').style.transform = "scale(0.90, 1)" 
    : (eHealth == 85) ? document.querySelector('.eHealthBar').style.transform = "scale(0.85, 1)" 
    : (eHealth == 80) ? document.querySelector('.eHealthBar').style.transform = "scale(0.8, 1)" 
    : (eHealth == 75) ? document.querySelector('.eHealthBar').style.transform = "scale(0.75, 1)" 
    : (eHealth == 70) ? document.querySelector('.eHealthBar').style.transform = "scale(0.7, 1)" 
    : (eHealth == 65) ? document.querySelector('.eHealthBar').style.transform = "scale(0.65, 1)" 
    : (eHealth == 60) ? document.querySelector('.eHealthBar').style.transform = "scale(0.6, 1)" 
    : (eHealth == 55) ? document.querySelector('.eHealthBar').style.transform = "scale(0.55, 1)" 
    : (eHealth == 50) ? document.querySelector('.eHealthBar').style.transform = "scale(0.5, 1)" 
    : (eHealth == 45) ? document.querySelector('.eHealthBar').style.transform = "scale(0.45, 1)" 
    : (eHealth == 40) ? document.querySelector('.eHealthBar').style.transform = "scale(0.4, 1)" 
    : (eHealth == 35) ? document.querySelector('.eHealthBar').style.transform = "scale(0.35, 1)" 
    : (eHealth == 30) ? document.querySelector('.eHealthBar').style.transform = "scale(0.30, 1)" 
    : (eHealth == 25) ? document.querySelector('.eHealthBar').style.transform = "scale(0.25, 1)" 
    : (eHealth == 20) ? document.querySelector('.eHealthBar').style.transform = "scale(0.20, 1)" 
    : (eHealth == 15) ? document.querySelector('.eHealthBar').style.transform = "scale(0.15, 1)" 
    : (eHealth == 10) ? document.querySelector('.eHealthBar').style.transform = "scale(0.10, 1)" 
    : (eHealth == 5) ? document.querySelector('.eHealthBar').style.transform = "scale(0.05, 1)" 
    : (eHealth <= 0) ? document.querySelector('.eHealthBar').style.transform = "scale(0, 1)" 
    : console.log('unchanged');
    //Good Health
    (gHealth == 100) ? document.querySelector('.gHealthBar').style.transform = "scale(1, 1)"  
    : (gHealth == 95) ? document.querySelector('.gHealthBar').style.transform = "scale(0.95, 1)" 
    : (gHealth == 90) ? document.querySelector('.gHealthBar').style.transform = "scale(0.90, 1)" 
    : (gHealth == 85) ? document.querySelector('.gHealthBar').style.transform = "scale(0.85, 1)" 
    : (gHealth == 80) ? document.querySelector('.gHealthBar').style.transform = "scale(0.8, 1)" 
    : (gHealth == 75) ? document.querySelector('.gHealthBar').style.transform = "scale(0.75, 1)" 
    : (gHealth == 70) ? document.querySelector('.gHealthBar').style.transform = "scale(0.7, 1)" 
    : (gHealth == 65) ? document.querySelector('.gHealthBar').style.transform = "scale(0.65, 1)" 
    : (gHealth == 60) ? document.querySelector('.gHealthBar').style.transform = "scale(0.6, 1)" 
    : (gHealth == 55) ? document.querySelector('.gHealthBar').style.transform = "scale(0.55, 1)" 
    : (gHealth == 50) ? document.querySelector('.gHealthBar').style.transform = "scale(0.5, 1)" 
    : (gHealth == 45) ? document.querySelector('.gHealthBar').style.transform = "scale(0.45, 1)" 
    : (gHealth == 40) ? document.querySelector('.gHealthBar').style.transform = "scale(0.4, 1)" 
    : (gHealth == 35) ? document.querySelector('.gHealthBar').style.transform = "scale(0.35, 1)" 
    : (gHealth == 30) ? document.querySelector('.gHealthBar').style.transform = "scale(0.30, 1)" 
    : (gHealth == 25) ? document.querySelector('.gHealthBar').style.transform = "scale(0.25, 1)" 
    : (gHealth == 20) ? document.querySelector('.gHealthBar').style.transform = "scale(0.20, 1)" 
    : (gHealth == 15) ? document.querySelector('.gHealthBar').style.transform = "scale(0.15, 1)" 
    : (gHealth == 10) ? document.querySelector('.gHealthBar').style.transform = "scale(0.10, 1)" 
    : (gHealth == 5) ? document.querySelector('.gHealthBar').style.transform = "scale(0.05, 1)" 
    : (gHealth <= 0) ? document.querySelector('.gHealthBar').style.transform = "scale(0, 1)" 
    : console.log('unchanged');

}

function checkHealth() {
    const getEvilName = document.querySelector('.evilName').textContent;
    const getGoodName = document.querySelector('.goodName').textContent;
    
    //Evil Won
    if(eHealth > 0 && gHealth <= 0) {
        for(i = 0; i < 6; i++)
        btn[i].disabled = true;
        battleTxt.textContent = `${getEvilName} is victorious!`;
        restartBtn.style.display = "initial";
        console.log('evilName Won');
    }
    else if(gHealth > 0 && eHealth <= 0) {
        for(i = 0; i < 6; i++)
        btn[i].disabled = true;
        battleTxt.textContent = `${getGoodName} is victorious!`;
        restartBtn.style.display = "initial";
        console.log('goodName Won');
    }
    else if(gHealth <= 0 && eHealth <= 0) {
        for(i = 0; i < 6; i++)
        btn[i].disabled = true;
        battleTxt.textContent = 'You both died! *cough* idiots';
        restartBtn.style.display = "initial";
        console.log('It\'s a tie!');
    }
    else {
        return;
    }
}

//Computer selector
function computerPlay(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min); 
    switch(randomNum) {
        case 1:
             return 'eMagic';    
        case 2:
             return 'eShield';
        case 3: 
             return 'eWeapon';
        case 4:
            return 'gMagic';
        case 5:
            return 'gShield';
        case 6:
            return 'gWeapon';
         default:
             break;
        }
    
      return randomNum;
    }
//gMagic Use
function gMagic() {
    let getComputerPlay = computerPlay(1, 3);
    if(getComputerPlay == 'eMagic') {
            battleTxt.textContent = "The magic won't save you this time!";
            //G Health Loss 
            gHealth -= 5;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-5";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health Loss
            eHealth -= 5;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-5";
            eHealthLoss.appendChild(eHealthLossTxt);
            
            
    }
    else if(getComputerPlay == 'eShield') {
            battleTxt.textContent = "Oufff, right back at ya!";
            gHealth -= 30;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-30";
            gHealthLoss.appendChild(gHealthLossTxt);
            
            
    }
    else if(getComputerPlay == 'eWeapon') {
            battleTxt.textContent = "Magic hurts, but so does weapon!";
            gHealth -= 20;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-20";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health Loss
            eHealth -= 30;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-30";
            eHealthLoss.appendChild(eHealthLossTxt);
            
    }
    console.log(gHealth);
    console.log(eHealth);
    console.log(getComputerPlay)
    changeHealth();
    checkHealth();
}
gMagicBtn.addEventListener('click', gMagic);

//gShield Use
function gShield() {
    let getComputerPlay = computerPlay(1, 3);
    if(getComputerPlay == 'eMagic') {
            battleTxt.textContent = "Yep, now you getting it!";
            eHealth -= 30;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-30";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    else if(getComputerPlay == 'eShield') {
            //G Health Loss
            battleTxt.textContent = "More blood, come on!";
            gHealth -= 0;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "BLOCK";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health Loss
            eHealth -= 0;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "BLOCK";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    else if(getComputerPlay == 'eWeapon') {
            battleTxt.textContent = "Your shield won't protect you forever";
            gHealth -= 10;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-10";
            gHealthLoss.appendChild(gHealthLossTxt);
    }
    console.log(gHealth);
    console.log(eHealth);
    console.log(getComputerPlay)
    changeHealth();
    checkHealth();
}
gShieldBtn.addEventListener('click', gShield);

//gWeapon Use
function gWeapon() {
    let getComputerPlay = computerPlay(1, 3);
    if(getComputerPlay == 'eMagic') {
            battleTxt.textContent = "Your enemy got hurt, but you lost an arm for it!";
            //G Health Loss
            gHealth -= 30;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-30";
            gHealthLoss.appendChild(gHealthLossTxt);
            // E Health Loss
            eHealth -= 20;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-20";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    else if(getComputerPlay == 'eShield') {
            battleTxt.textContent = "Smash IT!";
            eHealth -= 10;
            //E Health Loss
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-10";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    else if(getComputerPlay == 'eWeapon') {
            battleTxt.textContent = "Until last man stands huh?";
            gHealth -= 20;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-20";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health Loss
            eHealth -= 20;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-20";
            eHealthLoss.appendChild(eHealthLossTxt);
            
    }
    console.log(gHealth);
    console.log(eHealth);
    console.log(getComputerPlay)
    changeHealth();
    checkHealth();
}
gWeaponBtn.addEventListener('click', gWeapon);



//eMagic Use
function eMagic() {
    let getComputerPlay = computerPlay(4, 6);
    if(getComputerPlay == 'gMagic') {
            battleTxt.textContent = "You need so upgrade your spells";
            //G Health Loss
            gHealth -= 5;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-5";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health Loss
            eHealth -= 5;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-5";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    else if(getComputerPlay == 'gShield') {
            battleTxt.textContent = "Was that really smart?";
            eHealth -= 30;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-30";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    else if(getComputerPlay == 'gWeapon') {
            battleTxt.textContent = "You lost an arm, he lost a torso!";
            //G Health Loss
            gHealth -= 30;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-30";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health Loss
            eHealth -= 20;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-20";
            eHealthLoss.appendChild(eHealthLossTxt);
           
    }
    console.log(gHealth);
    console.log(eHealth);
    console.log(getComputerPlay)
    changeHealth();
    checkHealth();
}
eMagicBtn.addEventListener('click', eMagic);

//eShield Use
function eShield() {
    let getComputerPlay = computerPlay(4, 6);
    if(getComputerPlay == 'gMagic') {
            battleTxt.textContent = "BAM!";
            gHealth -= 30;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-30";
            gHealthLoss.appendChild(gHealthLossTxt);
    }
    else if(getComputerPlay == 'gShield') {
            battleTxt.textContent = "Why don't you go and drink tea with the enemy instead?";
            //G Health Loss
            gHealth -= 0;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "BLOCK";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health Loss
            eHealth -= 0;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "BLOCK";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    else if(getComputerPlay == 'gWeapon') {
        battleTxt.textContent = "You can't hide forever";
            //G Health Loss
            eHealth -= 10;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-10";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    console.log(gHealth);
    console.log(eHealth);
    console.log(getComputerPlay)
    changeHealth();
    checkHealth();
}
eShieldBtn.addEventListener('click', eShield);

//eWeapon Use
function eWeapon() {
    let getComputerPlay = computerPlay(4, 6);
    if(getComputerPlay == 'gMagic') {
                battleTxt.textContent = "You took an arm for a leg, worth it?";
            //G Health Loss
            gHealth -= 20;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-20";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health Loss
            eHealth -= 30;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-30";
            eHealthLoss.appendChild(eHealthLossTxt);
    }
    else if(getComputerPlay == 'gShield') {
            battleTxt.textContent = "Smash it!";
            gHealth -= 10;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-10";
            gHealthLoss.appendChild(gHealthLossTxt);
    }
    else if(getComputerPlay == 'gWeapon') {
            battleTxt.textContent = "An eye for an eye";
            //G Health
            gHealth -= 20;
            gHealthLossTxt.classList.add('gHealthLossTxt')
            gHealthLossTxt.textContent = "-20";
            gHealthLoss.appendChild(gHealthLossTxt);
            //E Health
            eHealth -= 20;
            eHealthLossTxt.classList.add('eHealthLossTxt')
            eHealthLossTxt.textContent = "-20";
            eHealthLoss.appendChild(eHealthLossTxt);
            
    }
    console.log(gHealth);
    console.log(eHealth);
    console.log(getComputerPlay)
    changeHealth();
    checkHealth();
}
eWeaponBtn.addEventListener('click', eWeapon);





