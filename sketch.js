
var vel
var loc
let value = 0

function setup() {
  	var canvas = createCanvas(640, 480);
  	vel = [1, 2];
 	loc = [200, 200];
 	canvas.parent('sketch-holder')
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  
	background(255)
}

function draw() {
	background(value);
	fill(255);
	strokeWeight(1);
	ellipse(mouseX, mouseY,80,80);
	loc[0] = loc[0] + vel[0];
	loc[1] = loc[1] + vel[1];
	if (loc[0]<40 || loc[0] >width -40) {
		vel[0] *=-1
	}
    if (loc[1]<40 || loc[1] >height-40) {
		vel[1] *=-1
	}
	noFill();
	strokeWeight(10);
	rect(0, 0, width, height);

	
	
}

function keyPressed() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}