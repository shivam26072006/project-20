var car ,  wall;
var speed , weight;
 
 

function setup() {
  createCanvas(800,500);

  car = createSprite(100, 100, 50, 50);
  wall = createSprite(750,100,10,100);

  speed = random(55,90);
  weight = random(400,1500);

}

function draw() {
  background("black");  

  car.velocityX = speed;

  deformation(); 

  drawSprites();
}

function deformation(){

  if(wall.x-car.x<(car.width+wall.width)+/2){

    car.velocityX = 0;
    var deformatiom = 0.5 * weigtht * speed * speed/22509;
    if(deformation>180){
   
     car.shapeColor = color(255,0,0);
   
   }
   
   if(deformation<180 && deformation>100){
   
     car.shapeColor = color(230,230,0);
   
   }
   
   if(deformatiom<100){

     car.shapeColor = color(0,225,0);

   }

   }

}