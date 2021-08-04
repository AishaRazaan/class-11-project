var track,trackMoving,invisibleSides;
var boy,boyRunning;

function preload(){

  //pre-load images

  boyRunning = loadAnimation("Runner-1.png","Runner-2.png");
  trackMoving = loadImage("path.png") 
}

function setup(){
  
  createCanvas(400,400);

  //create sprites here

  track = createSprite(200,200);
  track.addImage("pathMoving",trackMoving);
  track.velocityY=4;
  track.scale=1.2;

  boy = createSprite(300,200,20,50);
  boy.addAnimation("boyMoving",boyRunning);
  boy.scale=0.05;

}

function draw() {

  background(0);

  if(track.y > 400){
    track.y=height/2;
  }
   
    drawSprites();

    boy.x = World.mouseX;
    if(boy.x<50){
      boy.x=50;
    }

    if(boy.x>350){
      boy.x=340;
    }
}
