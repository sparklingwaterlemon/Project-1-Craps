











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
