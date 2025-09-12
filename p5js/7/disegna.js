function setup() {
  createCanvas(400, 400);
}

function draw() {
    if (mouseIsPressed === true) {
      noStroke();
      fill(200, 0, 0);
      ellipse(mouseX, mouseY, 10, 10);
  }
}