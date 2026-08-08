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
  
  // Draw an ellipse
  ellipse(60, 320, 100, 150);

  // Draw a line
  line(150, 380, 380, 380);
  
  // Draw a rectangle 
  rect(200, 200, 120, 40);
  
  // Draw an arc
  arc(320, 50, 100, 100, 0, 180);
  
  // Sign your name
  textSize(40);
  text('Kailey', 150, 380);
  
  // Add a short description
  textSize(15);
  text('This is a piece of art \nwe created to practice \ndrawing shapes and text \nto a p5.js sketch.', 20, 20);

}