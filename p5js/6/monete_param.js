let x_pos = 200;
let y_pos = 200;

function setup() {
    createCanvas(400, 400);
}

function moneta(x, y)
{
    fill(255, 242, 0);
    ellipse(x, y, 40, 40);

    fill(0, 0, 0);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("1", x, y);
}

function draw() 
{
    moneta(50, 200);
    moneta(100, 200);
    moneta(150, 200);
    moneta(200, 200);
    moneta(250, 200);
};

function mouseClicked()
{
    moneta(mouseX, mouseY);
}
