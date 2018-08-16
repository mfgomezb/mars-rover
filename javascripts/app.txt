
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
}

var grid = {
  xMin: 0,
  yMin: 0,
  yMax: 10,
  yMin: 10,
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  if (rover.direction == 'N'){
    rover.direction = 'W';
    console.log("Facing W");
  } else if (rover.direction == 'W') {
    rover.direction = 'S';
    console.log("Facing S");
  } else if (rover.direction == 'S') {
    rover.direction = 'E';
    console.log("Facing E");
  } else if  (rover.direction == 'E'){
    rover.direction = 'N';
    console.log("Facing N");
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if (rover.direction == 'N'){
    rover.direction = 'E';
    console.log("Facing E");
  } else if (rover.direction == 'E') {
    rover.direction = 'S';
    console.log("Facing S");
  } else if (rover.direction == 'S') {
    rover.direction = 'W';
    console.log("Facing W");
  } else if  (rover.direction == 'W'){
    rover.direction = 'N';
    console.log("Facing N");
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  if (rover.direction == 'N'){
    if (rover.y == grid.yMin){
      console.log("Off Boundaries")
    } else {
      rover.y -= 1;
      rover.travelLog.push("X: " +rover.x+ ", Y: " +rover.y);
      console.log(rover.x + "," + rover.y)
    }
  
  } else if (rover.direction == 'S'){
    if (rover.y == grid.yMax){
      console.log("Off Boundaries")
    } else {
      rover.y += 1;
      rover.travelLog.push("X: " +rover.x+ ", Y: " +rover.y);
      console.log(rover.x + "," + rover.y)
    }
  
  } else if (rover.direction == 'W'){
    if (rover.x == grid.xMax){
      console.log("Off Boundaries")
    } else {
      rover.x += 1;
      rover.travelLog.push("X: " +rover.x+ ", Y: " +rover.y);
      console.log(rover.x + "," + rover.y)
    }
  
  } else if (rover.direction == 'E'){
    if (rover.x == grid.xMin){
      console.log("Off Boundaries")
    } else {
    rover.x -= 1; 
    rover.travelLog.push("X: " +rover.x+ ", Y: " +rover.y);
    console.log(rover.x + "," + rover.y)
    }
  }
}

input = prompt("Please enter directions '\F' '\R' '\L'")
directions = input.split("")

function navigate(directions, rover) {
  console.log(directions)
  for (i = 0; i < directions.length; i++) {
    if( directions[i] == 'F' ) {
      moveForward(rover)
    } else if ( directions[i] == 'R' ) {
      turnRight(rover)
    } else if ( directions[i] == 'L' ) {
      turnLeft(rover)
    } else {
      console.log("Incorrect navigation instructions")
    }
  }
  return;
}

