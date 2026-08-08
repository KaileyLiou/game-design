/* 
Coordinate System Demo
Example from Meteor Catcher Game Tutorial, Part 2
By GWC Curriculum Team
*/

function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(13, 156, 144);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 5, 5);
  text('(x, y) = (' + mouseX + ' , ' + mouseY + ')', 20, 175);
  
  fill(255, 100);
  ellipse(376, 78, 50, 50);

}