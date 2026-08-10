/* BLanK sLaTEs R hARd
 * 
 * Copy and paste this code into the script.js 
 * file to see it in action.
 * 
 * Change or add on to it to make it your own!
 *
 */

/* VARIABLES */
let diameter = 250; /* Change the value to see what happens */

/* SETUP RUNS ONCE */
function setup() { 
  createCanvas(400, 400);
}

/* DRAW LOOP REPEATS */
function draw() { 
  background(240);

  // Circle background (a great building block!)
  noStroke();
  fill(12, 107, 104);
  circle(width / 2, height / 2, diameter);

  // Message on top
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Brave, not perfect", width / 2, height / 2);
}

/* FUNCTIONS */
