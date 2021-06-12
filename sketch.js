
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,400,1000,8);
	rightwall = new Ground(650,360,8,70);
	leftwall = new Ground(850,360,8,70);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(200,100,10,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  ground.show();
  rightwall.show();
  leftwall.show();

  fill("white");
  ellipse(ball.position.x, ball.position.y,10);
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:4,y:2});

	}

}



