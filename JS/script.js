// DRAG AND DROP FUNCTIONS
function drag(event, value) {
    event.dataTransfer.setData("number", value);
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    var chipValue = Number(event.dataTransfer.getData("number"));

    console.log(event.target.id);
    
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data).cloneNode(true));
    // BUG - FIX CLONED ELEMENT DRAG
    // BUG - ELEMENTS DRAGGED OUTSIDE OF FLEX BOX BORDERS

    if(event.target.id === "bet-4"){
        num4BetAmount = num4BetAmount + chipValue
    } else if(event.target.id === "bet-5"){
        num5BetAmount = num5BetAmount + chipValue
    } else if(event.target.id === "bet-6"){
        num6BetAmount = num6BetAmount + chipValue
    } else if(event.target.id === "bet-7"){
        num7BetAmount = num7BetAmount + chipValue
    } else if(event.target.id === "bet-8"){
        num8BetAmount = num8BetAmount + chipValue
    } else if(event.target.id === "bet-9"){
        num9BetAmount = num9BetAmount + chipValue
    } else if(event.target.id === "bet-10"){
        num10BetAmount = num10BetAmount + chipValue
    } else if(event.target.id === "come-line"){
        comeLineBetAmount = comeLineBetAmount + chipValue
    } else if(event.target.id === "field-line"){
        fieldLineBetAmount = fieldLineBetAmount + chipValue
    } else if(event.target.id === "pass-line"){
        passLineBetAmount = passLineBetAmount + chipValue
    } else if(event.target.id === "odds-line"){
        oddsLineBetAmount = oddsLineBetAmount + chipValue
    }; 

    testBet();
}

let num4BetAmount = 0;
let num5BetAmount = 0;
let num6BetAmount = 0;
let num7BetAmount = 0;
let num8BetAmount = 0;
let num9BetAmount = 0;
let num10BetAmount = 0;
let comeLineBetAmount = 0;
let fieldLineBetAmount = 0;
let passLineBetAmount = 0;
let oddsLineBetAmount = 0;



function testBet(){
    console.log("num 4 is " + num4BetAmount);
    console.log("num 5 is " + num5BetAmount);
    console.log("num 6 is " + num6BetAmount);
    console.log("num 7 is " + num7BetAmount);
    console.log("num 8 is " + num8BetAmount);
    console.log("num 9 is " + num9BetAmount);
    console.log("num 10 is " + num10BetAmount);
    console.log("come line is " + comeLineBetAmount);
    console.log("field line is " + fieldLineBetAmount);
    console.log("pass line is " + passLineBetAmount);
    console.log("odds line is " + oddsLineBetAmount);
 
}



// RESET!! CLEAR BOARD!!
function clearboard(){
    // clears table of chips
    console.log("clear");
    placeBets.replaceChildren("Place Bets");
    bet4.replaceChildren("4");
    bet5.replaceChildren("5");
    bet6.replaceChildren("6");
    bet8.replaceChildren("8");
    bet9.replaceChildren("9");
    bet10.replaceChildren("10");
    comeLine.replaceChildren("Come Line");
    fieldLine.replaceChildren("Field Line");
    passLine.replaceChildren("Padfdafd");
    // ABLE TO PASS FUNCTIONS AFTER CLEAR WITH INNERHTML
    // or possibly have a clear board and have a background image with everything
    passLine.innerHTML = `Bet Amount $<span id="pass-bet-amount">0 </span>`;
    oddsLine.replaceChildren("Odds Line");

    // RESETS ROLLS VALUES
    comeOutRoll = 0;
    pointRoll = 0;





    //resets notification
    // notification.innerText = "notification"


    //resets dice
    // diceRollText1.innerText = "--"; // reset dice roll values to --
    // diceRollText2.innerText = "--";
    // diceRollTotal.innerText = "--";

    // do i need this?
    // passBetText.innerText = "0"; // reset bet amount text to 0
    // bankText.innerText = bank
   

    // //disabling dice button unless there is a passbet
    // diceButton.disabled = true;

}

// DOMS...
// previous idea click = bet function... switched over to drag and drop..
// passLine.addEventListener("click", bet);


// DOMS FOR DRAP AND DROP RESET FUNCTIONS
const placeBets = document.getElementById("place-bets");
const bet4 = document.getElementById("bet-4");
const bet5 = document.getElementById("bet-5");
const bet6 = document.getElementById("bet-6");
const bet8 = document.getElementById("bet-8");
const bet9 = document.getElementById("bet-9");
const bet10 = document.getElementById("bet-10");
const comeLine = document.getElementById("come-line");
const fieldLine = document.getElementById("field-line");
const passLine = document.getElementById("pass-line");
const oddsLine = document.getElementById("odds-line");


// CLASS  "DICE-BOX"
// fix this
// fix this
let diceRollText1 = document.getElementById("dice-roll1-amount");
let diceRollText2 = document.getElementById("dice-roll2-amount");
let diceRollTotal = document.getElementById("dice-roll-total");
let diceButton = document.getElementById("dice-roll");









// CLASS NOTIFICATION
// fix this
// fix this
// let bankText = document.getElementById("bank");
// let notification = document.getElementById("notification");

// // CLASS "TABLE AREA"
// // fix this
// // fix this
// let passBetText = document.getElementById("pass-bet-amount");













// Constants...
let bank = 1000;
let rollOutcome = 0;
let comeOutRoll = 0;
let pointRoll = 0;
// let bigRed = 0; // probably need later on to 7 out
// let establishedPointNumber = 0; // for point Roll
// Bet Constants...
// bet constant
// let passBetAmount = 0;
// win constants
let passWinAmount = 0;
// sums
let totalBetAmount = 0;
let totalWon = 0;






// Functions...
// init()



// function betHowMuch(){ // Basic Pass Line Code - click on pass line html, run this function
//     passBetAmount += 5; // increased bet by $5
//     passBetText.innerText = passBetAmount; // change bet amount next to pass line bet
//     bankText.innerText = bank - passBetAmount;
//     // roll dice is disabled if you did not make a passBetAmount on the first come out roll
//     if(comeOutRoll === 0 && passBetAmount > 0){
//         diceButton.disabled = false;
//     };


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

}