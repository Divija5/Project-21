var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup(){
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
}
	


	ball = Matter.Bodies.circle(30, 350, 15, ball_options);
	World.add(world, ball);


	

	//Create the Bodies Here.

	groundObj = new Ground(width/2, height-30, width, 20);
	leftWall = new Ground(700, 600, 10, 150);
	rightWall = new Ground(900, 600, 10, 150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 15)
  groundObj.display();
  leftWall.display()
  rightWall.display()
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:50, y:-35});
	}
}

