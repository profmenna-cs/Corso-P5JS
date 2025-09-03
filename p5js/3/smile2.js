function setup() {
  // Eseguito una volta
  createCanvas(400, 400);
}

function draw() {

fill(255, 255, 0);
ellipse(200, 200, 300, 300);

let occhio = 40;
fill(0, 0, 0);
ellipse(150, 150, occhio, occhio);
ellipse(250, 150, occhio, occhio);

line(170, 250, 230, 250);

}
// face
