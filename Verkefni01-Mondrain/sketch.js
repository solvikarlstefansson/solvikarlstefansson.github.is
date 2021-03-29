// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(800, 800);
  background(250,0,0);
  frameRate(4);
}

function draw() {

  fill(255,45,0); //sett upp sem(x-hnit,y-hnit,lengd,breydd);
  rect(0,0,230,250);//rauður uppi v
  fill(255);
  rect(230,0,370,250);//hvítur uppi h
  fill(255);
  rect(0,250,230,350);//hvítur niðri v
  fill(245,245,245);
  rect(230,250,300,300);//hvítur miðja
  fill(0,58,197);
  rect(530,250,70,170);//blár
  fill(255);
  rect(530,420,70,180);//hvítur niðri h
  fill(240,230,0);
  rect(230,550,150,50);//gulur
  fill(0);
  rect(380,550,150,50);
}

function setup(){
    createCanvas(600,600);
    background(0,250,0);
    fill(100);
    ellipse(30,100,50,50);
    fill(0);
    textSize(30);
    text("Halló heimur",70,30);
}
