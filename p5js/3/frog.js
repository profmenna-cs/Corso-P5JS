function setup() {
  // Eseguito una volta
  createCanvas(400, 400);
}

function draw() {

let x = 200;
let y = 250;

let x_occhio_sx = x - 50;
let x_occhio_dx = x + 50;
let y_occhio = y - 50;

noStroke();        // forme senza bordo!
fill(30, 204, 91); // verde rana

ellipse(x, y, 200, 100); // face
ellipse(x_occhio_sx, y_occhio, 40, 40); // left eye socket
ellipse(x_occhio_dx, y_occhio, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x_occhio_sx, y_occhio, 30, 30); // left eyeball
ellipse(x_occhio_dx, y_occhio, 30, 30); // right eyeball

fill(0, 0, 0);
ellipse(x, y, 120, 50);

}