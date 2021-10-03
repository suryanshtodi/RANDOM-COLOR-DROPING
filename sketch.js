function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  x = random(width);
  y = random(height);
  r = random(255);
  g = random(255);
  b = random(255);
  size = random(0, 16);
  opacity = random(999);
  fill(r, g, b, opacity);
  circle(x, y, size);
}
