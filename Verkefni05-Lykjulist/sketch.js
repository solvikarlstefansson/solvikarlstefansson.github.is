
function setup() {
  createCanvas(400,400);
  frameRate(2);
  strokeWeight(2);
    background(0,0,0);
  colorMode(HSB);
  rectMode(CENTER);
}

function draw(){
    for(var i = 10; i<hight;i=i+10){
      for(var x = 10; x<width; x=x+5){
      rect(random(0,400),random(0,400),x,i);
    }
    }


}
