// DOMs...
// DOMs for DRAP and DROP - Reset Function - Squares
const placeBetSquare = document.getElementById("place-bets");
const square4 = document.getElementById("bet-4");
const square5 = document.getElementById("bet-5");
const square6 = document.getElementById("bet-6");
const square8 = document.getElementById("bet-8");
const square9 = document.getElementById("bet-9");
const square10 = document.getElementById("bet-10");
const comeSquare = document.getElementById("come-line");
const fieldSquare = document.getElementById("field-line");
const passSquare = document.getElementById("pass-line");
const oddsSquare = document.getElementById("odds-line");

// DOMs for DICE BOX
const diceText1 = document.getElementById("dice-roll-1-amount");
const diceText2 = document.getElementById("dice-roll-2-amount");
const diceTotalText = document.getElementById("dice-roll-total");
const diceButton = document.getElementById("roll-button");

// DOMs for Notifications
const notif = document.getElementById("notification");
const bankAmtDisp = document.getElementById("bank-roll-display");
const betAmtDisp = document.getElementById("bet-amount-display");


// Constants...
// General Game Play
let bank = 1000;

// Roll Count
let comeRoll = 0;
let pointRoll = 0;

// Wagering
let wagering = 0;

// Winning Point Number
let pointWinNum;

// DOM for pointWinNum
let highlightSquare;

// Bet Constants
let bet4 = 0;
let bet5 = 0;
let bet6 = 0;
let bet8 = 0;
let bet9 = 0;
let bet10 = 0;
let comeBet = 0;
let fieldBet = 0;
let passBet = 0;
let oddsBet = 0;

// Win Constants
let win4 = 0;
let win5 = 0;
let win6 = 0;
let win8 = 0;
let win9 = 0;
let win10 = 0;
let comeWin = 0;
let fieldWin = 0;
let passWin = 0;
let oddsWin = 0;


let totalWin = 0; // totalWin is wagering amount + winnings


// Game Play Functions...
// Drag and Drop Functions
function drag(event, value) {
    event.dataTransfer.setData("number", value);
    event.dataTransfer.setData("text", event.target.id);
};
function allowDrop(event) {
    event.preventDefault();
};
// drop function
// some betting and dice roll functions are nested
function drop(event) {
    event.preventDefault();
    
    var chipValue = Number(event.dataTransfer.getData("number")); // create variable = value assigned to dragged chip
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data).cloneNode(true)); // adds a clone of the chip to desired square
    
    wagering = wagering + chipValue; // updating how much I'm wagering value
    betAmtDisp.innerText = wagering; // updating status bar - wagering display
    bank = bank - chipValue; // updating bank - once bet's are on board - taking out of pockets
    bankAmtDisp.innerText = bank; // updating status bar - bank display

    // Assinging chip value to the corresponding dropped square
    // using 'html ids'
    if(event.target.id === "bet-4"){
        bet4 = bet4 + chipValue;
    } else if(event.target.id === "bet-5"){
        bet5 = bet5 + chipValue;
    } else if(event.target.id === "bet-6"){
        bet6 = bet6 + chipValue;
    } else if(event.target.id === "bet-8"){
        bet8 = bet8 + chipValue;
    } else if(event.target.id === "bet-9"){
        bet9 = bet9 + chipValue;
    } else if(event.target.id === "bet-10"){
        bet10 = bet10 + chipValue;
    } else if(event.target.id === "come-line"){
        comeBet = comeBet + chipValue;
    } else if(event.target.id === "field-line"){
        fieldBet = fieldBet + chipValue;
    } else if(event.target.id === "pass-line"){
        passBet = passBet + chipValue;
    } else if(event.target.id === "odds-line"){
        oddsBet = oddsBet + chipValue;
    };

    // enables Roll Dice Button after you have made a Pass Line Bet 
    function letsDoMDMACanYouRoll(){
        if(comeRoll === 0 && passBet > 0){
            diceButton.disabled = false;
        }
    };
    letsDoMDMACanYouRoll();


    // // if I want to see if my drag and drop function works correctly..
    // function testBet(){
    //     console.log("num 4 is " + bet4);
    //     console.log("num 5 is " + bet5);
    //     console.log("num 6 is " + bet6);
    //     console.log("num 8 is " + bet8);
    //     console.log("num 9 is " + bet9);
    //     console.log("num 10 is " + bet10);
    //     console.log("come line is " + comeBet);
    //     console.log("field line is " + fieldBet);
    //     console.log("pass bet is " + passBet);
    //     console.log("odds line is " + oddsBet);
    // };
    // testBet();
};


