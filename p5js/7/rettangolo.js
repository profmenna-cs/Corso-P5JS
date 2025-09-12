function setup() {
  createCanvas(400, 400);
}

function draw() {
    if (mouseY < 200) {
        fill(255, 0, 0);
    }
    else {
        fill(220, 220, 0);
    }   

    rect(0, 0, 400, 200);
}