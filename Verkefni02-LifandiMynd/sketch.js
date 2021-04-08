// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(600, 600);
  background(0,0,0);
  frameRate(4);

}

function draw() {
  strokeWeight(3);
  fill(100,100,100); //sett upp sem(x-hnit,y-hnit,lengd,breydd);
  triangle(0, 600, 300, 400, 600, 600);//fjallið
  fill(random(100,250),4,4);
  ellipse(300,430,100,50);//gígurinn
  fill(150,150,150);
  triangle(300,430,100,random(50,300),500,random(50,200));//gos mökkur
}
