/* SPRITES */
let sprite; // Store sprite object
let mover;

function setup() {
  createCanvas(400, 400);
  world.gravity.y = 10;

  // Create sprite at center-top of canvas
  sprite = new Sprite(200, 50, 50);
  sprite.collider = 'dynamic';
  sprite.color = 'blue';
  sprite.vel.x = 3;

  let floor = new Sprite(200, 390, 400, 20);
  floor.collider = 'static';
  floor.color = 'gray';

  mover = new Sprite(200, 345, 100, 20);
  mover.collider = 'kinematic';
  mover.color = 'purple';
}

function draw() {
  // Clear and redraw background each frame
  background(255);
  if (kb.pressing('right')) mover.vel.x = 3;
  else if (kb.pressing('left')) mover.vel.x = -3;
  else mover.vel.x = 0;
}