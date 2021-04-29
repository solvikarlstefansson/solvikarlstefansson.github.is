var x = 0;
  var y = 0;
  var xSpeed = 2;
  var ySpeed = 0;
  var gravity = 0.15;
  var bukur= 100;
  var h = 0;
  var j = 50;

function setup(){
  createCanvas(400,400);
  colorMode(HSB);
  rectMode(CENTER);
}


    function draw() {
      background(255,200,0);

      x = x + xSpeed;
      y = y +ySpeed;
      ySpeed = ySpeed+gravity;
      if ((x > width) || (x < 0)) {
        xSpeed = xSpeed * -1;
      }
      //til að láta boltann skoppa þegar neðri rönd snertir
      //skjáinn þarf að draga 15 frá height, því þvermál
      //boltans er 30.
      if (y > (height-15)) {
        ySpeed = ySpeed * -0.9;
        y = height-15; //til að boltinn festist ekki
        bukur=(random(50,100));

      }
      kall(x,y,bukur);
    }

function kall(kallx,kally,kallbukur){
  fill(h,100,100);
  h++
  if(h>=360){
    h=0;
  }
  rect(kallx,kally,50,kallbukur);//bukur
  rect(kallx+25,kally,70,kallbukur/5);//hendi
  rect(kallx-25,kally,70,kallbukur/5);//hendi

  fill(j,100,100);
  j++
  if(j>=360){
    j=0;
  }

  rect(kallx,kally,100,100);//haus

  fill(0,0,100);
    rect(kallx - 25,kally-10-kallbukur/2 ,30,30);//augu
    rect(kallx + 25,y-10-kallbukur/2 ,30,30);//augu

  fill(0,100,0);
  rect(kallx - 25,kally-10-kallbukur/2 ,10,10);//augasteinn
  rect(kallx + 25,kally-10-kallbukur/2 ,10,10);//augasteinn

  fill(30,100,50);
  ellipse(kallx,kally-50-kallbukur/2,150,30);//hattur
  rect(kallx,kally-70-kallbukur/2,100,50);//hattur


  }