// Dice Roll functions - game initializer
function diceRoll(){
    // Calculating random dice values
	let die1 = (Math.floor(Math.random()*6)+1);
	let die2 = (Math.floor(Math.random()*6)+1);
    let diceTotal = die1 + die2;

    // Displaying Dice Values
    diceText1.innerText = die1;
    diceText2.innerText = die2;
    diceTotalText.innerText = diceTotal; // want to get rid of this eventually - only keep dice images

    // Determining Come Out and Point Roll
    if(comeRoll >= 1){
        pointRoll += 1;
        pointRollGamePlay(diceTotal);
    } else {
        comeRoll += 1;
        comeOutRollGamePlay(diceTotal); // determining results for Come Out Roll
    }
};

function comeOutRollGamePlay(diceTotal){ 
    if(diceTotal === 7 || diceTotal === 11){
        diceButton.disabled = true; // Disabling Roll Button
        calcComeWon();
        setTimeout(newRound, 5000); // new bank roll is displayed in newRound
    } else if(diceTotal === 2 || diceTotal === 3 || diceTotal === 12){

        // no need to update bank - bet chips are already subtracted from bank roll
        diceButton.disabled = true; // Disabling Roll Button
        notif.innerText = ("You lost Bet Amount = " + wagering);
        setTimeout(newRound, 5000); // wagering amount is cleared in newRound

    } else {
        initPointRoll(diceTotal);
    }
};

function calcComeWon(){
    // Squares you can win on Come Roll: Pass Line
    passWin = passBet + passBet; // Payout Odds 1:1
    totalWin = passWin; 

    bank = bank + totalWin; // Updating my bank roll
    notif.innerText = ("You won = " + totalWin); // Updating status bar
};

function newRound(){
    // Removing Highlights
    // highlightSquare.classList.remove("highlight")

    // Resetting Turn Values
    comeRoll = 0;
    pointRoll = 0;
    
    // Reseting Dice Display
    diceText1.innerText = " --";
    diceText2.innerText = " --";
    diceTotalText.innerText = "--";

    // Resetting Status Bar
    bankAmtDisp.innerText = bank;
    betAmtDisp.innerText = "0";
    notif.innerText = "Notification";
    
    // Clearing Chips
    // Can you replace with Pre Made DOMS?
    // like replaceChildren( b4 = document.querySelector("#b4") = html <div id="b4"><span ondropover=drop(event)"> Place Bets </span></div> = CSS #b4{ animation}
    placeBetSquare.replaceChildren("Place Bets");
    square4.replaceChildren("4");
    square5.replaceChildren("5");
    square6.replaceChildren("6");
    square8.replaceChildren("8");
    square9.replaceChildren("9");
    square10.replaceChildren("10");
    comeSquare.replaceChildren("Come Line");
    fieldSquare.replaceChildren("Field Line");
    passSquare.replaceChildren("Pass Line");
    oddsSquare.replaceChildren("Odds Line");
    
    // Resetting Bet Values
    wagering = 0;
    bet4 = 0;
    bet5 = 0;
    bet6 = 0;
    bet8 = 0;
    bet9 = 0;
    bet10 = 0;
    comeBet = 0;
    fieldBet = 0;
    passBet = 0;
    oddsBet = 0;
};

function initPointRoll(diceTotal){
    // highlighting winningNum
    var stringDiceNumber = diceTotal.toString(); // taking dice total and turning to string 
    var box = `bet-` + stringDiceNumber; // to use as a variable
    highlightSquare = document.getElementById(box); // creating a dom variable that I can use later to un highlight
    highlightSquare.setAttribute("class", "highlight"); // in which I can get the dom
    // highlighting winningNum
    
    pointWinNum = diceTotal; // setting the new point Winning Number
    notif.innerText = "New Winning Number - " + pointWinNum;
};



function pointRollGamePlay(diceTotal){
    if(diceTotal === 7){ // Craps Out! - You Lose!
        diceButton.disabled = true; // disable roll button
        highlightSquare.classList.remove("highlight"); // remove highlight
        notif.innerText = ("BIG RED. TABLE LOSES"); // notif

        setTimeout(newRound, 5000); // resets board - lose all bets
    } else if(diceTotal === pointWinNum){ // You Win!
        calcPointWon(diceTotal); // Win Calculations & Reset 
    } else {
        calcPointTie(diceTotal);
    };
};


