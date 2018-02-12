# Getting Started

The `cityScroller.js` file comes with a skeleton implementation of
a Skyline class you may utilize to build your scrolling city.

Start my instantiating a Skyline object. (e.g. `new`)

Update the `draw` method to draw your Skyline object using the `drawSkyline` method.

Currently, the `drawSkyline` method doesn't do anything. This is where you'll need to
write the code which draws your buildings. You'll eventually need to loop over all of
the buildings in the `buildingList` member variable. For now, just draw the first
building in that `ArrayList`.

(Hint 1: `get(0)` retrieves the 0th element of an array)
(Hint 2: Take a look at the methods in the `Building` class)

# Suggested Next Steps

1. Add a few more buildings to the `buildingList` in fillSkyline
2. Add a for loop to your `drawSkyline` method which iterates over
   your buildingList and draws each of the buildings.
3. Write a loop in your `fillSkyline` method which adds buildings to
   your `buildingList` until they cover the entire widh of your screen.
   (Hint: take a look at how the building constructor modifies xPosition)
4. Write a for loop in the `update` method which iterates over each building
   and updates it. (Hint: look at the methods available in the Building class).
5. Implement your `moveSkyline` by utilizing the `drawSkyline` and `update` methods
   you already wrote.
6. Update the `draw` method to call `moveSkyline`

Creating multiple skylines and drawing each of them in the `draw` method will give
the illusion of several layers. Can you modify the `Skyline` constructor to create
different levels of building heights? What about buildings that move at different speeds?