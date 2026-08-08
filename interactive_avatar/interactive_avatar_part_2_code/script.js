/* VARIABLES */

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400, 400);

  //sets the background color
  background(255, 249, 226);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Face
  ellipse(200, 200, 175, 200);

  //Eyes
  ellipse(170, 170, 50, 40);
  ellipse(230, 170, 50, 40);

  //Pupils
  ellipse(170, 170, 22, 25);
  ellipse(230, 170, 22, 25);

  //Mouth
  arc(200, 230, 50, 50, 0, 180);

  //Text
  textSize(15);
  text('We will customize this \ntext later on in the \nproject to reflect your avatar.', 20, 20);
}