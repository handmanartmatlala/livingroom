let wall;
let floor;
let tv;
let couch;

function preload() {
  wall = loadImage("whitewall.jpg");
  floor = loadImage("woodfloor.jpg");
  tv = loadImage('tv.gif');
  couch = loadImage("couch.gif");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(217, 255, 251);
  
  orbitControl();
  noStroke();
  
//floor
  push();
  translate(-30, 90, 300);
  texture(floor);
  rotateX(-1.6);
  plane(600,400);
  pop();

  //wall1
  push();
  translate(-30, -100, 100);
  texture(wall);
  plane(600,400);
  pop();
  
//wall2
  push();
  translate(265, -100, 300);
  texture(wall);
  rotateY(-1.58);
  plane(400);
  pop();

  //wall3
  push();
  translate(-330, -100, 300);
  texture(wall);
  rotateY(-1.58);
  plane(400);
  pop();
  
    //bed
  push();
  translate(-10, -30,150);
  texture(tv);
  //rotateY(-1.08);
  plane(250);
  pop();
  
    //couch
  push();
  translate(120,20,250);
  texture(couch);
  rotateY(-3.2);
  plane(200);
  pop();
  
  
    //couch
  push();
  translate(-120,20,350);
  texture(couch);
  //rotateY(-1.2);
  plane(200);
  pop();
}