// Lines 268 - 365ish - game logic for Point Win
function calcPointWon(diceTotal){
    // Win on Pass Line, Odds Line, and Square Number
    // Chips on other bets are not removed

    calcPassWinPoint(diceTotal); // Calc Pass Win Point
    calcOddsWin(diceTotal); // Calc Odds Win
    calcSquareWin(diceTotal); // Calc Individual Square Win
    calcFieldWin(diceTotal); // calc Field Win // subtracting wagering already

    totalWin = win10 + win9 + win8 + win6 + win5 + win4 + passWin + oddsWin + fieldWin;


    bank = bank + totalWin; // Updating Bank Roll
    wagering = wagering - passBet - oddsBet; // Update Wagering

    notif.innerText = ("You won = " + totalWin); // Updating Status Bar

    setTimeout(pointWonReset, 5000);
};
function calcPassWinPoint(diceTotal){
    if(diceTotal === 4 || diceTotal === 10){
        passWin = Math.round(passBet + (passBet * 2));
        console.log("Pass Win 4 & 10 at 2:1");
    } else if(diceTotal === 5 || diceTotal === 9){
        passWin = Math.round(passBet + (passBet * 1.5));
        console.log("Pass Win 5 & 9 at 3:2");
    } else if(diceTotal === 6 || diceTotal === 8){
        passWin = Math.round(passBet + (passBet * 0.84));
        console.log("Pass Win 6 & 8 at 5:6");
    }
};
function calcOddsWin(diceTotal){ 
    if(diceTotal === 4 || diceTotal === 10){
        oddsWin = Math.round(oddsBet + (oddsBet * 2));
        console.log("Odds Win 4 & 10 at 2:1");
    } else if(diceTotal === 5 || diceTotal === 9){
        oddsWin = Math.round(oddsBet + (oddsBet * 1.5));
        console.log("Odds Win 5 & 9 at 3:2");
    } else if(diceTotal === 6 || diceTotal === 8){
        oddsWin = Math.round(oddsBet + (oddsBet * 0.84));
        console.log("Odds Win 6 & 8 at 5:6");
    } else {
        console.log("Did not hit Odds");
    }
};
function calcSquareWin(diceTotal){
    if(diceTotal === 10){
        win10 = Math.round(bet10 + (bet10 * 1.8));
        wagering = wagering - bet10;
        square10.replaceChildren("10");
        console.log("dice 10 @ 9:5");

    } else if(diceTotal === 9){
        win9 = Math.round(bet9 + (bet9 * 1.4));
        wagering = wagering - bet9;
        square9.replaceChildren("9");
        console.log("dice 9 @ 7:5");

    } else if(diceTotal === 8){
        win8 = Math.round(bet8 + (bet8 * 1.167));
        wagering = wagering - bet8;
        square8.replaceChildren("8");
        console.log("dice 8 @ 7:6");

    } else if(diceTotal === 6){
        win6 = Math.round(bet6 + (bet6 * 1.167));
        wagering = wagering - bet6;
        square6.replaceChildren("6");
        console.log("dice 6 @ 7:6");

    } else if(diceTotal === 5){
        win5 = Math.round(bet5 + (bet5 * 1.4));
        wagering = wagering - bet5; 
        square5.replaceChildren("5");
        console.log("dice 5 @ 7:5");

    } else if(diceTotal === 4){ 
        win4 = Math.round(bet4 + (bet4 * 1.8));
        wagering = wagering - bet4;
        square4.replaceChildren("4");
        console.log("dice 4 @ 9:5");
    }
};
function pointWonReset(){
    passSquare.replaceChildren("Pass Line");
    passBet = 0;
    passWin = 0;

    oddsSquare.replaceChildren("Odds Line");
    oddsBet = 0;
    oddsWin = 0;

    fieldSquare.replaceChildren("Field Line");
    fieldBet = 0;
    fieldWin = 0;

    // Removing Highlights
    highlightSquare.classList.remove("highlight");

    // Resetting Turn Values
    comeRoll = 0;
    pointRoll = 0;

    // Reseting Dice Display
    diceText1.innerText = " --";
    diceText2.innerText = " --";
    diceTotalText.innerText = "--";

    // Resetting Status Bar
    bankAmtDisp.innerText = bank;
    notif.innerText = "New Round";
    betAmtDisp.innerText = wagering;
};




