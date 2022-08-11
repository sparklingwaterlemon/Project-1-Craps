
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