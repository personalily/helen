p5 = require("p5")

function setup() {
  createCanvas(2000, 1000);
  button = createButton("click here");
  button.position(width / 2, height / 2);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, width / 2, height / 2);
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  if (timer == 0) {
    textSize(20);
    text("game over", width / 2, height * 0.667);
  }
}
