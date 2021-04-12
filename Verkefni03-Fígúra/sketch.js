// Hér kemur kóðinn þinn:
var bukur = 100;
var litur = 100;
var h =100;
var j = 0;

function setup(){
    createCanvas(600,600);
    rectMode(CENTER);
    colorMode(HSB);
}


function draw() {
background(h,100,100);
h++
if(h>=360){
  h=0;
}
//kall1
fill(255,180, 255);
ellipse(mouseX,mouseY+bukur/2,200,40);//pollur
fill(255, 50, 255);
ellipse(mouseX,mouseY+bukur/2,180,35);//pollur
fill(255, 180,255);
ellipse(mouseX,mouseY+bukur/2,150,30);//pollur
fill(litur,180,50);
rect(mouseX,mouseY,50,bukur);//bukur
rect(mouseX+25,mouseY,70,bukur/5);//hendi
rect(mouseX-25,mouseY,70,bukur/5);//hendi
fill(j,200,200);
j++

rect(mouseX,mouseY-bukur/2,100,100);//haus
fill(255);
rect(mouseX - 25,mouseY-10-bukur/2 ,30,30);//augu
rect(mouseX + 25,mouseY-10-bukur/2 ,30,30);//augu
fill(0);
rect(mouseX - 25,mouseY-10-bukur/2 ,10,10);//augasteinn
rect(mouseX + 25,mouseY-10-bukur/2 ,10,10);//augasteinn
fill(255, 180, 255);
rect(mouseX+25,mouseY,20,bukur+10);//tar
rect(mouseX-25,mouseY,20,bukur+10);//tar
fill(168, 105, 50);
ellipse(mouseX,mouseY-50-bukur/2,150,30);
rect(mouseX,mouseY-70-bukur/2,100,50);


}




function mousePressed(){
  bukur = random(50,150);
  litur = random (0,360);
}
