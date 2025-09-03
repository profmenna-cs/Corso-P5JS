function setup() {
  // Eseguito una volta
  createCanvas(400, 400);
}

let sun_y = 350; 

function draw()
{
    noStroke();
    // the beautiful blue sky
    background(82, 222, 240);

    // the starting size for the sun
    let sun_size = 30;

    // The sun, a little circle on the horizon
    fill(255, 204, 0);
    ellipse(200, sun_y, sun_size, sun_size);

    // The land, blocking half of the sun
    fill(76, 168, 67);
    rect(0, 300, 400, 100);

    sun_y = sun_y - 2;
}

