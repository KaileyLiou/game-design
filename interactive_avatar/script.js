/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(148, 169, 142); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  // Hair
  fill(0);
  rect(117, 250, 45, 155);
  rect(283, 250, 45, 155);
  arc(200, 180, 210, 180, 180, 360); 

  //Face
  fill(253, 242, 230);
  ellipse(width/2, height/2, 175, 200);

  //Eyes
  if (mouseIsPressed) {
    // Eyes closed
    fill(0);
    ellipse(170, 170, eyeWidth, eyeHeight/8);
    ellipse(230, 170, eyeWidth, eyeHeight/8);
  } else {
    // Eyes opened
    fill(255);
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);
    fill(0);
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);
  }

  //Mouth
  fill(224, 122, 95);
  arc(200, 230, 50, 50, 0, 180);

  //Nose
  fill(253, 242, 230);
  triangle(200, 190, 190, 210, 210, 210);

  //Text
  fill(0);
  textSize(15);
  text('"Why fit in when you were \nborn to stand out?" \n- Dr. Seuss', 20, 20);

  //Directions for mouse press
  fill(0);
  textSize(15);
  text('Click to see \nme blink.', 300, 350);
}