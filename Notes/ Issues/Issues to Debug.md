
ISSUE 1

// Issue - when I pick up a dropped chip in droppable area and drop it again, sometime it duplicates image of chip
// Does not double bet - visual


//reference in JS

function drop(event){
    (BUG) - to fix - cloned elements are able to be dragged & multiple cloned elements may drag at once
    (BUG) - to fix - cloned elements are placed outside of chip box/ betting area
}

--------------------------------------------------------------------------------------------------------------------------------------

ISSUE 2

The chips do not sit on top of text elements inside grid containers.
- possible solution - make it an image (the numbers and bet area text) under the board with a clear board sitting on top