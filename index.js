// Code your solution in this file!
function calculateVertical(x,y){
  if (x>y) {
    (x-y)*264
  }
  else if (y>x) {
    (y-x)*264
  }
  else {
    return "Please type in digits (e.g. 42, 37)"
  }
}

function distanceFromHqInBlocks(block){
  if (block > 42) {
    return block-42
  }
  else {
    return 42 - block
  }
}
