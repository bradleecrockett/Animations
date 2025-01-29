// Sprite Animations
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// 1Declare a variable to hold the sprite sheet
let character;

//Use the preload function to load the spritesheet images
function preload() {
  character = loadImage("img/character-walk.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  // TODO 1 call the image() function to display the character image.
  // image(source, x, y)

  // TODO 2 Adjust the size to display as 64x64 pixels
  // Make the image display as 64x64 pixels
  // image(source, dX, dY, dW, dH)

  // TODO 3 Adjust the image call again to only display a single
  // frame of the animation. (Each frame is 32x32)
  // image(source, dX, dY, dW, dH, sX, sY, sW, sH)

  // TODO 4 Modify the image call to advance to the next frame.
  // and the next and the next...

  // TODO 5 Now declare a global variable named cFrame and initialize
  // it to zero modify the sX argument (arg #6) in the image call
  // to be:    cFrame * 32

  // TODO 6 In the draw function increment cFrame by 1.  What happens?

  // TODO 7 Add a conditional statement to make the animation reset so the
  // animation loops

  // TODO 8 Declare a variable named cX to store the location
  // of the character increment the cX variable to make the character
  // move across the screen

  // TODO 9 Make the character respawn at the left when it goes off
  // the right side of the canvas

  // TODO 11 Modify the program to use a different sprite or spritesheet
  // More spritesheets can be found at https://opengameart.org

  // TODO Clean up code by removing "Magic Numbers" and replacing
  // them with variables or Constants
}
