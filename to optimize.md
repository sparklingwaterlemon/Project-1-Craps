const num4 = {
    bet: 0,
    win: 0,
    address: 4,
    calcWin(){
        num4.win = Math.round(num4.bet + (num4.bet * 1.8)) // Payout Odds 9:5 - 1.8
    }
};
const num5 = {
    bet: 0,
    win: 0,
    address: 5,
    calcWin(){
        num5.win = Math.round(num5.bet + (num5.bet * 1.4)) // Payout Odds 7:5 - 1.4
    }
};
const num6 = {
    bet: 0,
    win: 0,
    address: 6,
    calcWin(){
        num6.win = Math.round(num6.bet + (num6.bet * 1.167)) // Payout Odds 7:6 - 1.167
    }
};
const num8 = {
    bet: 0,
    win: 0,
    address: 8,
    calcWin(){
        num8.win = Math.round(num8.bet + (num8.bet * 1.167)) // Payout Odds 7:6 - 1.167
    }
};
const num9 = {
    bet: 0,
    win: 0,
    address: 6,
    calcWin(){
        num9.win = Math.round(num9.bet + (num9.bet * 1.4)) // Payout Odds 7:5 - 1.4
    }
};
const num10 = {
    bet: 0,
    win: 0,
    address: 10,
    calcWin(){
        num10.win = Math.round(num10.bet + (num10.bet * 1.8)) // Payout Odds 9:5 - 1.8
    }
};   
// Bet Constants
let comeBet = 0;
let fieldBet = 0;
let passBet = 0;
let oddsBet = 0;


// Win Constants
let comeWin = 0;
let fieldWin = 0;
let passWin = 0;
let oddsWin = 0;

      