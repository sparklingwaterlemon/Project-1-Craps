// DOMs...
// DOMs for DRAP and DROP - Reset Function
const placeBets = document.getElementById("place-bets");
const square4 = document.getElementById("bet-4");
const square5 = document.getElementById("bet-5");
const square6 = document.getElementById("bet-6");
const square8 = document.getElementById("bet-8");
const bet9 = document.getElementById("bet-9");
const bet10 = document.getElementById("bet-10");
const comeLine = document.getElementById("come-line");
const fieldLine = document.getElementById("field-line");
const passLine = document.getElementById("pass-line");
const oddsLine = document.getElementById("odds-line");

// DOMs for DICE BOX
const diceRollText1 = document.getElementById("dice-roll-1-amount");
const diceRollText2 = document.getElementById("dice-roll-2-amount");
const diceRollTotalText = document.getElementById("dice-roll-total");
const diceButton = document.getElementById("roll-button");

// DOMs for Notifications
const notification = document.getElementById("notification");
const bankAmountDisplay = document.getElementById("bank-roll-display");
const betAmountDisplay = document.getElementById("bet-amount-display");







// Constants...
// General Game Play
let bank = 1000;
let rollOutcome = 0; // whatsa this??

// Constants - Roll Count
let comeOutRoll = 0;
let pointRoll = 0;
let establishedPointNumber = 0; // for point Roll
let bigRed = []; // probably need later on to 7 out


// Constants - Betting Constants
let tableCurrentBetTotal = 0;

// Constants - Bet Constants
// Bet Constants are updated from Drop Functions - see above
let num4BetAmount = 0;
let num5BetAmount = 0;
let num6BetAmount = 0;

let num8BetAmount = 0;
let num9BetAmount = 0;
let num10BetAmount = 0;
let comeLineBetAmount = 0;
let fieldLineBetAmount = 0;
let passLineBetAmount = 0;
let oddsLineBetAmount = 0;


// Constants - Win Constants
let num4win = 0;
let num5win = 0;
let num6win = 0;

let num8win = 0;
let num9win = 0;
let num10win = 0;

let passLineWin = 0;
let totalWinAmount = 0;

// Updating Win Constants =
function calculateWin(){
    num4win = Math.round(num4BetAmount + (num4BetAmount * 1.8)) // Payout Odds 9:5 - 1.8
    num5win = Math.round(num5BetAmount + (num5BetAmount * 1.4)) // Payout Odds 7:5 - 1.4
    num6win = Math.round(num6BetAmount + (num6BetAmount * 1.167)) // Payout Odds 7:6 - 1.167

    num8win = Math.round(num8BetAmount + (num8BetAmount * 1.167)) // Payout Odds 7:6 - 1.167
    num9win = Math.round(num9BetAmount + (num9BetAmount * 1.4)) // Payout Odds 7:5 - 1.4
    num10win = Math.round(num10BetAmount + (num10BetAmount * 1.8)) // Payout Odds 9:5 - 1.8

    passLineWin = passLineBetAmount + passLineBetAmount// Payout Odds 1:1 - 1.0
    totalWinAmount = num4win + num5win + num6win + num8win + num9win + num10win + passLineWin;
//  add these to total win amount = + comeLineWin + fieldLineWin + oddLineWin
};

// let fieldLineWin = 
// fieldLineBetAmount
// if(winning number is 3,4,9,10, or 11)
//     return (fieldLineBetAmount +fieldLineBetAmount);
// if(winning number is 2)
//     return fieldLineBetAmount + fieldLineBetAmount * 2
// if winningnumber is 12
//     retuen fieldLineBetAmount + fieldLineBetAmount * 3


// Odds Line Bet
// figure this shit out
// let oddLineWin
// let oddsLineBetAmount =
//  if winning number is 5 or 9
//     let odds1 = take oddsLineBetAmount + oddline* 1.5 //payout odds 3:2 - 1.5
// if winning number is 6 or 8
//     let odds1 = take oddline bet + oddline* 0.834 // payout odds 5:6  - .83
// if winning number is 4 or 10
//     return oddline +oddline *2 //payout 2:1 - 2.0

