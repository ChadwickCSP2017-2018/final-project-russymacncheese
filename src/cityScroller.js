var WINDOW_WIDTH = 300;
var WINDOW_HEIGHT = 400;
var BACKGROUND_COLOR = color(160, 82, 45);
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';

Player main = new Player(100, 100);
Room one = new Room("bottom");

void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window
  frameRate(30); //how many times the draw function is called per second
}

void draw() {
  background(BACKGROUND_COLOR);
  main.drawAndUpdatePlayer();
  one.buildDoors();
}

void keyPressed() {
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
  var playerX;
  var playerY;

  Player(var px,
    var py) {
    playerX = px;
    playerY = py;
  }

  void drawAndUpdatePlayer() {
    updatePlayer();
    drawPlayer();

  }

  void updatePlayer(var dir) {
    if (dir === "up") {
      playerY = playerY - 10;
    }
    if (dir === "down") {
      playerY = playerY + 10;
    }
    if (dir === "right") {
      playerX = playerX + 10;
    }
    if (dir === "left") {
      playerX = playerX - 10;
    }
  }

  void drawPlayer() {
    noStroke();
    ellipse(playerX, playerY, 30, 30);
  }

}

class Door {
  var doorSide;

  Door(var ds) {
    doorSide = ds;
  }


  void drawDoor(ds) {
    if (doorSide == "left") {
      fill(color(0, 0, 0));
      rect(10, 200, 5, 30);
    } else if (doorSide == "right") {
      fill(color(0, 0, 0));
      rect(290, 200, 5, 30);
    } else if (doorSide == "top") {
      fill(color(0, 0, 0));
      rect(150, 10, 30, 5);
    } else if (doorSide == "bottom") {
      fill(color(0, 0, 0));
      rect(150, 390, 30, 5);
    }
  }
}

class Room {
  var entryDoor;
  var sideCount;

  Room(var ed) {
  Arraylist < Door > doorList;
    var doorList = new Arraylist < Door > ();
    entryDoor = ed;
    sideCount = 0;
  }
  // void drawAndBuildRoom() {
  //   drawRoom();
  //   buildDoors();
  // }
  //
  // void drawRoom() {
  //
  // }

  void buildDoors() {
    int[] sides = new int[4];
    sides[0] = "left";
    sides[1] = "right";
    sides[2] = "top";
    sides[3] = "bottom";

    if (entryDoor === "left") {
      entryDoor.drawDoor("left");
      side[0] = null;
    } else if (entryDoor === "right") {
      entryDoor.drawDoor("right");
      side[1] = null;
    } else if (entryDoor === "top") {
      entryDoor.drawDoor("top");
      side[2] = null;
    } else if (entryDoor === "bottom") {
      entryDoor.drawDoor("bottom");
      side[3] = null;
    }
int numSides = random(0, 3);
int count = 0;
while(count !== numSides) {
  int pos = random(0, 3);
  if(side[pos] !== null) {
        var door = doorList.get(count);
        door.drawDoor(side[pos]);
    count++;
    side[pos]= null;
  }
  }

  }
}
  //DrawRoom, DrawDoor, Door Arraylist, Room Arraylist, ensure room to room
