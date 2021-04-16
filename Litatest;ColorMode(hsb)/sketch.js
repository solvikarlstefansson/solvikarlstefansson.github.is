// Hér kemur kóðinn þinn:


function setup() {
  createCanvas(400,400);
  frameRate(2);
  strokeWeight(2);
  background(0);
  colorMode(HSB);
  rectMode(CENTER);
}

function draw(){

  for(var x = 0; x < width ; x = x + 1){
    for(var y = 0; y < height ; y = y+1 ){
      fill(random(0,360),75,100);
    ellipse(10+x*20,10+y*20,15,15);
  }
}
    fill(0,360,0);
    ellipse(200,150,100,100);
    ellipse(150,100,80,80);
    ellipse(250,100,80,80);
    fill(36, 37, 100);
    noStroke();
    ellipse(180,160,40,80);
    ellipse(220,160,40,80);
    ellipse(200,180,90,50);
    fill(0,0,360);
    ellipse(180,150,20,40);
    ellipse(220,150,20,40);
    fill(0,360,0);
    ellipse(180,160,15,20);
    ellipse(220,160,15,20);
    ellipse(200,170,20,15);
    stroke(0,360,0);
    strokeWeight(4);
    line(185,190,215,190);

}