// comeLineWin
// let comeLineBetAmount =
// figure this shit out
//  if winning number is 5 or 9
//     return = take comesLineBetAmount + comesLineBetAmount * 1.5 //payout odds 3:2
// if winning number is 6 or 9
//     return odds1 = take comesline bet + comesline bet * 0.834 // payout odds 5:6
// if winning number is 4 or 10
//     return comesdline + comesdline * 2 //payout 2:1










// Game Play Functions...

// DRAG AND DROP Functions
// DRAG AND DROP Functions
function drag(event, value) {
    event.dataTransfer.setData("number", value);
    event.dataTransfer.setData("text", event.target.id);
};
function allowDrop(event) {
    event.preventDefault();
};
function drop(event) {
    event.preventDefault();
    var chipValue = Number(event.dataTransfer.getData("number")); // gets value assigned to chip in HTML
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data).cloneNode(true)); // adds a clone of chip to target
    // BUG - to fix - cloned elements are able to be dragged & multiple cloned elements may drag at once
    // BUG - to fix - cloned elements are placed outside of chip box/ betting area

    // Updating Status Bar
    tableCurrentBetTotal = tableCurrentBetTotal + chipValue;
    betAmountDisplay.innerText = tableCurrentBetTotal;


    bank = bank - chipValue;
    bankAmountDisplay.innerText = bank;

    // Assigning correct value to the correct square you placed your chip at
    // ie if you drop chip on bet square 4 -> increase bet square 4 bet value
    if(event.target.id === "bet-4"){
        num4BetAmount = num4BetAmount + chipValue
    } else if(event.target.id === "bet-5"){
        num5BetAmount = num5BetAmount + chipValue
    } else if(event.target.id === "bet-6"){
        num6BetAmount = num6BetAmount + chipValue
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
    canYouRoll()
    testBet(); // This is Conole.Logging everything... TO-DOs - change this to notification? so you can see how much you bet on your slot?
};

// This is Conole.Logging everything...
function testBet(){
    console.log("num 4 is " + num4BetAmount);
    console.log("num 5 is " + num5BetAmount);
    console.log("num 6 is " + num6BetAmount);
    console.log("num 8 is " + num8BetAmount);
    console.log("num 9 is " + num9BetAmount);
    console.log("num 10 is " + num10BetAmount);
    console.log("come line is " + comeLineBetAmount);
    console.log("field line is " + fieldLineBetAmount);
    console.log("pass line is " + passLineBetAmount);
    console.log("odds line is " + oddsLineBetAmount);
 
};

// Allowing Dice Roll Function only if you have a Pass Line Bet
function canYouRoll(){
    if(comeOutRoll === 0 && passLineBetAmount > 0){
        diceButton.disabled = false;
    };
};



// Initialized from html - onclick
function diceRoll(){
    // calculating dice roll value
	let die1 = (Math.floor(Math.random()*6)+1);
	let die2 = (Math.floor(Math.random()*6)+1);
    let diceTotal = die1 + die2
    
    // changing inner text to dice roll results
    diceRollText1.innerText = die1;
    diceRollText2.innerText = die2;
    diceRollTotalText.innerText = diceTotal;

    // calucalting comeOutRoll and pointRoll
    // if it's not come out roll and second turn than =>
    if(comeOutRoll >= 1){
        pointRoll += 1;
        console.log("come out roll " + comeOutRoll);
        console.log("point roll " + pointRoll);
        // START POINT ROLL
        // pointRollResults();
        // START POINT ROLL
        // pointRollResults();
        // START POINT ROLL
        // pointRollResults();
        // START POINT ROLL
        // pointRollResults();
    } else {
        comeOutRoll += 1;
        console.log("comesooutrolls " + comeOutRoll);
        comeOutRollResults(diceTotal); // if come out roll (if first turn) => comeOutRollResults
    }
};


