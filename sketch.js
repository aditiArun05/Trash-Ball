
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,trash1,trash2,trash3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper1=new paper()
	//Create the Bodies Here.
ground1=new ground()
trash1=new trash(660,610,10,100,)
trash2=new trash(550,610,10,100)
trash3=new Trash3(600,660,110,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
 ground1.display()
 trash1.display()
 trash2.display()
 trash3.display()
 
}
function keyPressed(){
	if (keyCode === UP_ARROW)
	{
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-55})
	}







}



