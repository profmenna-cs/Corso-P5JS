function setup() {
  createCanvas(400, 400);
}

let x = 25
let velocità = 5;

function pallone(x)
{
    fill(66, 66, 66);
    ellipse(x, 200, 50, 50);
}

function draw() {
    background(200, 255, 200);
    
    pallone(x);

    x = x + velocità;

    if (x > 375)
      velocità = -5;
    if (x < 0)
      velocità = 5;
}