// Below - game logic for Point Tie
function calcPointTie(diceTotal){
    // you can only win individual squares and field bet
    calcFieldWin(diceTotal);
    calcSquareWin(diceTotal); // calc if I hit an individual square & replace children & subtract wagering
    totalWin = win10 + win9 + win8 + win6 + win5 + win4 + fieldWin;
    
    bank = bank + totalWin; // Updating Bank Roll
    wagering = wagering - fieldBet; // Update Wagering
};

function calcFieldWin(diceTotal){
    if(diceTotal === 3 || diceTotal === 4 || diceTotal === 9 || diceTotal === 10 || diceTotal === 11){
        fieldWin = Math.round(fieldBet + (fieldBet));
        console.log("field 3, 4, 9, 10, 11 @ 1:1");
    } else if(diceTotal === 2 || diceTotal === 12){
        fieldWin = Math.round(fieldBet + (fieldBet * 2));
        console.log("field 2, 12 @ 2:1");
    };
    if(fieldWin > 0){
        notif.innerText = ("You won = " + fieldWin);
    };
    fieldSquare.replaceChildren("Field Line");
    fieldBet = 0;
};



        
        
 





// RESET - clears chips from table
// Do I want to reset Roll Value??

function reset(){
    // Resets Roll Value
    comeRoll = 0;
    pointRoll = 0;

    // Removing Highlights
    highlightSquare.classList.remove("highlight");
       
    // Resets Dice Display
    diceText1.innerText = " --"; // reset dice roll values to --
    diceText2.innerText = " --";
    diceTotalText.innerText = "--";

    // Disables Dice Roll
    diceButton.disabled = true;

    // Resets Bank "Returns Chips"
    bank = bank + wagering;

    // Clears Chips "Returns Chips"
    console.log("clear");
    placeBetSquare.replaceChildren("Place Bets");
    square4.replaceChildren("4");
    square5.replaceChildren("5");
    square6.replaceChildren("6");
    square8.replaceChildren("8");
    square9.replaceChildren("9");
    square10.replaceChildren("10");
    comeSquare.replaceChildren("Come Line");
    fieldSquare.replaceChildren("Field Line");
    passSquare.replaceChildren("Pass Line");
    oddsSquare.replaceChildren("Odds Line");
    
    // Resets Status Bar "Resets Bets"
    bankAmtDisp.innerText = bank;
    betAmtDisp.innerText = "0";
    notif.innerText = "Notification";
   
    // Resets Wager
    wagering = 0;

    // Resets Bets
    bet4 = 0;
    bet5 = 0;
    bet6 = 0;
    bet8 = 0;
    bet9 = 0;
    bet10 = 0;
    comeBet = 0;
    fieldBet = 0;
    passBet = 0;
    oddsBet = 0;
};

function returnChips(){
    // // Resets Roll Value
    // comeRoll = 0;
    // pointRoll = 0;

    // // Removing Highlights
    // highlightSquare.classList.remove("highlight");
       
    // // Resets Dice Display
    // diceText1.innerText = " --"; // reset dice roll values to --
    // diceText2.innerText = " --";
    // diceTotalText.innerText = "--";

    // // Disables Dice Roll
    // diceButton.disabled = true;

    // Resets Bank "Returns Chips"
    bank = bank + wagering - passBet;

    // Clears Chips "Returns Chips"
    console.log("clear");
    placeBetSquare.replaceChildren("Place Bets");
    square4.replaceChildren("4");
    square5.replaceChildren("5");
    square6.replaceChildren("6");
    square8.replaceChildren("8");
    square9.replaceChildren("9");
    square10.replaceChildren("10");
    comeSquare.replaceChildren("Come Line");
    fieldSquare.replaceChildren("Field Line");
    oddsSquare.replaceChildren("Odds Line");
    
    // Resets Status Bar "Resets Bets"
    bankAmtDisp.innerText = bank;
    betAmtDisp.innerText = wagering - passBet;
    // notif.innerText = "Notification";
   
    // Resets Wager
    wagering = passBet;

    // Resets Bets
    bet4 = 0;
    bet5 = 0;
    bet6 = 0;
    bet8 = 0;
    bet9 = 0;
    bet10 = 0;
    comeBet = 0;
    fieldBet = 0;
    oddsBet = 0;
};