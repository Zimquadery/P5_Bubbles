let bubble1 = [];
function setup() {
  colorMode(HSL, 255, 255, 255, 255);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    b = new bubble(random(width), random(height), random(30, 60));
    bubble1.push(b);
  }
}

function draw() {
  clear();
  if (mouseIsPressed) {
    b = new bubble(mouseX, mouseY, random(30, 60));
    bubble1.push(b);
  }
  background(45);
  for (let i = 0; i < bubble1.length; i++) {
    bubble1[i].behave();
  }
  cursor(HAND, 31, 31);
}