function comeOutRollResults(diceTotal){ 
    console.log("diceTotal --- " + diceTotal);
    if(diceTotal === 7 || diceTotal === 11){
        calculateWin();
        bank = bank + totalWinAmount;

        notification.innerText = ("You won = " + totalWinAmount);
        diceButton.disabled = true;

        setTimeout(newRound, 4000);
    } else if(diceTotal === 2 || diceTotal === 3 || diceTotal === 12){
        notification.innerText = ("You lost Bet Amount = " + tableCurrentBetTotal);

        diceButton.disabled = true;
        setTimeout(newRound, 4000);
    } else {
        initPointRoll(diceTotal);
    }
}
function initPointRoll(diceTotal){
    notification.innerText = ("Point Roll");

    var stringDiceNumber = diceTotal.toString();
    var box = `bet-` + stringDiceNumber;
    document.getElementById(box).setAttribute("id", "highlight");

    establishedPointNumber = diceTotal;
    bigRed.push(7);
    console.log(bigRed);
    console.log(establishedPointNumber);

    console.log("need to create Point Roll Function PsuedoCode");
}














// NEW ROUND
function newRound(){

    // Resets Status Bar
    notification.innerText = "Notification";
    betAmountDisplay.innerText = "0";
    bankAmountDisplay.innerText = bank;
        
    // clears table of chips
    placeBets.replaceChildren("Place Bets");
    square4.replaceChildren("4");
    square5.replaceChildren("5");
    square6.replaceChildren("6");
    square8.replaceChildren("8");
    bet9.replaceChildren("9");
    bet10.replaceChildren("10");
    comeLine.replaceChildren("Come Line");
    fieldLine.replaceChildren("Field Line");
    passLine.replaceChildren("Pass Line");
    // Able to pass htmls with .innerHTML
    // passLine.innerHTML = `Pass Line Bet Amount $<span id="pass-bet-amount">0 </span>`;
    oddsLine.replaceChildren("Odds Line");
    
    // Resets Roll Value
    comeOutRoll = 0;
    pointRoll = 0;

    // Resets Bet Amounts to 0
    tableCurrentBetTotal = 0;
    console.log("reset --- " + tableCurrentBetTotal);

    num4BetAmount = 0;
    num5BetAmount = 0;
    num6BetAmount = 0;
    num8BetAmount = 0;
    num9BetAmount = 0;
    num10BetAmount = 0;
    comeLineBetAmount = 0;
    fieldLineBetAmount = 0;
    passLineBetAmount = 0;
    oddsLineBetAmount = 0;

    // Resets Dice Results
    diceRollText1.innerText = " --"; // reset dice roll values to --
    diceRollText2.innerText = " --";
    diceRollTotalText.innerText = "--";
    // Disables Dice Roll unless there is a Pass Bet
    diceButton.disabled = true;
}

// RESET during middle of game
function reset(){
    // Resets Bank
    bank = bank + tableCurrentBetTotal

    // Resets Status Bar
    notification.innerText = "Notification";
    betAmountDisplay.innerText = "0";
    bankAmountDisplay.innerText = bank

    
    // clears table of chips
    console.log("clear");
    placeBets.replaceChildren("Place Bets");
    square4.replaceChildren("4");
    square5.replaceChildren("5");
    square6.replaceChildren("6");
    square8.replaceChildren("8");
    bet9.replaceChildren("9");
    bet10.replaceChildren("10");
    comeLine.replaceChildren("Come Line");
    fieldLine.replaceChildren("Field Line");
    passLine.replaceChildren("Pass Line");
    oddsLine.replaceChildren("Odds Line");
    
    // Resets Roll Value
    comeOutRoll = 0;
    pointRoll = 0;
   

    // Resets Bet Amounts to 0
    num4BetAmount = 0;
    num5BetAmount = 0;
    num6BetAmount = 0;
    num8BetAmount = 0;
    num9BetAmount = 0;
    num10BetAmount = 0;
    comeLineBetAmount = 0;
    fieldLineBetAmount = 0;
    passLineBetAmount = 0;
    oddsLineBetAmount = 0;

    // Resets Current Bet to 0
    tableCurrentBetTotal = 0;

    // Resets Dice Results
    diceRollText1.innerText = " --"; // reset dice roll values to --
    diceRollText2.innerText = " --";
    diceRollTotalText.innerText = "--";
    // Disables Dice Roll unless there is a Pass Bet
    diceButton.disabled = true;
}

// TESTING REMOVING ATTRIBUTES
function testingRemovingAttributes(){
    console.log(square4.setAttribute("ondragover"));
}