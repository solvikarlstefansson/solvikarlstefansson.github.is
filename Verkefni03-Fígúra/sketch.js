// Hér kemur kóðinn þinn:
var bukur = 100;
var litur = 100;

function setup(){
    createCanvas(600,600);
    rectMode(CENTER);
}


function draw() {
background(0);
fill(51, 153, 255);
ellipse(mouseX,mouseY+bukur/2,200,40);//pollur
fill(51, 204, 255);
ellipse(mouseX,mouseY+bukur/2,180,35);//pollur
fill(51, 153,255);
ellipse(mouseX,mouseY+bukur/2,150,30);//pollur
fill(litur,180,50);
rect(mouseX,mouseY,50,bukur);//bukur
fill(255,0,litur);
rect(mouseX,mouseY-bukur/2,100,100);//haus
fill(255);
rect(mouseX - 25,mouseY-10-bukur/2 ,30,30);//augu
rect(mouseX + 25,mouseY-10-bukur/2 ,30,30);//augu
fill(0);
rect(mouseX - 25,mouseY-10-bukur/2 ,10,10);//augasteinn
rect(mouseX + 25,mouseY-10-bukur/2 ,10,10);//augasteinn
fill(51, 153, 255);
rect(mouseX+25,mouseY,20,bukur+10);//tar
rect(mouseX-25,mouseY,20,bukur+10);//tar

}

function mousePressed(){
  bukur = random(50,150);
  litur = random (50,200);
}
