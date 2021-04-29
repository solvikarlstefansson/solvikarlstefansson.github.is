var h=180;
var s=0;
var j = 180;
var r = 0;
function setup() {
  createCanvas(400,400);
  background(0,0,0);
  colorMode(HSB);
  rectMode(CENTER);
}

function draw(){
    if(!mouseIsPressed){
      if(mouseX<200&&mouseY<200){
        fill(h,100,100)
        h++
        if(h>=360){
          h=180
        }
        ellipse(mouseX,mouseY,20,20);
      }
        if(mouseX>200&&mouseY<200){
          fill(s,100,100)
          s++
          if(s>=180){
          s=0
          }
          ellipse(mouseX,mouseY,20,20);
      }
      if(mouseX>200&&mouseY>200){
        fill(j,100,100)
        j++
        if(j>=360){
        j=180
        }
        rect(mouseX,mouseY,20,20);
      }
      if(mouseX<200&&mouseY>200){
        fill(r,100,100)
        r++
        if(r>=180){
        r=0
        }
        rect(mouseX,mouseY,20,20);
      }
  }
}
