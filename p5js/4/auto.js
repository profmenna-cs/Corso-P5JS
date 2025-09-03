function setup() {
  // Eseguito una volta
  createCanvas(400, 400);
}

// position of the car
let x = 10;

function draw() {

background(151, 244, 247);
noStroke();

// draw the car body
fill(255, 0, 115);
rect(x, 200, 100, 20);
rect(x + 15, 178, 70, 40);

// draw the wheels
fill(77, 66, 66);
ellipse(x + 25, 221, 24, 24);
ellipse(x + 75, 221, 24, 24);

x = x + 1;

console.log(x);

}