var ship,ship1
var sea,sea1

function preload(){
  ship1=loadanimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  sea1=loadanimation(sea.png)

}

function setup(){
  createCanvas(600,500);
  sea.addAnimation("running",sea1)
  sea.scale=0,5;
  sea.velocityX=1;

  // creating ship
  ship = createSprite(50,200,20,50);
  ship.addAnimation("running",ship1);
  edges = ceateEdgeSprites();

  //addinng scale and position of ship 

ship.scale=0,25
ship.x = 90;
ship.y = 300;
  
}

function draw() {
  background("blue");
  if(keydown("enter")){
    ship.velocityX = 5;
  }
  if(keydown(left)){
    ship.velocityX = 0;
  }
  if(keydown("space")){
   ship.velocityX =0;
  }
  if(sea.x< 0){
    sea.x = sea.width/2;
  }
  //stop ship from failling down 
  ship.collidie(edges[3])
 drawSprites();
}