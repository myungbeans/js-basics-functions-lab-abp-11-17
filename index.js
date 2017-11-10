// Code your solution in this file!

function distanceFromHqInBlocks(block){
  if (block > 42) {
    return block-42
  }
  else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block){
  if (block >42) {
    return (block-42)*264
  }
  else if (block < 42) {
    return (42-block)*264
  }
  else {
    return "Please input a valid street number."
  }
}

function distanceTravelledInFeet(start,end) {
  if (start>end) {
    return (start-end)*264
  }
  else if (end>start){
    return (end-start)*264
  }
  else {
    return "Please input valid street numbers."
  }
}

function calculatesFarePrice(x,y) {
  if (x>y) {
    if (400<x-y)&&(x-y<2000) {
      return (((x-y)*264)-100)*.02
    } ((x-y)*264)-100)
  }
  if (y>x) {
    if (400<y-x)&&(y-x<2000) {
      return (((y-x)*264)-100)*.02
    } ((y-x)*264)-100))
  }
  
}
