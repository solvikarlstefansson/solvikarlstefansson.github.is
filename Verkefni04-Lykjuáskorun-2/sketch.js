function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  colorMode(HSB);
  frameRate(2);
  strokeWeight(3);
}

function draw() {
  for(var i = 300; i > 0; i = i - 30){
    fill(random(180,360),80,100);
    ellipse(200,200,i,i);
  }
}
