
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundB;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundB = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);

	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Body.circle(400,350,20,options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  groundB.display();
  leftSide.display();
  rightSide.display();

  background("black");

  ellipse(ball.posiyion.x,ball.position.y,20);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05});
	}
}



