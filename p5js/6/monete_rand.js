let x_pos = 200;
let y_pos = 200;

function setup() {
    createCanvas(400, 400);
}

function moneta()
{
    let x = random(50, 350);
    let y = random(50, 350);

    fill(255, 242, 0);
    ellipse(x, y, 40, 40);

    fill(0, 0, 0);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("1", x, y);
}

function draw() 
{
    moneta();
    moneta();
    moneta();
    moneta();
    moneta();
};
