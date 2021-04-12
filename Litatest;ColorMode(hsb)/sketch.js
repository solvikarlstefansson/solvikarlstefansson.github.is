// Hér kemur kóðinn þinn:

let h = 0;
function setup() {
  createCanvas(400, 400);

  colorMode(HSB);
}

function draw() {
  background(h, 100, 200);

h++
if(h>=360){
  h=0;
}



}
