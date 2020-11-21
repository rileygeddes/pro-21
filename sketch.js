var bullet,wall
var speed,weight
var thickness


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
  thickness = random(22,83)
//my screen is less than 1600 pixels so ive set to 1300 to see the wall
  wall=createSprite(1300,200,thickness,200)
  wall.shapeColor=color(80,80,80)
  bullet=createSprite(50,200,50,25)
  bullet.shapeColor="white"
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  drawSprites();

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0
    var damge=0.5 * weight * speed* speed/(thickness* thickness*thickness)
    if(damge>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damge<10){
      wall.shapeColor=color(0,255,0)
    }
  }
}