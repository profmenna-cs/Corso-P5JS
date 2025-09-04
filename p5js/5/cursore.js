function setup() {
  createCanvas(400, 400);
}

// https://p5js.org/reference/#/p5/mouseX

function draw() {
    background(255, 255, 255);
    
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(mouseX, mouseY, 30, 30);
}