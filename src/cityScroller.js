//since these are variables we don't want to ever change in the code, we capitalize them
var WINDOW_WIDTH = screen.width;
var WINDOW_HEIGHT = 400;
var BACKGROUND_COLOR = 204;

Building testBuilding = new Building(0, random(30, 100));
//TODO: Create an instance of your Skyline object


// This function only runs once at the start of the program
void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window
  frameRate(30); //how many times the draw function is called per second
}

// called repeatedly
void draw() {
  background(BACKGROUND_COLOR); //needed in the draw function to "clear" the screen between updates
  testBuilding.drawAndUpdate();
  //TODO: Call drawSkyline on your Skyline object

}

/**
 * Represents one layer of a city skyline, which is a collection of buildings
 * that all move at the same speed.
 */
class Skyline {
  ArrayList < Building > buildingList;
  var xPosition;

  /**
   * Constructs a SkyLine with enough buildings to fill the screen
   */
  Skyline() {
    buildingList = new ArrayList < Building > ();
    xPosition = 0;
    fillSkyline(); //when a Skyline is created it automatically has enough buildings to fill the screen
  }

  void moveSkyline() {
    //TODO:update and draw the skyline, add buildings as buildings leave the screen
  }

  /**
   * Draws the skyline, placing it on the screen
   */
  void drawSkyline() {
    //TODO:loop through buildingList and draw each Building
  }

  /**
   * Updates the position of each Building in the SkyLine
   */
  void update() {
    //TODO:loop through buildingList and update each Building
  }

  /**
   * Adds a building of random building width and then updates
   * the x position to be the right corner of the building in order
   * to have the next building not overlap
   */
  void addBuilding() {
    var randomBuildingWidth = random(10, 80);
    Building currentBuilding = new Building(xPosition, randomBuildingWidth);
    buildingList.add(currentBuilding);
    xPosition += randomBuildingWidth;
  }


  void fillSkyline() {
    //TODO: add enough buildings to fill the screen
    // hint - use xPosition and WINDOW_WIDTH to figure out when you have
    //        enough buildings
  }
}

/**
* Represents a building, providing a way to place a building and move
* it across the screen.
*/
class Building {

  var xPosition, yPosition, buildingHeight, buildingWidth;
  var buildingColor;

  /**
  * Constructs a Building object
  * @param xPos - the x position of the top left corner of the building
  * @param bw - the building's width
  */
  Building(var xPos, var bw) {
    buildingHeight = random(30, 250);
    buildingWidth = bw;
    xPosition = xPos;
    buildingColor = color(0, 0, 255);
  }

  void drawAndUpdate() {
    var testSpeed = 5;
    drawBuilding();
    update(testSpeed);
  }

  /**
   * Draws a building always attached to the bottom of the screen
   */
  void drawBuilding() {
    fill(buildingColor);
    rect(xPosition, WINDOW_HEIGHT - buildingHeight, buildingWidth, buildingHeight);
  }

  /**
   * Updates the x position of the building
   * @param speed - the speed at which the building updates
   */
  void update(var speed) {
    xPosition += speed;
  }

}
