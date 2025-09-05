

function setup() {
    createCanvas(400, 400);
}

function draw() {
    let x = 200;
    let y = 200;

    fill(255, 242, 0);
    ellipse(x, y, 40, 40);

    fill(0, 0, 0);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("1", x, y);
};
