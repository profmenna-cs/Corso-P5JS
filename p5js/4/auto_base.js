function setup() {
  createCanvas(400, 400);
}

// position of the car

function draw() {

    background(151, 244, 247);
    noStroke();

    let x = 20;
    let y = 150;

    // draw the car body
    fill(255, 0, 115);
    rect(x, y + 30, 100, 30);
    rect(x + 20, y, 60, 30);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(x + 25, y + 60, 24, 24);
    ellipse(x + 75, y + 60, 24, 24);

    console.log(x);
}