// Press a button to choose your path
// See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("pink");
  text(
    "Welcome to screen 0. This is the home screen.",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "plum";
  enterButton.text = "Enter";

  // Add A1 button
  a1Button.w = 50;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "plum";
  a1Button.text = "A1";

  // Add A2 button
  a2Button.w = 50;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "plum";
  a2Button.text = "A2";

  // Check enter button
  if(enterButton.mouse.presses()) {
    print("pressed");
  }
}

/* FUNCTIONS TO DISPLAY SCREENS */
