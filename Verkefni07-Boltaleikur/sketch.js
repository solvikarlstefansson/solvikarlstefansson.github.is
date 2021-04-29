var boltiX = 100;
var boltiY = 100;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;
var b=0;
function setup() {
	createCanvas(400,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
  colorMode(HSB);
}

function draw() {
  background(0,100,0);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
    b=b+20;
  }
  //Athuga hvort boltinn snerti vegginn v
  if((boltiX < 0+boltiStaerd/2)){
    hradiX = hradiX*-1;
    b=b+20;
  }
  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
    b=b+20;
  }


	// Teikna boltann
  fill(b,100,100);

  rect(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(b,123,227);
  rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(mouseX, spadiY, 10,10);
	// Teikna stigin
  fill(b,100,100);
  text("Stig: " + stig,10,20);

  if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2){
      hradiY = hradiY * -1;
      stig = stig + 1;
      b=b+30
}
  if(b>=360){
    b=0;
  }

  if(boltiY>=height){
    fill(0,100,100);
    text("GAME OVER",150,height/2);
    if(stig==1){
      fill(0,100,100);
      text("Þú náðir "+stig+" stigi",110,height/2+50);
    }
    else{
      fill(0,100,100);
      text("Þú náðir "+stig+" stigum",110,height/2+50);
    }
  }








}
