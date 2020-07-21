
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var base;
var left;
var right;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(400,490,800,10);
	
  base=new Dustbin(600,470,150,10);
  left= new Dustbin(525,430,10,75);
  right= new Dustbin(675,430,10,75);
  paper1= new Paper(100,300,15);
}


function draw() {
 
  background(0);
Engine.update(engine);
  ground.display();
  base.display();
  left.display();
  right.display();
paper1.display();

  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:13,y:-13})
	}
}



