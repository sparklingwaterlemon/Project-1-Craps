// DOMS...
// let passLine = document.getElementById("pass-line");
// passLine.addEventListener("click", bet);


// CLASS NOTIFICATION
let bankText = document.getElementById("bank");
let notification = document.getElementById("notification");



// CLASS  "DICE-BOX"
let diceRollText1 = document.getElementById("dice-roll1-amount");
let diceRollText2 = document.getElementById("dice-roll2-amount");
let diceRollTotal = document.getElementById("dice-roll-total");
let diceButton = document.getElementById("dice-roll");

// CLASS "TABLE AREA"
let passBetText = document.getElementById("pass-bet-amount");















// Constants...
let bank = 1000;

let rollOutcome = 0;

let comeOutRoll = 0;
let pointRoll = 0;

// let bigRed = 0; // probably need later on to 7 out
// let establishedPointNumber = 0; // for point Roll


// Bet Constants...
// bet constant
let passBetAmount = 0;

// win constants
let passWinAmount = 0;


// sums
let totalBetAmount = 0;
let totalWon = 0;






// Functions...
// init()



function betHowMuch(){ // Basic Pass Line Code - click on pass line html, run this function
    passBetAmount += 5; // increased bet by $5
    passBetText.innerText = passBetAmount; // change bet amount next to pass line bet
    bankText.innerText = bank - passBetAmount;
    // roll dice is disabled if you did not make a passBetAmount on the first come out roll
    if(comeOutRoll === 0 && passBetAmount > 0){
        diceButton.disabled = false;
    };
}

function diceRoll(){
    // calculating dice roll value
	let die1 = (Math.floor(Math.random()*6)+1);
	let die2 = (Math.floor(Math.random()*6)+1);
    let diceTotal = die1 + die2
    diceRollText1.innerText = die1; // changing dice roll text under [dice roll button]
    diceRollText2.innerText = die2;
    diceRollTotal.innerText = diceTotal; // changing dice roll total under [dice roll button]

    // calucalting comeOutRoll and pointRoll
    // if it's not come out roll and second turn than =>
    if(comeOutRoll >= 1){
        pointRoll += 1;
        console.log(comeOutRoll);
        console.log(pointRoll);
    } else {
        // if come out roll (if first turn) => comeOutRollResults
        comeOutRoll += 1;
        comeOutRollResults(diceTotal);
    }
    
};

function comeOutRollResults(diceTotal){ 
    console.log("diceTotal --- " + diceTotal);
    if(diceTotal === 7 || diceTotal === 11){ 
        // won come out roll
        // going to need to change notification
        // going to need to change bank value
        // going to calucalte winning amount
        // calculate bank amount
        // going to need to reset
        passWinAmount = passBetAmount * 2;
        totalWon = passWinAmount;
        bank = bank + totalWon;
    
        notification.innerText = ("You won = " + totalWon);
        bankText.innerText = bank;
        setTimeout(reset, 100);
    } else if(diceTotal === 2 || diceTotal === 3 || diceTotal === 12){
        // lost come out roll
        totalBetAmount = passBetAmount;
        bank = bank - totalBetAmount;

        notification.innerText = ("You lost = " + totalBetAmount);
        bankText.innerText = bank; 
        setTimeout(reset, 1500);
    } else {
        console.log("need to create Point Roll Function PsuedoCode");
        notification.innerText = ("Point Roll");
        //function initPointRoll(){}      
    }
}















// Functions...
// RESET..
function reset(){
    notification.innerText = "notification"

    diceRollText1.innerText = "--"; // reset dice roll values to --
    diceRollText2.innerText = "--";
    diceRollTotal.innerText = "--";

    passBetText.innerText = "0"; // reset bet amount text to 0

    bankText.innerText = bank
    passBetAmount = 0; // reset bet amount to 0
    comeOutRoll = 0;
    pointRoll = 0;
    diceButton.disabled = true;
}