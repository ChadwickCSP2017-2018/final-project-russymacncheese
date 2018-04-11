var WINDOW_WIDTH = 300;
var WINDOW_HEIGHT = 400;
var BACKGROUND_COLOR = color(160, 82, 45);
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';

Player main = new Player(100, 100);
Door booty = new Door("left");

void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window
  frameRate(30); //how many times the draw function is called per second
}

void draw() {
  background(BACKGROUND_COLOR);
  main.drawAndUpdatePlayer();
  booty.drawDoor();
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


  void drawDoor() {
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
  Arraylist < Door > doorList;
  var entryDoor;
  var sideCount;

  Room(var ed) {
    doorList = new Arraylist < Door > ();
    entryDoor = ed;
    sideCount = 0;
  }

  void buildDoors() {
    if (entryDoor === "left") {
      entryDoor.drawDoor("left");
    } else if (entryDoor === "right") {
      entryDoor.drawDoor("right");
    } else if (entryDoor === "top") {
      entryDoor.drawDoor("top");
    } else if (entryDoor === "bottom") {
      entryDoor.drawDoor("bottom");
    }
    int[] sides = new int[4];
    sides[0] = "left";
    sides[1] = "right";
    sides[2] = "top";
    sides[3] = "bottom";

    var j = random(0, 3);
    while (sideCount <= j && )
    for (var i = 0; i = j; i++) {
      var door = doorList.get(i);
      door.drawDoor();
    }
  }

  //DrawRoom, DrawDoor, Door Arraylist, Room Arraylist, ensure room to room
