var car , wall , speed , weight , deformation

function setup() {
  createCanvas(800,400);
  
  car = createSprite(20,200, 30,30)
  wall= createSprite(780,200,20,200)

  speed= random(55,90)
  weight= random(400,1500)
  
  wall.shapeColor= ("green")
  car.shapeColor= color(80,80,80)

  car.velocityX= speed
  
}

function draw() {
  background(255,255,255);
  if (car.x+15  > wall.x-10){
    car.velocityX=0
    deformation= (0.5*weight*speed*speed)/22500
    if (deformation< 100){
      car.shapeColor= color(0,255,0)
    }
    else if (deformation> 100 ||deformation <180){
       car .shapeColor= color(230,230,0)
    }
    else{
      car .shapeColor= color(255,0,0)
  }

  }
  drawSprites();
}