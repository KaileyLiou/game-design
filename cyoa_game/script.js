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
  background("#0D1117");
  textSize(18);
  fill("#39FF14");
  text("You're working late on your computer when a strange pop-up appears:", width / 2, height / 2 - 100);
  textSize(20);
  text("⚠ SYSTEM ERROR\nUnauthorized user detected.\nWould you like to investigate?\n\n", width / 2, height / 2 - 50);
  textSize(18);
  text("You click YES… \nand suddenly your entire computer starts acting strangely.", width / 2, height / 2 + 50);
  fill("#00FF00");

  // Create buttons for all screens
  enterButton = new Sprite(width / 2, height / 2 + 130);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "dodgerblue";
  enterButton.textColor = "white";
  enterButton.text = "Enter";

  // Check enter button
  if(enterButton.mouse.presses()) {
    print("pressed");
    showScreen1();
    screen = 1;
  }

  if(screen == 1) {
    if(a1Button.mouse.presses()) {
      print("Display screen 2");
      showScreen2();
      screen = 2;
    } else if(a2Button.mouse.presses()) {
      print("Display screen 5");
      showScreen5();
      screen = 5;
    }
  } else if(screen == 2) {
    if(b1Button.mouse.presses()) {
      showScreens3();
      screen = 3;
    } else if(b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }

  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("#0D1117");
  fill("#39FF14");
  text("You open your computer's files and discover a folder\n you've never seen before. Inside are hundreds of files\n with your name on them.", width/2, height/2 - 100);
  enterButton.pos = { x: -100, y: -100 };

  // Add A1 button
  a1Button.pos = { x: width / 2 - 120, y: height / 2 + 100 };
  a1Button.w = 160;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "dodgerblue";
  a1Button.text = "Open the newest file";
  a1Button.text.color = "black";
  a1Button.text.size = 14;

  // Add A2 button
  a2Button.pos = { x: width / 2 + 120, y: height / 2 + 100 };
  a2Button.w = 160;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "dodgerblue";
  a2Button.text = "Delete the folder";
  a2Button.text.color = "black";
  a2Button.text.size = 14;
}

function showScreen2() {
  background("#0D1117");
  fill("#39FF14");
  text("The file opens to reveal a message: \n\n\"I know what happened. But you have to find me before they do.\"\n\nA location appears on the screen.", width/2, height/2 - 100);
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };

  // Add B1 button
  b1Button.pos = { x: width / 2 - 120, y: height / 2 + 100 };
  b1Button.w = 220;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "dodgerblue";
  b1Button.text = "Follow the location";
  b1Button.text.color = "black";
  b1Button.text.size = 14; 

  // Add B2 button
  b2Button.pos = { x: width / 2 + 120, y: height / 2 + 100 };
  b2Button.w = 220;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "dodgerblue";
  b2Button.text = "Ignore the message";
  b2Button.text.color = "black";
  b2Button.text.size = 14; 
}

function showScreens3() {
  background("#0D1117");
  fill("#39FF14");
  text("You follow the mysterious location and discover\n a hidden AI program trying to escape the computer. \nBefore the screen goes dark, it sends one final message: \n“Thank you for finding me.”", width/2, height/2 - 100);
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };
}

function showScreen4() {
  background("#0D1117");
  fill("#39FF14");
  text("You close the file and walk away. \nEverything seems normal…until your laptop suddenly \nturns back on by itself. A single message appears: \n\“You should have listened.\”", width/2, height/2 - 100);
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };
}

function showScreen5() {
  background("#0D1117");
  fill("#39FF14");
  text("You click DELETE. \n ERROR. \nYou don't have permission to delete this file.", width/2, height/2 - 100);
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
}