var magn = 1;

function setup() {
  createCanvas(400,400);
  frameRate(2);
  strokeWeight(2);
  fill(255,0,100);
}

function draw() {
  background(255, 215, 0);
  for(var y = 20; y < height; y = y + 30){
    magn = random (0,13);
    for(var i = 0; i < magn; i++){
      ellipse(15 + i*30,y,10,10);
    }
  }
}
