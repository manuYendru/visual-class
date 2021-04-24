var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 80);
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  movingrect.debug=true;
  fixedrect.debug=true;
}

function draw() {
  background("purple");
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
    &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }  
  else
  {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  drawSprites();
}