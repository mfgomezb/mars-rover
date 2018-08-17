
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
  xMax: 10,
}

function turnLeft(rover){
  console.log('turnLeft was called!"');
  switch(rover.direction){
    case "N": rover.direction = 'W';
    console.log("Facing W");
    break;
    case "W": rover.direction = 'S';
    console.log("Facing S");
    break;
    case "S": rover.direction = 'E';
    console.log("Facing E");
    break;
    case "E": rover.direction = 'N';
    console.log("Facing N");
    break;
  }
}

function turnRight(rover){
  console.log('turnLeft was called!"');
  switch(rover.direction){
    case "N": rover.direction = 'E';
    console.log("Facing E");
    break;
    case "E": rover.direction = 'S';
    console.log("Facing S");
    break;
    case "S": rover.direction = 'W';
    console.log("Facing W");
    break;
    case "W": rover.direction = 'N';
    console.log("Facing N");
    break;
  }
}

function moveForward(rover, grid){
  console.log("moveForward was called")
  switch (rover.direction){
    case "N":
      if (rover.y === grid.yMin) {
        console.log("Off Boundaries")
      } else {
        rover.y--;
        rover.travelLog.push("X: " +rover.x+ ", Y: " +rover.y);
        console.log(rover.x + "," + rover.y)
      }
      break;
    case "S":
      if (rover.y === grid.yMax){
        console.log("Off Boundaries")
      } else {
        rover.y++;
        rover.travelLog.push("X: " +rover.x+ ", Y: " +rover.y);
        console.log(rover.x + "," + rover.y)
      }
      break;
    case "W":
      if (rover.x === grid.xMax){
        console.log("Off Boundaries")
      } else {
        rover.x++;
        rover.travelLog.push("X: " +rover.x+ ", Y: " +rover.y);
        console.log(rover.x + "," + rover.y)
      }
      break;
    case "E":
      if (rover.x === grid.xMin){
        console.log("Off Boundaries")
      } else {
      rover.x--; 
      rover.travelLog.push("X: " +rover.x+ ", Y: " +rover.y);
      console.log(rover.x + "," + rover.y)
      }
      break;
  }
}

function navigate(directions, rover, grid) {
  console.log(directions)
  for (i = 0; i < directions.length; i++) {
    switch (directions.charAt(i)) {
      case "F":
        moveForward(rover, grid)
        break;
      case "R":
        turnRight(rover)
        break;
      case "L":
        turnRight(rover)
        break;
      default:
        alert("Please enter a valid command: F, R, L ")
        break;
    } 
  }
return; 
}

directions = prompt("Please enter directions '\F' '\R' '\L'")