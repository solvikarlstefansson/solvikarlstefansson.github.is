var l = 40;
var x = 400;
var y =200;
var f = 100;

function setup() {
  createCanvas(400,400);
  frameRate(100);
  strokeWeight(2);
  background(0,0,250);
  colorMode(HSB);
  rectMode(CENTER);
}

function draw(){
  fill(0,100,0);
  rect(x,200,x,400)
  fill(54,100,100);
  ellipse(x,100,80,80);
  x--
  if(x<=0){
    x=400;
  }

  fill(24,100,37);
  rect(150,250,50,150);
  frameRate(4);
  fill(l,100,100);
  l++
  if(l>=100){
    l=40;
  }
  ellipse(150,150,150,100);
  rect(200,400,400,200);


  for(var r = 0; r <= width ; r = r + 1){
    for(var f = 0; f <= height+300 ; f = f+1 ){
      noStroke();
      fill(260,random(0,100),100);
    ellipse(10+r*20,10+f*10,4,4);
  }
}




  }
