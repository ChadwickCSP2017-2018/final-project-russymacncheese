var WINDOW_WIDTH = 300;
var WINDOW_HEIGHT = 400;
var BACKGROUND_COLOR = color(160, 82, 45);
var WINSCREEN_COLOR = color(221, 232, 255);

var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';

Player main = new Player(150, 200);
Maze one = new Maze();

var previousRoom = 0; //The room you were previously in

var playerSide = null;//returns a cardinal direction if the player position is equal to the a door position

//player x and y coordinates
var playerX = 150;
var playerY = 200;

var currentRoom = 0;//The Room you are currently in

boolean isExit = false; //returns true if the player is at the same position as the Exit

var currentCount = 0;

var winLikelihood = 30;


void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window
  frameRate(30); //how many times the draw function is called per second
}

//loads the font that displays the text
PFont font;
font = loadFont("FFScala.ttf");
textFont(font, 32);

void draw() { //function is called repeatedly

  if (isExit == false) { //function called while the player has not reached the Exit
  background(BACKGROUND_COLOR);
  main.drawAndUpdatePlayer();
  one.drawandUpdateMaze();
   text("Room " + currentRoom, 15, 50);
 }
 else { //function called when player reaches the Exit
   background(WINSCREEN_COLOR);
   fill(BACKGROUND_COLOR);
   main.drawAndUpdatePlayer();
   text("YOU WIN", 90, 100);
 }
}

void keyPressed() { //function that moves the player
  if (keyCode == UP_ARROW) {
    main.updatePlayer("up");
  } else if (keyCode == DOWN_ARROW) {
    main.updatePlayer("down");
  } else if (keyCode == LEFT_ARROW) {
    main.updatePlayer("left");
  } else if (keyCode == RIGHT_ARROW) {
    main.updatePlayer("right");
  } else {
    return null;
  }
}

class Player {

  Player(var px,
    var py) {
    playerX = px;
    playerY = py;
  }

  void drawAndUpdatePlayer() {
    updatePlayer();
    drawPlayer();
    isSide();

  }

  void updatePlayer(var dir) { //changes the player position based on key presses
    if (dir === "up") {
      if (playerY > 0) {
      playerY = playerY - 10;
    }
    } else if (dir === "down") {
      if (playerY < 380) {
      playerY = playerY + 10;
    }
    } else if (dir === "right") {
      if (playerX < 290) {
      playerX = playerX + 10;
    }
    } else if (dir === "left") {
      if (playerX > 0) {
      playerX = playerX - 10;
    }
  }
  }


  void drawPlayer() {//draws a rectangle at the player position
    noStroke();
    rect(playerX, playerY, 10, 20);
  }

  void isSide() {//updates the playerSide variable when the player is in the vicinity of a Door
    if (playerX > 0 && playerX < 20 && playerY < 210 && playerY > 190) {
      playerSide = "left";
    } else if (playerX > 280 && playerX < 300 && playerY < 210 && playerY > 190) {
      playerSide = "right";
    } else if (playerX > 140 && playerX < 160 && playerY > 0 && playerY < 20) {
      playerSide = "top";
    } else if (playerX > 140 && playerX < 160 && playerY > 370 && playerY < 400) {
      playerSide = "bottom";
    } else {
      playerSide = null;
    }
  }



}

class Door {
  var doorSide;
  var identity;

  Door(var ds,
    var id) {
    doorSide = ds;
    identity = id;
  }


  void drawDoor(ds) {//takes in a Door id and a door position and draws a door in the correct position and with the correct color
    if (identity == -2) {
      fill(255);
    }
    else {
      fill(0);
    }
    if (doorSide == "left") {
      rect(10, 200, 5, 30);
    } else if (doorSide == "right") {
      rect(290, 200, 5, 30);
    } else if (doorSide == "top") {
      rect(150, 10, 30, 5);
    } else if (doorSide == "bottom") {
      rect(150, 390, 30, 5);
    }
    fill(0);
  }
}



class Room {
  ArrayList < Door > doorList;
  var entryDoor;
  var roomID;


  Room(var ed,
    var ri) {
    doorList = new ArrayList < Door > ();
    entryDoor = ed;
    roomID = ri;
    buildDoors();

    drawExit();
    println("doors are " + doorList.size());
  }

  ArrayList < Door > getDoorList() { //returns the DoorList
    return doorList;
  }

