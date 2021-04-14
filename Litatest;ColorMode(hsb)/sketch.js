// Hér kemur kóðinn þinn:

let h = 0;
var s = 400;
function setup() {
  createCanvas(400, 400);

  colorMode(HSB);
}

function draw() {
  background(h, 100, 200);

h++
if(h>=360){
  h=0;

  rect(0,0,s,s);
  s--
  if(s<=0){
    s=400;
  }

}



}
