var WINDOW_WIDTH = 300;
var WINDOW_HEIGHT = 400;
var BACKGROUND_COLOR = color(160,82,45);
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';

Player main = new Player(100, 100);
Door booty = new Door(10, 150);

void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window
  frameRate(30); //how many times the draw function is called per second
}

void draw() {
  background(BACKGROUND_COLOR);
  main.drawAndUpdatePlayer();
  booty.drawAndUpdateDoor();
}

void keyPressed() {
    if (keyCode == UP_ARROW) {
      main.updatePlayer("up");
    }
    else if (keyCode == DOWN_ARROW) {
      main.updatePlayer("down");
    }
    else if (keyCode == LEFT_ARROW) {
      main.updatePlayer("left");
    }
    else if (keyCode == RIGHT_ARROW) {
      main.updatePlayer("right");
    }
  else {
    return null;
  }
}

class Player {
  var playerX;
  var playerY;

  Player (var px, var py) {
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
  var doorX;
  var doorY;

  Door (var ds) {
    doorX = var dx;
    doorY = var dy;
    doorSide = ds;
  }

  void drawAndUpdateDoor () {

    drawDoor();
  }

  void drawDoor () {
  rect(5, 20, doorX, doorY);
  }
}

//DrawRoom, DrawDoor, Door Arraylist, Room Arraylist, ensure room to room