  void buildDoors() { //adds the entryDoor to the Door ArrayList and randomly adds between 0 and 3 more doors to the ArrayList
    String[] sides = new String[4];
    sides[0] = "left";
    sides[1] = "right";
    sides[2] = "top";
    sides[3] = "bottom";
    if (entryDoor === "left") {

      doorList.add(new Door(entryDoor, previousRoom));
      sides[0] = null;
      println("ED is left");
    } else if (entryDoor === "right") {

      doorList.add(new Door(entryDoor, previousRoom));
      sides[1] = null;
      println("ED is right");
    } else if (entryDoor === "top") {

      doorList.add(new Door(entryDoor, previousRoom));
      sides[2] = null;
      println("ED is top");
    } else if (entryDoor === "bottom") {

      doorList.add(new Door(entryDoor, previousRoom));
      sides[3] = null;
      println("ED is bottom");
    }
    int numSides = int(random(0, 3));
    println("Drawing " + numSides + " doors");
    int count = 0;
    println("Count is orginally " + count);
    while (count <= numSides) {
      println("while loop works");
      int pos = int(random(0, 3));
      println("Draw a door at pos " + pos);
      if (sides[pos] !== null) {
        println("if works");
        doorList.add(new Door(sides[pos], -1));
        count++;
        sides[pos] = null;
          println("Count is now " + count);
              currentCount = count;
      }
    }
  }

  void drawRoom() {
    for (var i = 0; i < doorList.size(); i++) {
      var door = doorList.get(i);
      door.drawDoor(i);
    }
  }
  void drawExit() {
    if (currentCount >= 1 && isExit == undefined) {
  println("isExit is " + isExit);
      var stat = int(random(0, 100));
      if (stat <= 30) {
        var ranDoor = int(random(0, doorList.size() - 1))
        var door = doorList.get(ranDoor);
        door.identity = -2;
        }
      }
   }
}

class Maze {
  ArrayList < Room > roomList;


  Maze() {
    roomList = new ArrayList < Room > ();
    roomList.add(new Room(null, 0));

  }

  void drawandUpdateMaze() {
    updateMaze();
    drawMaze();
  }

  void drawMaze() {
    var room = roomList.get(currentRoom);
    room.drawRoom(currentRoom);

  }
  void updateMaze() {
    var s = roomList.size();
    for (var i = 0; i < s; i++) {
      var room = roomList.get(i);
      if (room.roomID == currentRoom) {
        var listODoors = room.getDoorList();
        for (var i = 0; i < listODoors.size(); i++) {
          var door = listODoors.get(i);
          if (playerSide == door.doorSide) {
            println("Playerside is " + playerSide);
          }

          if (playerSide == door.doorSide && door.identity == -1) {
            println("Create new Room");
            previousRoom = currentRoom;
            if (playerSide == "left") {
              roomList.add(new Room("right", roomList.size()));
              playerX = 200;
              door.identity = roomList.size() - 1;
              currentRoom = door.identity;
              println("New Room created " + roomList.size() + " " + currentRoom);
            } else if (playerSide == "right") {
              roomList.add(new Room("left", roomList.size()));
              playerX = 20;
              door.identity = roomList.size() - 1;
              currentRoom = door.identity;
              println("New Room created " + roomList.size() + " " + currentRoom);
            } else if (playerSide == "top") {
              roomList.add(new Room("bottom", roomList.size()));
              playerY = 360;
              door.identity = roomList.size() - 1;
              currentRoom = door.identity;
              println("New Room created " + roomList.size() + " " + currentRoom);
            } else if (playerSide == "bottom") {
              roomList.add(new Room("top", roomList.size()));
              playerY = 20;
              door.identity = roomList.size() - 1;
              currentRoom = door.identity;
              println("New Room created " + roomList.size() + " " + currentRoom);
            }
          } else if (playerSide == door.doorSide && door.identity !== -2) {
            currentRoom = door.identity;
            if (playerSide == "left") {
              playerX = 200;
            }
            else if (playerSide == "right") {
              playerX = 20;
            }
            else if (playerSide == "top") {
              playerY = 380;
            }
            else if (playerSide == "bottom") {
              playerY = 20;
            }

          }
          else if (playerSide == door.doorSide) {
            isExit = true;
          }
        }
      }
    }

  }
}
