// Hér kemur kóðinn þinn:


function setup(){
  createCanvas(400,400);
  background(255,215,0);
  strokeWeight(2);
  colorMode(HSB);
}

function draw(){

  for(var x = 0; x < width ; x = x + 1){
    fill(random(0,360),75,100);
    for(var y = 0; y < height ; y = y+1 ){
    ellipse(10+x*20,10+y*20,15,15);
  }
  }
}
