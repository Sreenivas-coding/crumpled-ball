
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var garbagecan, garbagecan2, garbagecan3;
var packageBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(700,100,10);

	garbagecan= new Garbage(600,100,10,40);
	garbagecan2= new Garbage(400,100,10,40);
	garbagecan3= new Garbage(800,100,10,40);


	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  paper.display();
  garbagecan.display();
  garbagecan2.display();
  garbagecan3.display();
  ground.display();
  drawSprites();
 
}



