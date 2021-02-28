
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine,world;
var log1,log2,log3;
var ground;
var ball;



function setup() {
	var canvas = createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	log1=new Log(505,645,20,95);
	ground=new Ground(400,650,800,15);
	log2=new Log(595,634,20,95);
	log3=new Log(550,630,105,20);
	ball=new Ball(300,615,40);


	Engine.run(engine);
  
}


function draw() {
	background("lightblue");
	rectMode(CENTER);
	Engine.update(engine);

	log1.display();
	ground.display();
	log2.display();
	log3.display();
	ball.display();

	



  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55})
	}
  
  
  }



