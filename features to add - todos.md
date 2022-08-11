(0) OPTIMIZING
CREATE CLASS 

let sq4 = {
	"bet" : 0,
	"win" : 0,
	"address" : 4,
}
let sq5 = {
	"bet" : 0,
	"win" : 0,
	"address" : 4,
}

allSqs = [ sq4 , sq5];

console.log(allSqs[0].address)




class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}


let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.year + " years old.";






const sq4 = {
  bet: 10,
  addres: 4,
	win: 0,
  calcWin() {
		sq4.win = sq4.bet * 2 }
};
const sq5 = {
  bet: 15,
  addres: 5,
	win: 0,
  calcWin() {
		sq5.win = sq5.bet * 10 }
};

allSqs = [ sq4 , sq5];
bank = 1000;

for( let i = 0 ; i < allSqs.length ; i++){
	if(allSqs[i].address === 4){
		allSqs[i].calcWin();
		bank = bank + allSqs[i].win;
	}
};
console.log(bank);







(1) Need to create Puck and Move Puck

function diceRoll(){
    if 4, 5, 6, 8, 9, 10 - need to move puck...
}
// currently highlighting
// change to set (attribute to puck b4)



(2) Dice Roll CSS
create image of dice that corresponds to dice value rolled



(3) Table Logos
Table Logos to not interact with chips
- solution 1 - make logos droppable
- solution 2 - make it an image under the board with a clear board sitting on top


(3.5) Part of Table Logos
<!-- // Clears Chips
    // Can you replace with Pre Made DOMS?
    // like replaceChildren( b4 = document.querySelector("#b4") = html <div id="b4"><span ondropover=drop(event)"> Place Bets </span></div> = CSS #b4{ animation} -->



(4) Remove Button
// TESTING REMOVING ATTRIBUTES
// TO Prevent Dropping on Odds line during Come Out Roll
function testingRemovingAttributes(){
    console.log(square4.setAttribute("ondragover"));
}


(5) DRINK 8BIT ICONS :DDD