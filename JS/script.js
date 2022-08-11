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

allSqWins = {
    win4: 4,
    win5: 5,
    win6: 6,
    win8: 8,
    win10: 10
};

let totalWin = 0; // totalWin is wagered amount + winnings


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
    betAmtDisp.innerText = wagering; // updating status bar - wager display
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
        setTimeout(newRound, 2500); // new bank roll is displayed in newRound
    } else if(diceTotal === 2 || diceTotal === 3 || diceTotal === 12){
        // no need to update bank - bet chips are already subtracted from bank roll
        notif.innerText = ("You lost Bet Amount = " + wagering);
        setTimeout(newRound, 2500); // wager amount is cleared in newRound
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
    notif.innerText = ("Point Roll");

    // highlighting winningNum
    var stringDiceNumber = diceTotal.toString(); // taking dice total and turning to string 
    var box = `bet-` + stringDiceNumber; // to use as a variable
    highlightSquare = document.getElementById(box); // creating a dom variable that I can use later to un highlight
    highlightSquare.setAttribute("class", "highlight"); // in which I can get the dom
    // to hightlight the point winning number
    pointWinNum = diceTotal; // setting the new point Winning Number
   notif.innerText = "New Winning Number - " + pointWinNum;
};



function pointRollGamePlay(diceTotal){
    // lose point roll
    if(diceTotal === 7){
        diceButton.disabled = true;
        highlightSquare.classList.remove("highlight");
        notif.innerText = ("BIG RED. TABLE LOSES");
        setTimeout(newRound, 2500);
    } else if(diceTotal === pointWinNum){
        calcPointWon(diceTotal); // Win Calculations...
        
        bank = bank + totalWin; // Updating my bank roll
        notif.innerText = ("You won = " + totalWin); // Updating status bar
    }
};



// function calcPointWon(diceTotal){
//     // if you hit winning number... what happens
//     // you win pass line, you win odds line, you win the square your numbers on
//     // remaining chips are not removed/ remaining bets are not removed // endOfPointRound() Resetting..
//     passWin = passBet + passBet // pass Win amount
//     calcOddsWin();
    
//     allSqWins.forEach((element) => {
//         var stringDiceNumber = diceTotal.toString();
//         if(element === 

//         }
//     }




        // function calculateWin(winningNumber){
        //     passLineWin = passLineBet * 2;
        //     oddsWin(winningNumber);
        //     console.log("calc passlinewin -- " + passLineWin);
        //     // calculatefieldswin();
        
            
            
            
        //     if(winningNumber === 10){ //only one win square + passline&odds
        //         num10win = Math.round(num10BetAmount + (num10BetAmount * 1.8));
        //         console.log("calc num10win -- " + num10win);
                
        //     } if(winningNumber === 9){
        //         num9win = Math.round(num9BetAmount + (num9BetAmount * 2.0));
        //         num10BetAmount = 0; // NEED TO CLEAR BET AMOUNT
        //     };
        //     //calucalte totalWin
        //     totalWin = passLineWin + num10win + num9win + oddsLineWin;
        //     console.log("calc totalWin --- " + totalWin);
            
        //     //
        //     // function clearsquare
        // };
        
        // function oddsWin(winningNumber){
        //         if(winningNumber === 10){
        //             oddsLineWin = oddsLineBet * 3;
        //             console.log("odds WIn -- " + oddsLineWin)
        //         } else if(winningNumber === 9){
        //             oddsLineWin = oddsLineBet * 2;
        //         }
        // };
        
        // console.log(totalWin);
        
        // NOTE NEED TO CLEAR BOARD OF chips on that SQUARE!!!
        // clear individual square
        // clear pass line
        // clear odd line
        //function clearchipsonwinningsquare(){
        // var stringDiceNumber = diceTotal.toString();
        // var box = `bet-` + stringDiceNumber;
        // document.getElementById(box).replaceChildren();
        
        
        // function fieldsbet(winningNumber){
        // 		if(winningNum = 2){
        // 			fieldswin = fieldsbet * blahb lah blha
        // 		} else if (winning number == 3){
        // 			blahblah blah
        // 		}
        // }
            





// Use as basis for calculating Point Roll Calulations
// Win function basics for Point Roll
function calculateWin(){
    win4 = Math.round(bet4 + (bet4 * 1.8)) // Payout Odds 9:5 - 1.8
    win5 = Math.round(bet5 + (bet5 * 1.4)) // Payout Odds 7:5 - 1.4
    win6 = Math.round(bet6 + (bet6 * 1.167)) // Payout Odds 7:6 - 1.167

    win8 = Math.round(bet8 + (bet8 * 1.167)) // Payout Odds 7:6 - 1.167
    win9 = Math.round(bet9 + (bet9 * 1.4)) // Payout Odds 7:5 - 1.4
    win10 = Math.round(bet10 + (bet10 * 1.8)) // Payout Odds 9:5 - 1.8

    passWin = passBet + passBet// Payout Odds 1:1 - 1.0
    totalWin = win4 + win5 + win6 + win8 + win9 + win10 + passWin;


//  add these to total win amount = + comeLineWin + fieldLineWin + oddLineWin


// let fieldLineWin = 
// fieldBet
// if(winning number is 3,4,9,10, or 11)
//     return (fieldBet +fieldBet);
// if(winning number is 2)
//     return fieldBet + fieldBet * 2
// if winningnumber is 12
//     retuen fieldBet + fieldBet * 3


// Odds Line Bet
// figure this shit out
// let oddLineWin
// let oddsBet =
//  if winning number is 5 or 9
//     let odds1 = take oddsBet + oddline* 1.5 //payout odds 3:2 - 1.5
// if winning number is 6 or 8
//     let odds1 = take oddline bet + oddline* 0.834 // payout odds 5:6  - .83
// if winning number is 4 or 10
//     return oddline +oddline *2 //payout 2:1 - 2.0

// comeLineWin
// let comeBet =
// figure this shit out
//  if winning number is 5 or 9
//     return = take comesLineBetAmount + comesLineBetAmount * 1.5 //payout odds 3:2
// if winning number is 6 or 9
//     return odds1 = take comesline bet + comesline bet * 0.834 // payout odds 5:6
// if winning number is 4 or 10
//     return comesdline + comesdline * 2 //payout 2:1

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
}