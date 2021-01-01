
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var chain,bobDiameter = 80,rope1,rope2,rope3,rope4,rope5;
var roof,roof2,roof3,roof4,roof5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(320,600,40);
	bob2 = new Bob(400,600,40);
	bob3 = new Bob(480,600,40);
	bob4 = new Bob(560,600,40);
	bob5 = new Bob(240,600,40);

	roof = new Roof(320-80,180,5);
	roof2 = new Roof(400-80,180,5);
	roof3 = new Roof(480-80,180,5);
	roof4 = new Roof(560-80,180,5);
	roof5 = new Roof(640-80,180,5);


	rope1 = new Chain(bob1.body,roof.body,-bobDiameter*-1,0)
	rope2 = new Chain(bob2.body,roof2.body,-bobDiameter*-1,0)
	rope3 = new Chain(bob3.body,roof3.body,bobDiameter,0)
	rope4 = new Chain(bob4.body,roof4.body,bobDiameter,0)
	rope5 = new Chain(bob5.body,roof5.body,bobDiameter*-4,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(95,231,231);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
}