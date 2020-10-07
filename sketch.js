var bullet,thickness,speed,weight,wall,damage
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(0,100,10,10);
  bullet.shapeColor="white"
  thickness=random(22,83);
  wall=createSprite(1500,100,thickness,200)
  wall.shapeColor="blue";
  speed=random(30,50);
  weight=random(30,52);
  bullet.velocityX=speed;
  
}

function draw() {
  background(0,0,0); 
  if(hascollided(bullet,wall)) {
    bullet.velocityX=0;
    damage= (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  
  if(damage>10){
    wall.shapeColor="red"
  }
  else{
    wall.shapeColor="green"
  }
}
  drawSprites();
}
function hascollided(b,w){
  bulletRightedge= b.x+b.width
  wallLeftedge=w.x
  if(bulletRightedge>=wallLeftedge){
    return true
  }
  else{
    return false
  }
}