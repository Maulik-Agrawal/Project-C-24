
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(200,450,40);
	groundObject = new Ground(800,670,1600,20);
	dustbinBottom = new Dustbin(1400,650,200,20);
	dustbinLeft = new Dustbin(1290,595,20,130);
	dustbinRight = new Dustbin(1510,595,20,130);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  groundObject.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:57,y:-57})
	}
}

