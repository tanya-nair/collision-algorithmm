var movingRect, fixedRect;

function setup() {
  createCanvas(1700,1000); 
  fixedRect = createSprite(400, 400, 300, 500);
  fixedRect.shapeColor = "#f88379";
  movingRect = createSprite(800,400,350,430);
  movingRect.shapeColor = "#f88379";
}


function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2

    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2

    && movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2

    && fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2 ) {

    movingRect.shapeColor = "#87ceeb";
    fixedRect.shapeColor = "#87ceeb";
  } else {
    movingRect.shapeColor = "#f88379";
    fixedRect.shapeColor = "#f88379";
  }
  drawSprites();
}