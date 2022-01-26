var boy,boyRunning;
var beach;
var beachImage;

function preload(){
boyRunning = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png");
beachImage = loadImage("beach.png");

}


function setup() {
  createCanvas(600,250);
 
  beach = createSprite(210,130,800,300);
  beach.addImage("beach",beachImage);

  boy = createSprite (50,200,30,50);
  boy.addAnimation("running",boyRunning);

}

function draw() {
  background(0,0,0);  








  drawSprites();
}